import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function PedidoConfirmado() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-black min-h-screen">
      <Header />
      <main className="max-w-2xl mx-auto p-6 py-24 text-center">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="text-4xl font-black uppercase italic mb-4">Pedido Confirmado!</h1>
        <p className="text-zinc-500 font-semibold mb-8">Obrigado pela sua compra. Em breve você receberá mais informações no seu email.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-black text-white font-black uppercase px-10 py-4 rounded border-2 border-black hover:bg-zinc-800 transition-all"
        >
          Continuar comprando
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default PedidoConfirmado;