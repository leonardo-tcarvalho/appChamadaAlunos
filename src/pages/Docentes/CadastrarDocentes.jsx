import { useState } from "react";
import { api } from "../../lib/axios";

export function CadastrarDocentes() {

  const [nomeCompleto, setNomeCompleto] = useState('')
  const [disciplina, setDisciplina] = useState('')
  function BuscarDadosDocente() {
    api.post('cadastrar_docente.php', {
      nomeCompleto: nomeCompleto,
      disciplina: disciplina,
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )
      .then(response => {
        console.log('Docente cadastrado com sucesso:', response.data);
      })
      .catch(error => {
        console.error('Erro ao cadastrar docente:', error);
      });
  }

  return (
    <section className="flex-full bg-black xl:p-20 lg:p-10">
      <div className="w-full h-full p-10 rounded-lg overflow-y-auto bg-gray-900 max-sm:pt-20 max-sm:px-5 max-sm:rounded-none custom-scrollbar">
        <h1 className="w-full text-3xl text-center text-white pb-10">
          Cadastrar Docente
        </h1>
        <div className="w-full flex flex-wrap gap-5">
          <div className="w-full pt-8 mx-auto relative group">
            <label
              className="absolute py-0 -translate-y-8 text-white bg-gray-900 text-xl group-focus-within:-translate-y-4 group-focus-within:translate-x-4 group-focus-within:px-1"
              htmlFor=""
            >
              Nome Completo
            </label>
            <input
              className="w-full h-14 p-3 cursor-pointer text-white bg-gray-900 rounded-md border-2 border-white outline-none"
              type="text"
              placeholder="Digite o nome do aluno..."
              value={nomeCompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
            />
          </div>
          <div className="w-full pt-8 mx-auto relative group">
            <label
              className="absolute  py-0 -translate-y-8 text-white bg-gray-900 text-xl group-focus-within:-translate-y-4 group-focus-within:translate-x-4  group-focus-within:px-1"
              htmlFor=""
            >
              Disciplina
            </label>
            <input
              className="w-full h-14 p-3 cursor-pointer text-white bg-gray-900 rounded-md border-2 border-white outline-none"
              type="text"
              placeholder="Digite a cidade do aluno..."
              value={disciplina}
              onChange={(e) => setDisciplina(e.target.value)}
            />
          </div>
        </div>
        <div className="flex w-full pt-10">
          <button onClick={BuscarDadosDocente} className="text-xl mx-auto mt-5 w-56 h-10 p-2 rounded-md text-gray-900 bg-white focus:bg-gray-500">
            Cadastrar
          </button>
        </div>
      </div>
    </section>
  );
}
