import { Router } from 'express'
import homeController from '../controllers/homeController.js';

const routes = Router();

routes.get('/', homeController.get);
routes.post('/', homeController.post);
routes.put('/', homeController.put);
routes.delete('/', homeController.delete);


export default routes;