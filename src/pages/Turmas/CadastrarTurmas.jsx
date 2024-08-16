import { useState } from "react";
import { api } from "../../lib/axios";

export function CadastrarTurmas() {
  const [codDocente, setCodDocente] = useState(null)
  const [nomeTurma, setNomeTurma] = useState('')
  const [grade, setGrade] = useState('')
  const [serie, setSerie] = useState('')

  function CadastrarTurma() {
    api.post('cadastrar_turma.php', {
      codDocente: codDocente,
      nomeTurma: nomeTurma,
      grade: grade,
      serie: serie
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )
      .then(response => {
        console.log('Aluno cadastrado com sucesso:', response.data);
      })
      .catch(error => {
        console.error('Erro ao cadastrar aluno:', error);
      });

  }
  return (
    <section className="flex-full bg-black xl:p-20 lg:p-10">
      <div className="w-full h-full p-10 rounded-lg overflow-y-auto bg-gray-900 max-sm:pt-20 max-sm:px-5 max-sm:rounded-none">
        <h1 className="w-full text-3xl text-center text-white pb-10">
          Cadastrar Nova Turma
        </h1>
        <div className="w-full flex flex-col gap-5">
          <div className="w-full -pt-8 mx-auto relative group">
            <label
              className="absolute  py-0 -translate-y-8 text-white bg-gray-900 text-xl duration-100 group-focus-within:duration-100 group-focus-within:-translate-y-4 group-focus-within:translate-x-4  group-focus-within:px-1"
              htmlFor=""
            >
              Codigo do Docente
            </label>
            <input
              className="w-full h-14 p-3 cursor-pointer text-white bg-gray-900 rounded-md border-2 border-white outline-none"
              type="text"
              placeholder="Digite o nome da turma..."
              value={codDocente}
              onChange={(e) => setCodDocente(e.target.value)}
            />
          </div>
          <div className="w-full pt-8 mx-auto relative group">
            <label
              className="absolute  py-0 -translate-y-8 text-white bg-gray-900 text-xl duration-100 group-focus-within:duration-100 group-focus-within:-translate-y-4 group-focus-within:translate-x-4  group-focus-within:px-1"
              htmlFor=""
            >
              Nome da Turma
            </label>
            <input
              className="w-full h-14 p-3 cursor-pointer text-white bg-gray-900 rounded-md border-2 border-white outline-none"
              type="text"
              placeholder="Digite o ano da grade.."
              value={nomeTurma}
              onChange={(e) => setNomeTurma(e.target.value)}
            />
          </div>
          <div className="w-full pt-8 mx-auto relative group">
            <label
              className="absolute  py-0 -translate-y-8 text-white bg-gray-900 text-xl duration-100 group-focus-within:duration-100 group-focus-within:-translate-y-4 group-focus-within:translate-x-4  group-focus-within:px-1"
              htmlFor=""
            >
              Grade Ano
            </label>
            <input
              className="w-full h-14 p-3 cursor-pointer text-white bg-gray-900 rounded-md border-2 border-white outline-none"
              type="text"
              placeholder="Digite a grade da turma..."
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            />
          </div>
          <div className="w-full pt-8 mx-auto relative group">
            <label
              className="absolute  py-0 -translate-y-8 text-white bg-gray-900 text-xl duration-100 group-focus-within:duration-100 group-focus-within:-translate-y-4 group-focus-within:translate-x-4  group-focus-within:px-1"
              htmlFor=""
            >
              Serie
            </label>
            <input
              className="w-full h-14 p-3 cursor-pointer text-white bg-gray-900 rounded-md border-2 border-white outline-none"
              type="text"
              placeholder="Digite a serie da turma..."
              value={serie}
              onChange={(e) => setSerie(e.target.value)}
            />
          </div>
        </div>
        <div className="flex w-full pt-10">
          <button onClick={CadastrarTurma} className="text-xl mx-auto mt-5 w-56 h-10 p-2 rounded-md text-gray-900 bg-white focus:bg-gray-500">
            Cadastrar
          </button>
        </div>
      </div>
    </section>
  );
}
