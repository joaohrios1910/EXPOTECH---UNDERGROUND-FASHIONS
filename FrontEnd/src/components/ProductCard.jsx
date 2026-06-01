import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ produto }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white border-2 border-black rounded-md overflow-hidden hover:scale-[1.02] duration-300 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      
      {/* Container da Imagem */}
      <div className="w-full h-80 overflow-hidden bg-gray-100 border-b-2 border-black">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="w-full h-full object-cover hover:scale-105 duration-500"
        />
      </div>

      {/* Informações do produto */}
      <div className="p-5 flex flex-col grow justify-between bg-white">
        
        <div className="mb-4">
          <h2 className="font-black text-xl uppercase italic tracking-tighter text-black leading-tight">
            {produto.nome}
          </h2>
          <p className="text-gray-900 font-extrabold mt-3 text-lg tracking-tight">
            R$ {produto.preco}
          </p>
        </div>

        {/* Botão corrigido — passa o ID do produto na URL */}
        <button 
          onClick={() => navigate(`/produto/${produto.id}`)}
          className="bg-black text-white font-black uppercase tracking-widest italic py-3 rounded-md hover:bg-neutral-500 active:scale-95 transition-all duration-150 text-sm border border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
        >
          Comprar
        </button>
      </div>
    </div>
  );
}

export default ProductCard;