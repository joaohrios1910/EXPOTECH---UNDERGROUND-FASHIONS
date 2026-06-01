import { Router } from 'express';
import { CarrinhoController } from '../controllers/CarrinhoController';

const routes = Router();
const controller = new CarrinhoController();


routes.get('/:clienteId', (req, res) => controller.listar(req, res));


routes.post('/', (req, res) => controller.adicionar(req, res));


routes.delete('/:id', (req, res) => controller.remover(req, res));


routes.delete('/limpar/:clienteId', (req, res) => controller.limpar(req, res));

export default routes;