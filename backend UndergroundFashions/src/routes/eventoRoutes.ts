import { Router } from 'express';
import { EventoController } from '../controllers/EventoController';

const router = Router();
const controller = new EventoController();

router.get('/', controller.listar);

export default router;