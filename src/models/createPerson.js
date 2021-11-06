import { database } from '../database/startFirebase.js';
import { v4 as uuidv4 } from 'uuid';


export default (person) => {
  const personObject = person;
  personObject.id = uuidv4();
  database.collection('users').doc(personObject.id).set(person);
}