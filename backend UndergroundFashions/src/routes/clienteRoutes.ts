import { Router } from 'express';
import { ClienteController } from '../controllers/ClienteController';

const routes = Router();

const controller = new ClienteController();

routes.post('/login', controller.login);

routes.get('/', controller.listar);

routes.post('/', controller.criar);

routes.put('/:id', controller.atualizar);

routes.delete('/:id', controller.excluir);  

export default routes;