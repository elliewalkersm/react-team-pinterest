import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';

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

export { getBoards, getSingleBoard, addBoard };
