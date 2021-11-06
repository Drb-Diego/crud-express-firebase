import createPerson from "../models/createPerson.js";
import getPersons from "../models/getPersons.js";
import deletePerson from "../models/deletePerson.js";
import editPerson from "../models/editPerson.js";


export default {
  get: async (request, response) => {
    const persons = await getPersons();
    response.status(200).json(persons);
  },

  post: (request, response) => {
    createPerson(request.body);
    response.status(200).send("pessoa adicionanda");
  },

  put: async (request, response) => {
    const { id, campEdit, newValue } = request.body;

    const responseQuery = await editPerson(id, campEdit, newValue);

    response.status(200).send(responseQuery);
  },

  delete: async (request, response) => {  
    const { id } = request.body;

    const responseQuery = await deletePerson(id);

    response.status(200).send(responseQuery);
  },
};
