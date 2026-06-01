import { useState } from 'react';
import './chatbot.css';

const MENU_CARDS = [
  { icon: '👕', label: 'Produtos', msg: 'Quero ver os produtos disponíveis' },
  { icon: '📦', label: 'Pedidos', msg: 'Quero consultar meu pedido' },
  { icon: '🚚', label: 'Frete', msg: 'Quero saber sobre frete e entrega' },
  { icon: '🎟️', label: 'Cupons', msg: 'cupons' },
  { icon: '🔄', label: 'Trocas', msg: 'Quero fazer uma troca ou devolução' },
  { icon: '💬', label: 'Atendimento', msg: 'atendimento' },
  { icon: '⭐', label: 'Lançamentos', msg: 'Quero ver os lançamentos' },
  { icon: '🏷️', label: 'Sobre a Marca', msg: 'sobre_marca' },
];

export default function Chatbot() {

  const [aberto, setAberto] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const [mensagens, setMensagens] = useState([]);

  // FUNÇÃO DE VOZ
  function falarTexto(texto) {
    window.speechSynthesis.cancel();

    const voz = new SpeechSynthesisUtterance(texto);

    voz.lang = 'pt-BR';
    voz.rate = 1;
    voz.pitch = 1;
    voz.volume = 1;

    window.speechSynthesis.speak(voz);
  }

  async function enviarMensagem(texto) {

    const msg = texto ?? mensagem;

    if (
  msg === 'sobre_marca' ||
  msg.toLowerCase().includes('sobre a marca') ||
  msg.toLowerCase().includes('sobre marca') ||
  msg.toLowerCase().includes('marca')
) {

  const textoMarca = `
🏷️ SOBRE A UNDERGROUND FASHIONS

A Underground Fashions nasceu com o propósito de oferecer estilo, autenticidade e atitude para quem busca se destacar.

Nossa missão é entregar produtos de qualidade, acompanhando as principais tendências da moda urbana sem abrir mão da identidade de cada cliente.

✨ Qualidade em cada detalhe
🚚 Entrega para todo o Brasil
🔒 Compra segura
💎 Produtos exclusivos

Mais do que uma loja, somos uma comunidade apaixonada por moda, expressão e personalidade.

Obrigado por fazer parte da Underground Fashions!
`;

  setMensagens(prev => [
    ...prev,
    {
      autor: 'Bot',
      texto: textoMarca
    }
  ]);

  falarTexto(
    'A Underground Fashions nasceu com o propósito de oferecer estilo, autenticidade e atitude.'
  );

  return;
}

    if (msg === 'cupons') {

  const cupomTexto = `


🎟️ CUPONS EXCLUSIVOS



🏆 UNDER10
10% de desconto em qualquer compra


💎 UNDER15
15% OFF acima de R$199


🚚 FRETEGRATIS
Frete grátis acima de R$299


⚡ Aproveite antes que expirem!
`;

  setMensagens(prev => [
    ...prev,
    {
      autor: 'Bot',
      texto: cupomTexto
    }
  ]);

  falarTexto('Temos três cupons disponíveis para você.');

  return;
}

    if (msg === 'atendimento') {

    setMensagens(prev => [
        ...prev,
        {
            autor: 'Bot',
            texto: 'Escaneie o QR Code abaixo para entrar no nosso grupo de atendimento.'
        },
        {
            autor: 'QR',
            imagem: '/whatsapp-qr.png'
        }
    ]);

    falarTexto(
        'Escaneie o QR Code abaixo para entrar no nosso grupo de atendimento.'
    );

    return;
}

    if (!msg) return;

    setMensagens(prev => [
      ...prev,
      { autor: 'Você', texto: msg }
    ]);

    setMensagem('');

    try {

      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          mensagem: msg
        })
      });

      if (!response.ok) {
        throw new Error('Erro ao conectar com o servidor');
      }

      const data = await response.json();

      setMensagens(prev => [
        ...prev,
        { autor: 'Bot', texto: data.resposta }
      ]);

      // FAZ O BOT FALAR
      falarTexto(data.resposta);

    } catch (error) {

      console.error(error);

      const erroMsg = 'Erro ao conectar com o servidor.';

      setMensagens(prev => [
        ...prev,
        {
          autor: 'Bot',
          texto: erroMsg
        }
      ]);

      falarTexto(erroMsg);
    }
  }

  function iniciarMicrofone() {
  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert('Seu navegador não suporta microfone');
    return;
  }

  const recognition = new SpeechRecognition();

  recognition.lang = 'pt-BR';
  recognition.start();

  recognition.onresult = (event) => {

    const texto = event.results[0][0].transcript;

    // mostra no campo
    setMensagem(texto);

    // envia automaticamente
    enviarMensagem(texto);
  };
}

  return (
    <>
      <div
        className="chat-toggle"
        onClick={() => setAberto(!aberto)}
      >
        <img
          className="chat-logo"
          src="/logo.png"
          alt="Underground Fashions"
        />
      </div>

      {aberto && (
        <div className="chat-popup">

          <div className="chat-header">
            Underground Assistente!
            <button onClick={() => setAberto(false)}>
              ✖
            </button>
          </div>

          <div className="chat-box">

            <div className="menu-grid">
              {MENU_CARDS.map(card => (
                <div
                  key={card.label}
                  className="menu-card"
                  onClick={() => enviarMensagem(card.msg)}
                >
                  {card.icon}
                  <span>{card.label}</span>
                </div>
              ))}
            </div>

            {mensagens.map((msg, index) => (

  msg.imagem ? (

    <div key={index} className="bot-message">
      <img
        src={msg.imagem}
        alt="QR Code WhatsApp"
        style={{
          width: '220px',
          borderRadius: '12px',
          display: 'block',
          margin: '0 auto'
        }}
      />
    </div>

  ) : (

    <div
      key={index}
      className={
        msg.autor === 'Você'
          ? 'user-message'
          : 'bot-message'
      }
    >
      {msg.texto}
    </div>

  )
))}

          </div>

          <div className="input-area">
            <input
              type="text"
              placeholder="Digite..."
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              onKeyDown={(e) =>
                e.key === 'Enter' && enviarMensagem()
              }
            />

            <button
              id="btnEnviar"
              onClick={() => enviarMensagem()}
            >
              ➤
            </button>

            <button
              id="btnMic"
              onClick={iniciarMicrofone}
            >
              🎤
            </button>

          </div>

        </div>
      )}
    </>
  );
}