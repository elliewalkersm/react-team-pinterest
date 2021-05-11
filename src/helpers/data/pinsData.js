import axios from 'axios';
import firebaseConfig from '../apiKeys';
import getBoardPins from './board_pinsData';

const dbUrl = firebaseConfig.databaseURL;
const getPins = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
const getSinglePin = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});
const mergePinsData = () => new Promise((resolve, reject) => {
  Promise.all([getPins(), getBoardPins()])
    .then(([groups, userGroupsJoin]) => {
      // COMPLETE THIS FUNCTION
      console.warn(userGroupsJoin);
      resolve(groups);
    }).catch((error) => reject(error));
});

export { getPins, getSinglePin, mergePinsData };
