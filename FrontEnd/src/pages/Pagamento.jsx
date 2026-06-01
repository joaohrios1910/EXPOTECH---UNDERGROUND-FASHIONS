import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Pagamento() {
  const navigate = useNavigate();
  const [itens, setItens] = useState([]);
  const [forma, setForma] = useState('pix');
  const [form, setForm] = useState({
    nome: '',
    email: '',
    cpf: '',
    cep: '',
    endereco: '',
    numero: '',
    cartaoNome: '',
    cartaoNumero: '',
    cartaoValidade: '',
    cartaoCVV: '',
  });

  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    setItens(carrinho);
  }, []);

  const total = itens.reduce((acc, i) => acc + parseFloat(i.preco) * i.quantidade, 0);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function finalizar() {
    if (!form.nome || !form.email || !form.cpf || !form.endereco) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }
    localStorage.removeItem('carrinho');
    navigate('/pedido-confirmado');
  }

  return (
    <div className="bg-white text-black min-h-screen">
      <Header />

      <main className="max-w-5xl mx-auto p-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">


        <div className="lg:col-span-2 flex flex-col gap-6">
          <h1 className="text-3xl font-black uppercase italic">Finalizar Compra</h1>

          {/* Dados pessoais */}
          <div className="border-2 border-black rounded-lg p-6">
            <h2 className="font-black uppercase text-sm mb-4">Dados Pessoais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase">Nome completo *</label>
                <input name="nome" value={form.nome} onChange={handleChange}
                  className="w-full border-2 border-zinc-300 rounded px-3 py-2 mt-1 text-sm focus:border-black outline-none" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase">Email *</label>
                <input name="email" value={form.email} onChange={handleChange}
                  className="w-full border-2 border-zinc-300 rounded px-3 py-2 mt-1 text-sm focus:border-black outline-none" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase">CPF *</label>
                <input name="cpf" value={form.cpf} onChange={handleChange} placeholder="000.000.000-00"
                  className="w-full border-2 border-zinc-300 rounded px-3 py-2 mt-1 text-sm focus:border-black outline-none" />
              </div>
            </div>
          </div>

          {/* Endereço */}
          <div className="border-2 border-black rounded-lg p-6">
            <h2 className="font-black uppercase text-sm mb-4">Endereço de Entrega</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase">CEP</label>
                <input name="cep" value={form.cep} onChange={handleChange} placeholder="00000-000"
                  className="w-full border-2 border-zinc-300 rounded px-3 py-2 mt-1 text-sm focus:border-black outline-none" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase">Número</label>
                <input name="numero" value={form.numero} onChange={handleChange}
                  className="w-full border-2 border-zinc-300 rounded px-3 py-2 mt-1 text-sm focus:border-black outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-bold uppercase">Endereço *</label>
                <input name="endereco" value={form.endereco} onChange={handleChange} placeholder="Rua, bairro, cidade"
                  className="w-full border-2 border-zinc-300 rounded px-3 py-2 mt-1 text-sm focus:border-black outline-none" />
              </div>
            </div>
          </div>


          <div className="border-2 border-black rounded-lg p-6">
            <h2 className="font-black uppercase text-sm mb-4">Forma de Pagamento</h2>

            <div className="flex gap-3 mb-6">
              {['pix', 'cartao', 'boleto'].map(f => (
                <button
                  key={f}
                  onClick={() => setForma(f)}
                  className={`px-4 py-2 font-black text-xs uppercase border-2 rounded transition-all ${
                    forma === f ? 'bg-black text-white border-black' : 'bg-white text-black border-zinc-300 hover:border-black'
                  }`}
                >
                  {f === 'pix' ? 'PIX' : f === 'cartao' ? 'Cartão' : 'Boleto'}
                </button>
              ))}
            </div>

            {forma === 'pix' && (
              <div className="bg-zinc-50 border-2 border-dashed border-zinc-300 rounded p-4 text-center">
                <p className="font-black text-lg">R$ {total.toFixed(2).replace('.', ',')}</p>
                <p className="text-xs text-zinc-500 mt-1">Chave PIX: <span className="font-bold">underground@fashions.com</span></p>
                <p className="text-xs text-zinc-400 mt-2">O QR Code será gerado após confirmar o pedido.</p>
              </div>
            )}

            {forma === 'boleto' && (
              <div className="bg-zinc-50 border-2 border-dashed border-zinc-300 rounded p-4 text-center">
                <p className="text-xs text-zinc-500">O boleto será enviado para seu email após confirmar.</p>
                <p className="text-xs text-zinc-400 mt-1">Vencimento em 3 dias úteis.</p>
              </div>
            )}

            {forma === 'cartao' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="text-xs font-bold uppercase">Nome no cartão</label>
                  <input name="cartaoNome" value={form.cartaoNome} onChange={handleChange}
                    className="w-full border-2 border-zinc-300 rounded px-3 py-2 mt-1 text-sm focus:border-black outline-none" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs font-bold uppercase">Número do cartão</label>
                  <input name="cartaoNumero" value={form.cartaoNumero} onChange={handleChange} placeholder="0000 0000 0000 0000"
                    className="w-full border-2 border-zinc-300 rounded px-3 py-2 mt-1 text-sm focus:border-black outline-none" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase">Validade</label>
                  <input name="cartaoValidade" value={form.cartaoValidade} onChange={handleChange} placeholder="MM/AA"
                    className="w-full border-2 border-zinc-300 rounded px-3 py-2 mt-1 text-sm focus:border-black outline-none" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase">CVV</label>
                  <input name="cartaoCVV" value={form.cartaoCVV} onChange={handleChange} placeholder="000"
                    className="w-full border-2 border-zinc-300 rounded px-3 py-2 mt-1 text-sm focus:border-black outline-none" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="border-2 border-black rounded-lg p-6 sticky top-6">
            <h2 className="font-black uppercase text-sm mb-4">Resumo do Pedido</h2>

            <div className="flex flex-col gap-3 mb-4">
              {itens.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <div>
                    <p className="font-bold leading-tight">{item.nome}</p>
                    {item.tamanho && <p className="text-xs text-zinc-400">Tam: {item.tamanho}</p>}
                    <p className="text-xs text-zinc-400">Qtd: {item.quantidade}</p>
                  </div>
                  <p className="font-black">R$ {(parseFloat(item.preco) * item.quantidade).toFixed(2).replace('.', ',')}</p>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-black pt-4">
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm uppercase">Total</span>
                <span className="font-black text-xl">R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>
              {forma === 'pix' && (
                <p className="text-xs text-emerald-600 font-bold mt-1">5% de desconto no PIX!</p>
              )}
            </div>

            <button
              onClick={finalizar}
              className="w-full mt-6 bg-black text-white font-black uppercase py-4 rounded border-2 border-black hover:bg-zinc-800 active:scale-95 transition-all text-sm tracking-wider"
            >
              Confirmar Pedido
            </button>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default Pagamento;