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
export { deletePinBoardRelationship, getBoardPins };
