import { prisma } from '../database/prisma';

export class ClienteService {

    async listar() {
        return await prisma.cliente.findMany();
    }

    async criar(data: any) {
        return await prisma.cliente.create({
            data
        });
    }

    async atualizar(id: number, data: any) {
        return await prisma.cliente.update({
            where: { id },
            data
        });
    }

    async excluir(id: number) {
        return await prisma.cliente.delete({
            where: { id }
        });
    }
async buscarPorEmail(email: string) {
    return await prisma.cliente.findUnique({
        where: { email }
    });
}
}
