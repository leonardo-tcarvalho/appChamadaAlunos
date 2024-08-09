export function CadastrarTurmas() {
  return (
    <section className="flex-full bg-black p-20">
      <div className="flex flex-col gap-5 w-full h-full p-20 rounded-lg bg-gray-900">
        <h1 className="text-3xl text-center text-white py-10">
          Cadastrar Nova Turma
        </h1>
        <div className="w-96 pt-8 mx-auto relative group">
          <label className="absolute  py-0 -translate-y-8 text-white bg-gray-900 text-xl group-focus-within:-translate-y-4 group-focus-within:translate-x-4  group-focus-within:px-1" htmlFor="">Nome da Turma</label>
          <input className="w-full h-14 p-3 cursor-pointer text-white bg-gray-900 rounded-md border-2 border-white outline-none" type="text" placeholder="Digite o nome da turma..." />
        </div>
        <div className="w-96 pt-8 mx-auto relative group">
          <label className="absolute  py-0 -translate-y-8 text-white bg-gray-900 text-xl group-focus-within:-translate-y-4 group-focus-within:translate-x-4  group-focus-within:px-1" htmlFor="">Grade da Turma</label>
          <input className="w-full h-14 p-3 cursor-pointer text-white bg-gray-900 rounded-md border-2 border-white outline-none" type="text" placeholder="Digite o ano da grade.." />
        </div>
        <div className="w-96 pt-8 mx-auto relative group">
          <label className="absolute  py-0 -translate-y-8 text-white bg-gray-900 text-xl group-focus-within:-translate-y-4 group-focus-within:translate-x-4  group-focus-within:px-1" htmlFor="">Serie</label>
          <input className="w-full h-14 p-3 cursor-pointer text-white bg-gray-900 rounded-md border-2 border-white outline-none" type="text" placeholder="Digite a serie da turma..." />
        </div>
        <button className="text-xl mx-auto mt-5 w-56 p-2 rounded-md text-gray-900 bg-white focus:bg-gray-500">Cadastrar</button>
      </div>
    </section>
  );
}
