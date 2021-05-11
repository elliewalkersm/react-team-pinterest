import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getSinglePin } from './pinsData';

const dbUrl = firebaseConfig.databaseURL;
// GET BOARDS
const getBoards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// GET SINGLE BOARD
const getSingleBoard = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards/${id}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});
const getSingleBoardPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/board_pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      const mappedPins = Object.values(response.data).map((boardPin) => getSinglePin(boardPin.pinId));
      Promise.all(mappedPins).then((x) => resolve(x));
    })
    .catch((error) => reject(error));
});
export { getBoards, getSingleBoard, getSingleBoardPins };
