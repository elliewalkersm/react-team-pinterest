import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getBoardPins = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/board_pins.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const deletePinBoardRelationship = (id) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/board_pins/${id}.json`)
    .then(resolve)
    .catch((error) => reject(error));
});

const createBoardPin = (boardId, pinId) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/board_pins.json`, { boardId, pinId })
    .then((response) => {
      const body = { id: response.data.name };
      axios.patch(`${dbUrl}/board_pins/${response.data.name}.json`, body)
        .then((resp) => resolve(resp));
    })
    .catch((error) => reject(error));
});
export { deletePinBoardRelationship, getBoardPins, createBoardPin };
