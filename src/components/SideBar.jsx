import { Link } from "react-router-dom";
import { CircleSVG } from "../images/svg/CircleSVG";
import { GraduationCapSVG } from "../images/svg/GraduationCapSVG";
import { UsersSVG } from "../images/svg/UsersSVG";
import { AgendTabSVG } from "../images/svg/AgendTabSVG";
import { SchoolSVG } from "../images/svg/SchoolSVG";

export function SideBar() {
  return (
    <header className="flex justify-center w-60 h-screen py-10 border-r-2 border-gray-200 bg-gray-900">
      <ul className="w-full">
        <div className="flex justify-center pb-5">
          <SchoolSVG />
        </div>
        <Link to="/">
          <li className="flex w-11/12 mx-auto my-2 items-center rounded-md py-2 px-5 gap-5 duration-100 hover:duration-100 hover:bg-gray-800">
            <AgendTabSVG />
            <p className="font-normal text-white">Lista de Presença</p>
          </li>
        </Link>
        <div className="group">
          <li className="flex w-11/12 mx-auto my-2 items-center rounded-md py-2 px-5 gap-5 duration-100 hover:duration-100 hover:bg-gray-800">
            <GraduationCapSVG />
            <p className="font-normal text-white">Turma</p>
          </li>
          <ul className="w-11/12 mx-auto max-h-0 easy ease-in-out duration-200 overflow-hidden group-hover:max-h-96 group-hover:duration-1000">
            <Link to="/CadastrarTurmas">
              <li className="flex w-11/12 ml-auto my-2 items-center rounded-md py-2 px-5 gap-2 duration-100 hover:duration-100 hover:bg-gray-800">
                <CircleSVG />
                <p className="font-normal text-white">Cadastrar Turma</p>
              </li>
            </Link>
            <Link to="AlterarTurmas">
              <li className="flex w-11/12 ml-auto my-2 items-center rounded-md py-2 px-5 gap-2 duration-100 hover:duration-100 hover:bg-gray-800">
                <CircleSVG />
                <p className="font-normal text-white">Alterar Turma</p>
              </li>
            </Link>
            <Link to="/ListarTurmas">
              <li className="flex w-11/12 ml-auto my-2 items-center rounded-md py-2 px-5 gap-2 duration-100 hover:duration-100 hover:bg-gray-800">
                <CircleSVG />
                <p className="font-normal text-white">Lista de Turmas</p>
              </li>
            </Link>
          </ul>
        </div>
        <div className="group">
          <li className="flex w-11/12 mx-auto my-2 items-center rounded-md py-2 px-5 gap-5 duration-100 hover:duration-100 hover:bg-gray-800">
            <UsersSVG />
            <p className="font-normal text-white">Alunos</p>
          </li>
          <ul className="w-11/12 mx-auto max-h-0 ease-in-out duration-200 overflow-hidden group-hover:max-h-96 group-hover:duration-1000">
            <Link to="/CadastrarAluno">
              <li className="flex w-11/12 ml-auto my-2 items-center rounded-md py-2 px-5 gap-2 duration-100 hover:duration-100 hover:bg-gray-800">
                <CircleSVG />
                <p className="font-normal text-white">Cadatrar Aluno</p>
              </li>
            </Link>
            <Link to="ListarAlunos">
              <li className="flex w-11/12 ml-auto my-2 items-center rounded-md py-2 px-5 gap-2 duration-100 hover:duration-100 hover:bg-gray-800">
                <CircleSVG />
                <p className="font-normal text-white">Lista de Alunos</p>
              </li>
            </Link>
          </ul>
        </div>
      </ul>
    </header >
  );
}
