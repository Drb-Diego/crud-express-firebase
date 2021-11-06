import { database } from "../database/startFirebase.js";

export default async id => {
  const response = await database.collection("users").doc(id).delete();

  return response !== undefined ? "Pessoa excluida" : "Erro na query";
};
