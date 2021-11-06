import createPerson from "../models/createPerson.js";
import getPersons from "../models/getPersons.js";

export default {
  get: async (request, response) => {
    const persons = await getPersons();
    response.status(200).json(persons);
  },

  post: (request, response) => {
    createPerson(request.body);
    response.status(200).send("pessoa adicionanda");
  },

  put: (request, response) => response.send("Olá mundo ! [PUT]"),

  delete: (request, response) => response.send("Olá mundo ! [DELETE]"),
};
