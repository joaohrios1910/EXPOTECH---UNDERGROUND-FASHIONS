import { Request, Response } from 'express';
import { ProdutoService } from '../services/ProdutoService';

const service = new ProdutoService();

export class ProdutoController {

    async listar(req: Request, res: Response) {

        const produtos = await service.listar();

        return res.json(produtos);
    }

    async criar(req: Request, res: Response) {

        const produto = await service.criar(req.body);

        return res.json(produto);
    }

    async atualizar(req: Request, res: Response) {

        const id = Number(req.params.id);

        const produto = await service.atualizar(
            id,
            req.body
        );

        return res.json(produto);
    }

    async excluir(req: Request, res: Response) {

        const id = Number(req.params.id);

        await service.excluir(id);

        return res.json({
            mensagem: 'Produto excluído com sucesso'
        });
    }

}