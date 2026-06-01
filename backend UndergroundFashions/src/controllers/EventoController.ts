import { Request, Response } from 'express';

export class EventoController {
  async listar(req: Request, res: Response) {
    res.json({ mensagem: 'Listar eventos' });
  }
}