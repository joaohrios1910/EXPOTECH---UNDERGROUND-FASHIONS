/* ===== ENVIAR MENSAGEM ===== */

async function enviarMensagem() {

    const input = document.getElementById('mensagem');
    const mensagem = input.value.trim();
    const chatBox = document.getElementById('chat-box');

    if (mensagem === '') {
        return;
    }

    chatBox.innerHTML += `
        <div class="user-message">
            ${mensagem}
        </div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;

    try {

        const resposta = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mensagem: mensagem
            })
        });

        const dados = await resposta.json();

        chatBox.innerHTML += `
            <div class="bot-message">
                ${dados.resposta}
            </div>
        `;

        falarTexto(dados.resposta);

    } catch (erro) {

        chatBox.innerHTML += `
            <div class="bot-message">
                Erro ao conectar com o servidor.
            </div>
        `;

        console.error(erro);
    }

    input.value = '';

    chatBox.scrollTop = chatBox.scrollHeight;
}


/* ===== ABRIR E FECHAR CHAT ===== */

function abrirChat() {

    document
        .getElementById('chatPopup')
        .style.display = 'flex';
}

function fecharChat() {

    document
        .getElementById('chatPopup')
        .style.display = 'none';
}


/* ===== VOZ DO CHATBOT ===== */

function falarTexto(texto) {

    speechSynthesis.cancel();

    const voz = new SpeechSynthesisUtterance(texto);

    voz.lang = 'pt-BR';
    voz.rate = 0.9;
    voz.pitch = 0.8;
    voz.volume = 1;

    const vozes = speechSynthesis.getVoices();

    const vozBR = vozes.find(v =>
        v.lang.includes('pt-BR')
    );

    if (vozBR) {
        voz.voice = vozBR;
    }

    speechSynthesis.speak(voz);
}


/* ===== MICROFONE ===== */

function iniciarMicrofone() {

    if (
        !('webkitSpeechRecognition' in window) &&
        !('SpeechRecognition' in window)
    ) {

        alert('Seu navegador não suporta reconhecimento de voz.');
        return;
    }

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();

    recognition.lang = 'pt-BR';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.start();

    recognition.onresult = function(event) {

    const texto =
        event.results[0][0].transcript;

    document
        .getElementById('mensagem')
        .value = texto;

    const textoLower = texto.toLowerCase();

    if (
        textoLower.includes('sobre a marca') ||
        textoLower.includes('marca') ||
        textoLower.includes('empresa')
    ) {
        selecionarOpcao('Sobre a Marca');
        return;
    }

    if (
        textoLower.includes('atendimento') ||
        textoLower.includes('falar com atendente')
    ) {
        selecionarOpcao('Atendimento');
        return;
    }

    enviarMensagem();
};

    recognition.onerror = function(event) {

        console.log(
            'Erro no reconhecimento:',
            event.error
        );
    };
}


/* ===== CARDS DO MENU ===== */

function selecionarOpcao(opcao){

    const chatBox = document.getElementById('chat-box');

    /* ===== SOBRE A MARCA ===== */

    if(opcao === 'Sobre a Marca'){

        chatBox.innerHTML += `
            <div class="bot-message">
                <strong>🏴 Sobre a Underground Fashions</strong>

                <p style="margin-top:10px;">
                    A Underground Fashions nasceu da paixão pela moda streetwear e pela cultura urbana.
                </p>

                <p style="margin-top:10px;">
                    Trabalhamos com coleções para homens, mulheres e crianças.
                </p>

                <p style="margin-top:10px;">
                    A marca é liderada por João Henrique e conta com a participação
                    dos sócios Rafael Lima, Mateus Henrique e Anderson Ayalla.
                </p>

                <p style="margin-top:10px;">
                    🔥 Underground Fashions — Mais que uma marca, um estilo de vida.
                </p>
            </div>
        `;

        chatBox.scrollTop = chatBox.scrollHeight;

        falarTexto(
            'A Underground Fashions é uma marca de roupas para homens, mulheres e crianças.'
        );

        return;
    }

    /* ===== ATENDIMENTO ===== */

    if(opcao === 'Atendimento'){

        chatBox.innerHTML += `
            <div class="bot-message">

                <strong>📞 Atendimento Underground Fashions</strong>

                <p style="margin-top:10px;">
                    Entre no nosso grupo de atendimento escaneando o QR Code abaixo:
                </p>

                <img
                    src="/qrcode_whatsapp.png"
                    alt="QR Code WhatsApp"
                    style="
                        width:220px;
                        max-width:100%;
                        display:block;
                        margin:15px auto;
                        border-radius:10px;
                        background:white;
                        padding:5px;
                    "
                >

                <p>
                    Após entrar no grupo, nossa equipe irá atendê-lo.
                </p>

            </div>
        `;

        chatBox.scrollTop = chatBox.scrollHeight;

        falarTexto(
            'Entre no nosso grupo de atendimento utilizando o QR Code exibido na tela.'
        );

        return;
    }

    /* ===== LANÇAMENTOS ===== */

    if(opcao === 'Lançamentos'){

        chatBox.innerHTML += `
            <div class="bot-message">

                <strong>🔥 Lançamentos Underground Fashions</strong>

                <p>🖤 Camiseta Oversized Street Collection</p>
                <p>🤎 Jaqueta Jeans Urban Style</p>
                <p>👕 Camiseta Essential Underground</p>
                <p>🧥 Moletom Premium Underground</p>
                <p>🧢 Boné Exclusive Edition</p>

            </div>
        `;

        chatBox.scrollTop = chatBox.scrollHeight;

        falarTexto(
            'Confira os lançamentos mais recentes da Underground Fashions.'
        );

        return;
    }

    /* ===== DEMAIS OPÇÕES ===== */

    const input = document.getElementById('mensagem');

    input.value = opcao;

    enviarMensagem();
}



/* ===== ENTER PARA ENVIAR ===== */

document.addEventListener('DOMContentLoaded', () => {

    const input =
        document.getElementById('mensagem');

    input.addEventListener('keypress', (e) => {

        if (e.key === 'Enter') {

            enviarMensagem();
        }
    });

    speechSynthesis.getVoices();
});