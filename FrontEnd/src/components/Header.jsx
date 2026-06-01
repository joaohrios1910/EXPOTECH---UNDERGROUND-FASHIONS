import { Link } from "react-router-dom"
import logo from "../assets/logo.jpeg" 

function Header() {
  return (
    <header className="bg-white text-black w-full relative z-50">
      <div className="px-10 py-4 flex justify-between items-center max-w-[1500px] mx-auto">
        
        <Link to="/" className="flex items-center gap-1.5 pl-23">
          <div className="w-14 h-14 flex items-center justify-center overflow-hidden relative">
            <img 
              src={logo} alt="Moda Underground Logo" className="w-8 h-24 max-w-none object-contain mix-blend-multiply scale-150 contrast-150" />
          </div>
          <h1 className="text-xl font-black tracking-tighter uppercase text-black">
            Underground Fashions
          </h1>
        </Link>

        <nav className="hidden md:flex gap-8 font-bold uppercase text-[11px] tracking-[0.15em] text-zinc-500">
          <Link to="/" className="text-black hover:text-black transition-colors">Home</Link>
          <Link to="/masculino" className="hover:text-black transition-colors">Masculino</Link>
          <Link to="/feminino" className="hover:text-black transition-colors">Feminina</Link>
          <Link to="/infantil" className="hover:text-black transition-colors">Infantil</Link>
          <Link to="/ofertas" className="text-red-600 font-extrabold hover:text-red-500 transition-colors">Ofertas</Link>
          <Link to="/acessorios" className="hover:text-black transition-colors">Acessórios</Link>
        </nav>

        <div className="flex items-center gap-4">

          {/* Carrinho */}
          <Link to="/carrinho" className="text-zinc-900 hover:text-black transition-colors relative" title="Carrinho">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </Link>

          {/* Perfil */}
          <Link to="/perfil" className="text-zinc-900 hover:text-black transition-colors" title="Meu Perfil">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </Link>

        </div>
      </div>
    </header>
  )
}

export default Header