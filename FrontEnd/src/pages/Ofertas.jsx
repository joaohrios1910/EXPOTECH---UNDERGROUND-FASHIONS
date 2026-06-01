import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function Ofertas() {
  // Mostra apenas produtos que têm preço promocional ou que pertencem à categoria ofertas
  const lista = products.filter(item => item.categoria === 'ofertas' || item.precoDe > 0)

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <main className="max-w-[ 1600px] mx-auto px-8 py-12">
        {/* Título de Seção Estilo Catálogo */}
        <div className="border-b border-zinc-900 pb-5 mb-10 text-left">
          <h2 className="text-2xl font-black uppercase tracking-tight">Produtos em Oferta ({lista.length})</h2>
          <p className="text-zinc-400 text-xs mt-1">Aproveite os melhores descontos do streetwear com estoque limitado.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Menu Lateral de Filtros Decorativo (Igual ao print da Nike) */}
          <aside className="w-full lg:w-56 flex- shrink-0 text-left hidden lg:block">
            <h4 className="font-bold text-xs uppercase tracking-wider mb-4 border-b border-zinc-900 pb-2 text-zinc-300">Filtrar por</h4>
            <div className="space-y-4 text-xs text-zinc-400">
              <div>
                <p className="font-semibold text-white mb-2">Gênero</p>
                <label className="flex items-center gap-2 mb-1.5"><input type="checkbox" className="accent-white" /> Masculino</label>
                <label className="flex items-center gap-2 mb-1.5"><input type="checkbox" className="accent-white" /> Feminino</label>
                <label className="flex items-center gap-2"><input type="checkbox" className="accent-white" /> Unissex</label>
              </div>
              <div className="pt-2">
                <p className="font-semibold text-white mb-2">Preço</p>
                <label className="flex items-center gap-2 mb-1.5"><input type="checkbox" className="accent-white" /> Até R$99</label>
                <label className="flex items-center gap-2"><input type="checkbox" className="accent-white" /> R$100 a R$200</label>
              </div>
            </div>
          </aside>

          {/* Grade de Ofertas */}
          <div className="flex- grow">
            {lista.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
                {lista.map(produto => (
                  <ProductCard key={produto.id} produto={produto} />
                ))}
              </div>
            ) : (
              <p className="text-center text-zinc-500 py-12 text-sm">Nenhuma oferta ativa no momento.</p>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Ofertas