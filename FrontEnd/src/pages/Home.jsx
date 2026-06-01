import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import backgroundHero from '../assets/underground-principal.png';

function Home() {
  const [products, setProducts] = useState([]);

 useEffect(() => {
    fetch('http://localhost:3000/api/produtos')
      .then((res) => res.json())
      .then((data) => {
        const produtosFormatados = data.map((produto) => {
        
          const nomeImagem = produto.imagem ? produto.imagem : 'Camiseta.png';
          
          return {
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            imagem: new URL(`../assets/${nomeImagem}`, import.meta.url).href
          };
        });

        setProducts(produtosFormatados);
      })
      .catch((err) => console.error('Erro ao buscar produtos:', err));
  }, []);
  return (
    <div className="bg-white text-zinc-900 min-h-screen font-sans antialiased">
      <Header />

      <section
        className="w-full h-[83vh] bg-cover flex flex-col justify-end items-center pb-16 px-4 relative"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.3) 10%, rgba(0,0,0,0.2) 100%), url(${backgroundHero})`,
        }}
      >
        <div className="z-10 flex flex-col items-center w-full">
          <div className="max-w-xl mb-6 text-left flex flex-col items-start self-start md:pl-20">
            <p className="text-xs font-bold uppercase tracking-widest text-white mb-1">
              Linha Streetwear
            </p>

            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-3 text-white">
              DOMINE AS RUAS
            </h2>

            <p className="text-white text-xs md:text-sm max-w-md mb-4">
              Roupas projetadas para quem não tem medo de se destacar.
              Conforto e durabilidade underground.
              Mais do que roupa, é atitude.
            </p>
          </div>

          <div className="flex flex-row items-center gap-4">
            <button className="bg-white text-black hover:bg-black hover:text-white hover:border-black text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-300 shadow-xl border border-zinc-200">
              COMPRAR AGORA
            </button>

            <button className="bg-white text-black hover:bg-black hover:text-white hover:border-black text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-300 shadow-xl border border-zinc-100">
              Saiba mais
            </button>
          </div>
        </div>
      </section>

      <main className="max-w- [1600px] mx-auto px-8 py-16">
        <div className="text-left border-b border-zinc-200 pb-3 mb-8">
          <h4 className="text-4xl md:text-2xl font-black uppercase italic tracking-tighter mb-3 text-black">
            Top Tendências
          </h4>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {products.map((produto) => (
            <ProductCard
              key={produto.id}
              produto={produto}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;