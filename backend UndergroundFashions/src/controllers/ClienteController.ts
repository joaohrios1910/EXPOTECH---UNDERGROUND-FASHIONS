import { Request, Response } from 'express';
import { ClienteService } from '../services/ClienteService';

const service = new ClienteService();

export class ClienteController {

    async listar(req: Request, res: Response) {

        const clientes = await service.listar();

        return res.json(clientes);
    }

    async criar(req: Request, res: Response) {

        const cliente = await service.criar(req.body);

        return res.json(cliente);
    }

    async login(req: Request, res: Response) {

        const { email, senha } = req.body;

        const cliente = await service.buscarPorEmail(email);

        if (!cliente || cliente.senha !== senha) {
            return res.status(401).json({
                erro: 'Email ou senha incorretos'
            });
        }

        return res.json({
            id: cliente.id,
            nomeCompleto: cliente.nomeCompleto,
            email: cliente.email
        });
    }

    async atualizar(req: Request, res: Response) {

        try {

            const id = Number(req.params.id);

            const cliente = await service.atualizar(
                id,
                req.body
            );

            return res.json(cliente);

        } catch {

            return res.status(404).json({
                erro: 'Cliente não encontrado'
            });

        }

    }

    async excluir(req: Request, res: Response) {

        try {

            const id = Number(req.params.id);

            await service.excluir(id);

            return res.json({
                mensagem: 'Cliente excluído com sucesso'
            });

        } catch {

            return res.status(404).json({
                erro: 'Cliente não encontrado'
            });

        }

    }

}