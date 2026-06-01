import { Request, Response } from 'express';
import axios from 'axios';
import { ChatbotService } from '../services/ChatbotService';

const chatbotService = new ChatbotService();

export class ChatbotController {

    async chat(req: Request, res: Response) {

        const { mensagem } = req.body;

        const cep = mensagem.replace(/\D/g, '');

        if (cep.length === 8) {

            try {

                const respostaViaCep = await axios.get(
                    `https://viacep.com.br/ws/${cep}/json/`
                );

                const endereco = respostaViaCep.data;

                if (endereco.erro) {

                    return res.json({
                        resposta: '❌ CEP não encontrado.'
                    });
                }

                return res.json({
                    resposta: `
📍 Endereço localizado

CEP: ${endereco.cep}
Rua: ${endereco.logradouro}
Bairro: ${endereco.bairro}
Cidade: ${endereco.localidade}
Estado: ${endereco.uf}
País: Brasil

📦 Frete estimado: R$ 19,90
🚚 Prazo de entrega: 3 a 7 dias úteis
                    `
                });

            } catch {

                return res.json({
                    resposta: '❌ Erro ao consultar o CEP.'
                });
            }
        }

        const resposta = chatbotService.responder(mensagem);

        return res.json({
            resposta
        });
    }
}