import { database } from '../database/startFirebase.js';

export default (person) => {
  console.log(person);
  database.collection('user').add(person);
}