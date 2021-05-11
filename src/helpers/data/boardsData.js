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

export { getBoards, getSingleBoard };
