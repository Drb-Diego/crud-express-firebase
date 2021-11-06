import { database } from "../database/startFirebase.js";
import { v4 as uuidv4 } from "uuid";

export default async person => {
  const personObject = person;
  personObject.id = uuidv4();

  const response = await database.collection("users").doc(personObject.id).set(personObject);

  return response !== undefined ? "Pessoa cadastrada" : "Erro na query";
};
