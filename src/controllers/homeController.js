export default {
  get: (request, response) => response.send("Olá mundo ! [GET]"),

  post: (request, response) => response.send("Olá mundo ! [POST]"),

  put: (request, response) => response.send("Olá mundo ! [PUT]"),

  delete: (request, response) => response.send("Olá mundo ! [DELETE]"),
}