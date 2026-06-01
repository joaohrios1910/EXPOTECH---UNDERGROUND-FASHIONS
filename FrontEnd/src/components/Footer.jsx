import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-[#f5f5f5] text-[#111111] text-xs pt-12 pb-6 px-8 md:px-16 font-sans border-t border-zinc-200">
      
      {/* Container Principal: Divide em Links e Redes Sociais */}
      <div className="max-w- [1600px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 pb-12 border-b border-zinc-200">
        
       {/* Coluna 1: Underground Fashions */}
        <div className="flex flex-col gap-2.5">
          <h5 className="font-black uppercase tracking-tighter text-sm text-black italic">Underground Fashions</h5>
          <ul className="flex flex-col gap-2 text-zinc-600 font-medium">
            <li><a href="#" className="hover:text-black transition-colors">A Marca</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Coleções</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Collabs</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Sustentabilidade</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Trabalhe Conosco</a></li>
          </ul>
        </div>

        {/* Coluna 2: Atendimento */}
        <div className="flex flex-col gap-2.5">
           <h5 className="font-black uppercase tracking-tighter text-sm text-black italic">Atendimento</h5>
          <ul className="flex flex-col gap-2 text-zinc-600">
            <li><a href="#" className="hover:text-black transition-colors">Dúvidas Frequentes</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Tabela de Medidas</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Entregas e Prazos</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Trocas e Devoluções</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Fale conosco</a></li>
          </ul>
        </div>

        {/* Coluna 3: Corporativo */}
        <div className="flex flex-col gap-2.5">
          <h5 className="font-black uppercase tracking-tighter text-sm text-black italic">Corporativo</h5>
          <ul className="flex flex-col gap-2 text-zinc-600">
            <li><a href="#" className="hover:text-black transition-colors">Vendas Atacado</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Seja um Representante</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Imprensa</a></li>
          </ul>
        </div>

        {/* Coluna 4 & 5: Redes Sociais e Formas de Pagamento Geradas via Código */}
        <div className="flex flex-col gap-8 md:col-span-2">
          
          {/* BLOCO DE REDES SOCIAIS (SVGs Originais Gerados) */}
          <div className="flex flex-col gap-3">
            <h5 className="font-bold uppercase tracking-tight text-[11px] text-black">Redes sociais</h5>
            <div className="flex flex-row gap-4">
              

              {/* Facebook */}
              <a href="#" className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-colors shadow-md" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              {/* YouTube */}
              <a href="#" className="w-9 h-9 bg-red-800 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-colors shadow-md" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* BLOCO DE BANDEIRAS DE PAGAMENTO (Estilizadas Brutalistas com Texto e Cores Oficiais) */}
          <div className="flex flex-col gap-3">
            <h5 className="font-bold uppercase tracking-tight text-[11px] text-black">Formas de pagamento</h5>
            <div className="flex flex-wrap gap-2">
              
              {/* Mastercard */}
              <div className="w-16 h-10 bg-white border-2 border-black rounded flex items-center justify-center gap-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-4 h-4 bg-[#eb001b] rounded-full opacity-90"></div>
                <div className="w-4 h-4 bg-[#ff5f00] rounded-full -ml-2.5 opacity-90"></div>
              </div>

              {/* Visa */}
              <div className="w-16 h-10 bg-white border-2 border-black rounded flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-[#0a2574] font-black italic tracking-tighter text-sm">VISA</span>
              </div>

              {/* Elo */}
              <div className="w-16 h-10 bg-white border-2 border-black rounded flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex flex-col items-center">
                  <span className="text-black font-black text-[10px] uppercase tracking-tighter italic">ELO</span>
                  <div className="flex gap-0.5 -mt-0.5">
                    <span className="w-1 h-1 bg-[#00a4e4] rounded-full"></span>
                    <span className="w-1 h-1 bg-[#ffcc00] rounded-full"></span>
                    <span className="w-1 h-1 bg-[#ee3124] rounded-full"></span>
                  </div>
                </div>
              </div>

              {/* Amex */}
              <div className="w-16 h-10 bg-[#007bc1] border-2 border-black rounded flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-white font-bold text-[8px] tracking-tight uppercase">AMEX</span>
              </div>

              {/* Pix */}
              <div className="w-16 h-10 bg-white border-2 border-black rounded flex flex-col items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <svg className="w-4 h-4 text-[#32b1a4]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 12l10 10 10-10L12 2zm-1 5.5h2V11h3.5v2H13v3.5h-2V13H7.5v-2H11V7.5z" />
                </svg>
                <span className="text-[#32b1a4] font-bold text-[8px] -mt-0.5">PIX</span>
              </div>

              {/* Boleto Bancário */}
              <div className="w-16 h-10 bg-white border-2 border-black rounded flex flex-col items-center justify-center gap-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex gap -[1px]">
                  <span className="w- [1px] h-3 bg-black"></span>
                  <span className="w- [2px] h-3 bg-black"></span>
                  <span className="w- [1px] h-3 bg-black"></span>
                  <span className="w- [3px] h-3 bg-black"></span>
                  <span className="w- [1px] h-3 bg-black"></span>
                </div>
                <span className="text-black font-black text-[7px] uppercase tracking-widest">BOLETO</span>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Rodapé Inferior */}
      <div className="max-w- [1600px] mx-auto pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-[11px] text-center md:text-left">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start font-medium">
          <a href="#" className="hover:text-black underline transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-black underline transition-colors">Termos de Uso</a>
        </div>

        <p className="font-medium text-zinc-400">
          © {new Date().getFullYear()} Underground Fashions. Todos os direitos reservados. CNPJ: 00.000.000/0001-00.
        </p>
      </div>

    </footer>
  );
}

export default Footer;