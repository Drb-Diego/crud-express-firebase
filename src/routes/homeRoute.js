import {Router} from 'express'

const routes = Router();

routes.get('/', (request, response) => response.send("Olá mundo ! [GET]"));

routes.post('/', (request, response) => response.send("Olá mundo ! [POST]"));

routes.put('/', (request, response) => response.send("Olá mundo ! [PUT]"));

routes.delete('/', (request, response) => response.send("Olá mundo ! [DELETE]"));


export default routes;