import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Carrinho() {
  const navigate = useNavigate();
  const [itens, setItens] = useState([]);

  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    setItens(carrinho);
  }, []);

  function removerItem(id, tamanho) {
    const novo = itens.filter(i => !(i.id === id && i.tamanho === tamanho));
    setItens(novo);
    localStorage.setItem('carrinho', JSON.stringify(novo));
  }

  function limpar() {
    setItens([]);
    localStorage.removeItem('carrinho');
  }

  const total = itens.reduce((acc, i) => acc + parseFloat(i.preco) * i.quantidade, 0);

  return (
    <div className="bg-white text-black min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto p-6 py-12">
        <h1 className="text-3xl font-black uppercase italic mb-8">Meu Carrinho</h1>

        {itens.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-zinc-300 rounded-lg">
            <p className="text-xl font-bold text-zinc-400">Seu carrinho está vazio.</p>
            <button
              onClick={() => navigate('/')}
              className="mt-6 bg-black text-white font-black uppercase px-8 py-3 rounded hover:bg-zinc-800 transition-all"
            >
              Continuar comprando
            </button>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              {itens.map((item, index) => (
                <div key={index} className="flex items-center gap-4 border-2 border-black rounded-lg p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {item.imagem && (
                    <img src={item.imagem} alt={item.nome} className="w-24 h-24 object-cover border-2 border-black rounded" />
                  )}
                  <div className="flex-1">
                    <h2 className="font-black uppercase italic text-lg leading-tight">{item.nome}</h2>
                    {item.tamanho && (
                      <p className="text-xs text-zinc-500 font-semibold mt-1">Tamanho: {item.tamanho}</p>
                    )}
                    <p className="text-sm font-bold mt-1">Qtd: {item.quantidade}</p>
                    <p className="text-lg font-black mt-1">
                      R$ {(parseFloat(item.preco) * item.quantidade).toFixed(2).replace('.', ',')}
                    </p>
                  </div>
                  <button
                    onClick={() => removerItem(item.id, item.tamanho)}
                    className="border-2 border-black px-4 py-2 font-black text-sm uppercase rounded hover:bg-black hover:text-white transition-all"
                  >
                    Remover
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t-2 border-black pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <p className="text-sm text-zinc-500 font-semibold uppercase">Total</p>
                <p className="text-3xl font-black">R$ {total.toFixed(2).replace('.', ',')}</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={limpar}
                  className="border-2 border-black px-6 py-3 font-black uppercase text-sm rounded hover:bg-zinc-100 transition-all"
                >
                  Limpar carrinho
                </button>
                <button
                  onClick={() => navigate('/pagamento')}
                  className="bg-black text-white px-8 py-3 font-black uppercase text-sm rounded hover:bg-zinc-800 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
                >
                  Finalizar compra
                </button>
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Carrinho;