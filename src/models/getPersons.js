import { database } from "../database/startFirebase.js";

export default async () => {
  const collection = database.collection("users");

  const respondeDatabase = await collection.get();

  const persons = [];

  respondeDatabase.forEach(user => {
    persons.push(user.data());
  });

  return persons;
};
