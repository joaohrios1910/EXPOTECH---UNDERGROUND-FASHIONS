import { Request, Response } from 'express';
import { CarrinhoService } from '../services/CarrinhoService';

const service = new CarrinhoService();

export class CarrinhoController {

    async listar(req: Request, res: Response) {
        const clienteId = Number(req.params.clienteId);
        const itens = await service.listar(clienteId);
        return res.json(itens);
    }

    async adicionar(req: Request, res: Response) {
        try {
            const item = await service.adicionar(req.body);
            return res.json(item);
        } catch {
            return res.status(400).json({ erro: 'Erro ao adicionar item ao carrinho' });
        }
    }

    async remover(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            await service.remover(id);
            return res.json({ mensagem: 'Item removido do carrinho' });
        } catch {
            return res.status(404).json({ erro: 'Item não encontrado' });
        }
    }

    async limpar(req: Request, res: Response) {
        try {
            const clienteId = Number(req.params.clienteId);
            await service.limpar(clienteId);
            return res.json({ mensagem: 'Carrinho limpo com sucesso' });
        } catch {
            return res.status(400).json({ erro: 'Erro ao limpar carrinho' });
        }
    }
}