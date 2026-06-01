import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Usuario() {
  const [editando, setEditando] = useState(false);
  const [form, setForm] = useState({
    nomeCompleto: 'João Silva',
    email: 'joao@email.com',
    telefone: '',
    cpf: '',
  });
  const [salvo, setSalvo] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function salvar() {
    setEditando(false);
    setSalvo(true);
    setTimeout(() => setSalvo(false), 3000);
  }

  return (
    <div className="bg-white text-black min-h-screen">
      <Header />

      <main className="max-w-2xl mx-auto p-6 py-12">
        <h1 className="text-3xl font-black uppercase italic mb-8">Meu Perfil</h1>

        {salvo && (
          <div className="mb-6 bg-emerald-50 border-2 border-emerald-400 rounded-lg p-4">
            <p className="text-emerald-700 font-bold text-sm">✅ Dados salvos com sucesso!</p>
          </div>
        )}

        <div className="border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          
          {/* Cabeçalho do perfil */}
          <div className="border-b-2 border-black p-6 flex items-center gap-4">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center">
              <span className="text-2xl font-black uppercase">
                {form.nomeCompleto.charAt(0)}
              </span>
            </div>
            <div>
              <h2 className="font-black text-xl uppercase italic">{form.nomeCompleto}</h2>
              <p className="text-zinc-500 text-sm">{form.email}</p>
            </div>
          </div>

          {/* Dados */}
          <div className="p-6 flex flex-col gap-4">

            <div>
              <label className="text-xs font-bold uppercase text-zinc-500">Nome Completo</label>
              {editando ? (
                <input
                  name="nomeCompleto"
                  value={form.nomeCompleto}
                  onChange={handleChange}
                  className="w-full border-2 border-zinc-300 rounded px-3 py-2 mt-1 text-sm focus:border-black outline-none font-bold"
                />
              ) : (
                <p className="font-bold mt-1">{form.nomeCompleto}</p>
              )}
            </div>

            <div>
              <label className="text-xs font-bold uppercase text-zinc-500">Email</label>
              {editando ? (
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border-2 border-zinc-300 rounded px-3 py-2 mt-1 text-sm focus:border-black outline-none font-bold"
                />
              ) : (
                <p className="font-bold mt-1">{form.email}</p>
              )}
            </div>

            <div>
              <label className="text-xs font-bold uppercase text-zinc-500">Telefone</label>
              {editando ? (
                <input
                  name="telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className="w-full border-2 border-zinc-300 rounded px-3 py-2 mt-1 text-sm focus:border-black outline-none font-bold"
                />
              ) : (
                <p className="font-bold mt-1">{form.telefone || <span className="text-zinc-400">Não informado</span>}</p>
              )}
            </div>

            <div>
              <label className="text-xs font-bold uppercase text-zinc-500">CPF</label>
              {editando ? (
                <input
                  name="cpf"
                  value={form.cpf}
                  onChange={handleChange}
                  placeholder="000.000.000-00"
                  className="w-full border-2 border-zinc-300 rounded px-3 py-2 mt-1 text-sm focus:border-black outline-none font-bold"
                />
              ) : (
                <p className="font-bold mt-1">{form.cpf || <span className="text-zinc-400">Não informado</span>}</p>
              )}
            </div>

          </div>

          {/* Botões */}
          <div className="border-t-2 border-black p-6 flex gap-3 justify-end">
            {editando ? (
              <>
                <button
                  onClick={() => setEditando(false)}
                  className="border-2 border-black px-6 py-2 font-black uppercase text-sm rounded hover:bg-zinc-100 transition-all"
                >
                  Cancelar
                </button>
                <button
                  onClick={salvar}
                  className="bg-black text-white px-6 py-2 font-black uppercase text-sm rounded hover:bg-zinc-800 transition-all"
                >
                  Salvar
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditando(true)}
                className="bg-black text-white px-6 py-2 font-black uppercase text-sm rounded hover:bg-zinc-800 transition-all"
              >
                Editar perfil
              </button>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Usuario;