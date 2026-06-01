import { prisma } from '../database/prisma';

export class CarrinhoService {

    async listar(clienteId: number) {
        return await prisma.carrinhoItem.findMany({
            where: { clienteId }
        });
    }

    async adicionar(data: {
        clienteId: number;
        produtoId: number;
        nome: string;
        preco: number;
        imagem?: string;
        tamanho?: string;
        quantidade?: number;
    }) {
        
        const existente = await prisma.carrinhoItem.findFirst({
            where: {
                clienteId: data.clienteId,
                produtoId: data.produtoId,
                tamanho: data.tamanho ?? null
            }
        });

        if (existente) {
            return await prisma.carrinhoItem.update({
                where: { id: existente.id },
                data: { quantidade: existente.quantidade + (data.quantidade ?? 1) }
            });
        }

        return await prisma.carrinhoItem.create({ data });
    }

    async remover(id: number) {
        return await prisma.carrinhoItem.delete({
            where: { id }
        });
    }

    async limpar(clienteId: number) {
        return await prisma.carrinhoItem.deleteMany({
            where: { clienteId }
        });
    }
}