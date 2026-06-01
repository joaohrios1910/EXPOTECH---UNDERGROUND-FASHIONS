import { prisma } from '../database/prisma';

export class ProdutoService {

    async listar() {
        return await prisma.produto.findMany();
    }

    async criar(data: any) {
        return await prisma.produto.create({
            data
        });
    }

    async atualizar(id: number, data: any) {
        return await prisma.produto.update({
            where: { id },
            data
        });
    }

    async excluir(id: number) {
        return await prisma.produto.delete({
            where: { id }
        });
    }

}