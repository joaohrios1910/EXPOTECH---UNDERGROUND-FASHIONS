import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function Masculino() {
  // Filtra apenas os produtos da categoria masculina
  const lista = products.filter(item => item.categoria === 'masculino')

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      {/* Banner de Categoria Estilo Nike */}
      <section 
        className="h-[ 350px] md:h-[ 450px] bg-cover bg-center flex flex-col justify-end p-8 md:p-16 relative"
        style={{ 
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9) 10%, rgba(0,0,0,0.2) 100%), url('https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1600')` 
        }}
      >
        <div className="max-w-xl z-10 text-left">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">Linha Streetwear</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-3">
            DOMINE AS RUAS
          </h2>
          <p className="text-zinc-300 text-xs md:text-sm max-w-md mb-4">
            Roupas projetadas para quem não tem medo de se destacar. Conforto e durabilidade underground.
          </p>
        </div>
      </section>

      {/* Grade de Produtos */}
      <main className="max-w-[ 1600px] mx-auto px-8 py-12">
        <div className="flex justify-between items-center border-b border-zinc-900 pb-4 mb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest">Moda Masculina</h3>
          <p className="text-xs text-zinc-500">{lista.length} Produtos encontrados</p>
        </div>

        {lista.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
            {lista.map(produto => (
              <ProductCard key={produto.id} produto={produto} />
            ))}
          </div>
        ) : (
          <p className="text-center text-zinc-500 py-12 text-sm">Nenhum produto cadastrado nesta categoria ainda.</p>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default Masculino