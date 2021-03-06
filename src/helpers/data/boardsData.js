import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { deletePinBoardRelationship } from './board_pinsData';

const dbUrl = firebaseConfig.databaseURL;
// GET BOARDS
const getBoards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getSinglePin = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// GET SINGLE BOARD
const getSingleBoard = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards/${id}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// GET SINGLE BOARD'S PINS
const getSingleBoardPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/board_pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      const mappedPins = Object.values(response.data).map((boardPin) => getSinglePin(boardPin.pinId));
      Promise.all(mappedPins).then((pinObjects) => {
        console.warn(response.data);
        resolve(pinObjects);
      });
    })
    .catch((error) => reject(error));
});

// ADD BOARD
const addBoard = (board, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/boards.json`, board)
    .then((response) => {
      const body = { id: response.data.name };
      axios.patch(`${dbUrl}/boards/${response.data.name}.json`, body)
        .then(() => {
          getBoards(uid).then((boardArray) => resolve(boardArray));
        });
    })
    .catch((error) => reject(error));
});
const mergeBoardPinsData = (id) => new Promise((resolve, reject) => {
  const getSingleBoardInfo = getSingleBoard(id);
  const getPins = getSingleBoardPins(id);
  Promise.all([getSingleBoardInfo, getPins]).then((response) => {
    const [boardObject, pins] = response;
    resolve([boardObject, pins]);
  }).catch((error) => reject(error));
});
const getSinglePinBoardRelationship = (pinId, boardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/board_pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      resolve(Object.values(response.data).filter((object) => object.pinId === pinId));
    }).catch((error) => reject(error));
});

// UPDATE BOARD
const updateBoard = (boards, uid) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/boards/${boards.id}.json`, boards)
    .then(() => getBoards(uid).then(resolve))
    .catch((error) => reject(error));
});

const deletePin = (pinId, boardId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/pins/${pinId}.json`)
    .then(() => mergeBoardPinsData(boardId).then((response) => resolve(response)))
    .catch((error) => reject(error));
});

const deleteBoardRelationships = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/board_pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      const deleteArray = Object.values(response.data).map((object) => object.id);
      Promise.all(deleteArray.map((element) => deletePinBoardRelationship(element)));
    })
    .catch((error) => reject(error));
});
const deleteBoard = (boardId, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/boards/${boardId}.json`)
    .then(() => getBoards(uid).then((response) => resolve(response)).then(() => deleteBoardRelationships(boardId)))
    .catch((error) => reject(error));
});

const updatePin = (pins, uid) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/pins/${pins.id}.json`, pins)
    .then(() => getSingleBoardPins(uid).then(resolve))
    .catch((error) => reject(error));
});

export {
  getBoards, getSingleBoard, addBoard, getSingleBoardPins,
  updateBoard, deleteBoardRelationships, deleteBoard, mergeBoardPinsData,
  getSinglePinBoardRelationship, deletePin, updatePin, getSinglePin
};
