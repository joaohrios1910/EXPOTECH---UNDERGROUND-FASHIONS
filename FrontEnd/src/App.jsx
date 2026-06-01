import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Masculino from './pages/Masculino'
import Feminino from './pages/Feminino'
import Infantil from './pages/Infantil'
import Ofertas from './pages/Ofertas'
import Acessorios from './pages/Acessorios'
import Chatbot from './components/Chatbot'
import ProductDetail from './pages/ProductDetail'
import Carrinho from './pages/Carrinho'
import Pagamento from './pages/Pagamento'
import PedidoConfirmado from './pages/PedidoConfirmado'
import Usuario from './pages/Usuario'
// ...
<Route path="/perfil" element={<Usuario />} />


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/masculino' element={<Masculino />} />
        <Route path='/feminino' element={<Feminino />} />
        <Route path='/infantil' element={<Infantil />} />
        <Route path='/ofertas' element={<Ofertas />} />
        <Route path='/acessorios' element={<Acessorios />} />
        <Route path="/produto/:id" element={<ProductDetail />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/pedido-confirmado" element={<PedidoConfirmado />} />
        <Route path="/perfil" element={<Usuario />} />

      </Routes>
      <Chatbot />
    </>
  );
}

export default App