import { Router } from 'express';
import { ChatbotController } from '../controllers/ChatbotController';

const router = Router();

const chatbotController = new ChatbotController();

router.post('/chat', chatbotController.chat);

export default router;