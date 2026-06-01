import { Router } from 'express';
import { prisma } from '../database/prisma';

const routes = Router();

routes.post('/', async (req, res) => {

    const { email, senha } = req.body;

    const cliente = await prisma.cliente.findFirst({
        where: {
            email,
            senha
        }
    });

    if (!cliente) {
        return res.status(401).json({
            erro: 'Email ou senha inválidos'
        });
    }

    return res.json({
        sucesso: true
    });

});

export default routes;