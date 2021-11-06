import createPerson from "../models/createPerson.js";
import getPersons from "../models/getPersons.js";

export default {
  get: async (request, response) =>{
    const persons = await getPersons();
    response.json(persons);
  },

  post: (request, response) => {

    createPerson(request.body);
    response.send('pessoa adicionada');
  },

  put: (request, response) => response.send("Olá mundo ! [PUT]"),

  delete: (request, response) => response.send("Olá mundo ! [DELETE]"),
}