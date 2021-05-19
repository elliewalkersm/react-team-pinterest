import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getBoardPins } from './board_pinsData';

const dbUrl = firebaseConfig.databaseURL;

const getPins = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json`)
    .then((response) => resolve(Object.values(response.data)))
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

// ADD PIN
const addPin = (pinObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/pins.json`, pinObject)
    .then((response) => {
      const body = { id: response.data.name };
      axios.patch(`${dbUrl}/pins/${response.data.name}.json`, body)
        .then((resp) => resolve(resp.data.id));
    })
    .catch((error) => reject(error));
});

const getPinRelationships = (pinId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/board_pins.json?orderBy="pinId"&equalTo="${pinId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
const getPublicPins = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="public"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getPins,
  mergePinsData,
  addPin,
  getPinRelationships,
  getPublicPins,
};
