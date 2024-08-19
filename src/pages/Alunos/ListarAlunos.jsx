import { useEffect, useState } from "react"
import { api } from "../../lib/axios"

export function ListarAlunos() {
  const [nomeAluno, setNomeAluno] = useState('')
  const [dadosAlunos, setDadosAlunos] = useState('')

  useEffect(() => {
    api.post('listar_alunos.php', {
      nomeAluno: nomeAluno
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        setDadosAlunos(response.data.ListaAlunos)
      })
      .catch(error => {
        console.error("Erro ao buscar os alunos:", error);
      });
  }, [nomeAluno])


  return (
    <section className="flex-full bg-black xl:p-20 lg:p-10">
      <div className="w-full h-full p-10 rounded-lg bg-gray-900 max-sm:pt-20 max-sm:px-5 max-sm:rounded-none custom-scrollbar">
        <h1 className="w-full text-3xl text-center text-white pb-10">
          Lista de Alunos
        </h1>
        <div className="w-full pt-8 mb-10 mx-auto relative group">
          <label
            className="absolute py-0 -translate-y-8 text-white bg-gray-900 text-xl group-focus-within:-translate-y-4 group-focus-within:translate-x-4 group-focus-within:px-1"
            htmlFor=""
          >
            Buscar Aluno
          </label>
          <input
            className="w-full h-14 p-3 cursor-pointer text-white bg-gray-900 rounded-md border-2 border-white outline-none"
            type="text"
            placeholder="Digite o nome do aluno..."
            value={nomeAluno}
            onChange={(e) => setNomeAluno(e.target.value)}
          />
        </div>
        <div className="w-full h-[calc(100%-184px)] overflow-y-auto custom-scrollbar">
          {dadosAlunos.length > 0 ? (
            dadosAlunos.map((aluno) => (
              <div key={aluno.ALUNO} className="bg-gray-900 rounded-lg p-6 mb-6 shadow-lg border border-gray-700">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-white font-bold">RA: {aluno.ALUNO}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
                  <div>
                    <p className="font-medium text-gray-400">Nome</p>
                    <p>{aluno.NOME_COMPL}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-400">Idade</p>
                    <p>{aluno.IDADE}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-400">Cidade</p>
                    <p>{aluno.CIDADE}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-400">Código da Turma</p>
                    <p>{aluno.COD_TURMA}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-400">Nome do Responsável</p>
                    <p>{aluno.NOME_RESP}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white p-4">Nenhum aluno encontrado.</p>
          )}
        </div>
      </div>
    </section>
  )
}
