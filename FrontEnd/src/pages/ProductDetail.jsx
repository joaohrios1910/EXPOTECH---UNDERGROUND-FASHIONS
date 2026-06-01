import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const produto = products.find(p => p.id === Number(id));
  const [tamanho, setTamanho] = useState('');

  function adicionarAoCarrinho() {
    if (produto.tamanhos && produto.tamanhos.length > 0 && !tamanho) {
      alert('Selecione um tamanho!');
      return;
    }

    const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    
    const itemExistente = carrinho.find(
      i => i.id === produto.id && i.tamanho === tamanho
    );

    if (itemExistente) {
      itemExistente.quantidade += 1;
    } else {
      carrinho.push({
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        imagem: produto.imagem,
        tamanho: tamanho || null,
        quantidade: 1
      });
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    navigate('/carrinho');
  }

  if (!produto) {
    return (
      <div className="bg-white text-black min-h-screen flex items-center justify-center">
        <p className="text-xl font-bold">Produto não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="bg-white text-black min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto p-6 md:py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div className="border-2 border-black rounded bg-zinc-100 overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <img src={produto.imagem} alt={produto.nome} className="w-full h-auto object-cover" />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-zinc-500 font-semibold text-xs uppercase">{produto.categoria}</p>
            <h1 className="text-3xl font-black uppercase italic mt-1">{produto.nome}</h1>
          </div>

          <div className="border-b-2 border-zinc-200 pb-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-2xl font-black">R$ {produto.preco} no Pix</span>
              {produto.precoOriginal && (
                <span className="text-zinc-400 line-through text-sm">R$ {produto.precoOriginal}</span>
              )}
              {produto.desconto && (
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 border border-emerald-200 rounded">
                  {produto.desconto}
                </span>
              )}
            </div>
            {produto.parcelas && (
              <p className="text-zinc-600 text-xs mt-1 font-medium">ou {produto.parcelas}</p>
            )}
          </div>

          <div className="bg-zinc-50 border-2 border-dashed border-black p-4 rounded flex justify-between items-center">
            <div>
              <p className="text-xs font-bold">Ganhe + 20% de desconto usando o cupom:</p>
              <span className="text-sm font-black tracking-wide block mt-1">UNDERGROUND20</span>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText('UNDERGROUND20')}
              className="text-xs font-bold border-2 border-black bg-white px-3 py-1.5 rounded hover:bg-black hover:text-white transition-all"
            >
              Copiar
            </button>
          </div>

          {produto.tamanhos && produto.tamanhos.length > 0 && (
            <div>
              <h3 className="font-bold text-sm uppercase mb-3">Escolha o Tamanho:</h3>
              <div className="grid grid-cols-4 gap-2">
                {produto.tamanhos.map((item) => (
                  <button
                    key={item}
                    onClick={() => setTamanho(item)}
                    className={`py-3 text-sm font-bold border-2 rounded transition-all ${
                      tamanho === item
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-zinc-300 hover:border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={adicionarAoCarrinho}
            className="w-full bg-black text-white font-black uppercase py-4 rounded border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] text-sm tracking-wider mt-4 hover:bg-zinc-800 active:scale-95 transition-all"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProductDetail;