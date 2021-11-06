import { database } from "../database/startFirebase.js";
import getPersons from "./getPersons.js";

export default async (id, campEdit, newValue) => {

  const persons = await getPersons();

  let [ filteredPerson ] = persons.filter(person => person.id === id);

  filteredPerson[campEdit] = newValue;

  const response = await database.collection("users").doc(id).set(filteredPerson);

  return response !== undefined ? "Campo editado" : "Erro na query";
}