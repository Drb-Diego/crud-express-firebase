import createPerson from "../models/createPerson.js"

export default {
  get: (request, response) => response.send("Olá mundo ! [GET]"),

  post: (request, response) => {

    createPerson(request.body);
    response.send('pessoa adicionada');
  },

  put: (request, response) => response.send("Olá mundo ! [PUT]"),

  delete: (request, response) => response.send("Olá mundo ! [DELETE]"),
}