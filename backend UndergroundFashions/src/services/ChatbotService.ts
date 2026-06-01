export class ChatbotService {

    responder(mensagem: string): string {

        const msg = mensagem.toLowerCase().trim();

        /* ===== CONSULTA CEP ===== */

        const cep = msg.replace(/\D/g, '');

        if (cep.length === 8) {

            return `
📍 CEP encontrado!

CEP informado: ${cep}

📦 Frete estimado: R$ 19,90

🚚 Prazo de entrega: 3 a 7 dias úteis.


            `;
        }

        /* ===== MENU ===== */

        if (
            msg.includes('1') ||
            msg.includes('produtos')
        ) {
            return '👕 Produtos disponíveis: Camisetas, Moletons, Jaquetas, Calças Cargo, Toucas e Bonés.';
        }

        if (
            msg.includes('2') ||
            msg.includes('pedido')
        ) {
            return '📦 Digite o número do seu pedido para consultar.';
        }

        if (
            msg.includes('3') ||
            msg.includes('frete')
        ) {
            return '🚚 Informe seu CEP para calcular o frete.';
        }

        if (
            msg.includes('4') ||
            msg.includes('pagamento')
        ) {
            return '💳 Aceitamos PIX, Cartão de Crédito e Boleto.';
        }

        if (
            msg.includes('5') ||
            msg.includes('cupom')
        ) {
            return '🎟️ Cupons ativos: UNDER10, UNDER20 e UNDER30.';
        }

        if (
            msg.includes('6') ||
            msg.includes('tamanho')
        ) {
            return '📏 Tamanhos disponíveis: P, M, G, GG e XGG.';
        }

        if (
            msg.includes('7') ||
            msg.includes('troca')
        ) {
            return '🔄 Trocas e devoluções podem ser feitas em até 7 dias.';
        }

        if (
            msg.includes('8') ||
            msg.includes('promo')
        ) {
            return '🔥 Promoções ativas em camisetas e moletons.';
        }

        if (
            msg.includes('9') ||
            msg.includes('atendente')
        ) {
            return '💬 Atendimento disponível pelo menu Atendimento.';
        }

        if (
           msg.includes('lançamentos') ||
           msg.includes('lancamentos')
       ) {
        return '🔥 Confira nossos lançamentos pelo menu Lançamentos.';
       }
 
        if (
            msg.includes('oi') ||
            msg.includes('olá')
        ) {
            return '👋 Bem-vindo à Underground Fashions.';
        }

        return '❌ Desculpe, não entendi sua mensagem.';
    }
}