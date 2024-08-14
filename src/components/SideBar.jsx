import { Link } from "react-router-dom";
import { CircleSVG } from "../images/svg/CircleSVG";
import { GraduationCapSVG } from "../images/svg/GraduationCapSVG";
import { UsersSVG } from "../images/svg/UsersSVG";
import { AgendTabSVG } from "../images/svg/AgendTabSVG";
import { SchoolSVG } from "../images/svg/SchoolSVG";
import { MenuSVG } from "../images/svg/MenuSVG";

export function SideBar() {
  return (
    <menu className="sm:group/menu group">
      <button className="sm:hidden w-screen absolute p-4 bg-gray-900 text-white">
        <MenuSVG />
      </button>
      <nav className="flex justify-center w-60 h-screen py-10 sm:border-r-2 border-white bg-gray-900 overflow-hidden  duration-1000 z-50 max-sm:absolute max-sm:max-w-0 group-focus-within/menu:border-r-2 group-focus-within:border-white group-focus-within/menu:duration-1000 group-focus-within/menu:flex group-focus-within/menu:max-w-96 max-sm:group-focus-within:border-r-2 max-sm:group-focus-within:border-white max-sm:group-focus-within:duration-1000 max-sm:group-focus-within:flex max-sm:group-focus-within:max-w-96">
        <ul className="w-full overflow-y-auto">
          <div className="flex justify-center pb-5">
            <SchoolSVG />
          </div>
          <Link to="/">
            <li className="flex w-11/12 mx-auto my-2 items-center rounded-md py-2 px-5 gap-5 duration-100 hover:duration-100 hover:bg-gray-800">
              <AgendTabSVG />
              <p className="font-normal text-white text-nowrap">
                Lista de Presença
              </p>
            </li>
          </Link>
          <div className="group">
            <li className="flex w-11/12 mx-auto my-2 items-center rounded-md py-2 px-5 gap-5 duration-100 hover:duration-100 hover:bg-gray-800 max-sm:hover:bg-transparent">
              <GraduationCapSVG />
              <p className="font-normal text-white text-nowrap">Turma</p>
            </li>
            <ul className="w-11/12 mx-auto max-h-0 easy ease-in-out duration-200 overflow-hidden group-hover:max-h-96 group-hover:duration-1000">
              <Link to="/CadastrarTurmas">
                <li className="flex w-11/12 ml-auto my-2 items-center rounded-md py-2 px-5 gap-2 duration-100 hover:duration-100 hover:bg-gray-800">
                  <CircleSVG />
                  <p className="font-normal text-white text-nowrap">
                    Cadastrar Turma
                  </p>
                </li>
              </Link>
              <Link to="AlterarTurmas">
                <li className="flex w-11/12 ml-auto my-2 items-center rounded-md py-2 px-5 gap-2 duration-100 hover:duration-100 hover:bg-gray-800">
                  <CircleSVG />
                  <p className="font-normal text-white text-nowrap">
                    Alterar Turma
                  </p>
                </li>
              </Link>
              <Link to="/ListarTurmas">
                <li className="flex w-11/12 ml-auto my-2 items-center rounded-md py-2 px-5 gap-2 duration-100 hover:duration-100 hover:bg-gray-800">
                  <CircleSVG />
                  <p className="font-normal text-white text-nowrap">
                    Lista de Turmas
                  </p>
                </li>
              </Link>
            </ul>
          </div>
          <div className="group">
            <li className="flex w-11/12 mx-auto my-2 items-center rounded-md py-2 px-5 gap-5 duration-100 hover:duration-100 hover:bg-gray-800 max-sm:hover:bg-transparent">
              <UsersSVG />
              <p className="font-normal text-white text-nowrap">Alunos</p>
            </li>
            <ul className="w-11/12 mx-auto max-h-0 ease-in-out duration-200 overflow-hidden group-hover:max-h-96 group-hover:duration-1000">
              <Link to="/CadastrarAluno">
                <li className="flex w-11/12 ml-auto my-2 items-center rounded-md py-2 px-5 gap-2 duration-100 hover:duration-100 hover:bg-gray-800">
                  <CircleSVG />
                  <p className="font-normal text-white text-nowrap">
                    Cadatrar Aluno
                  </p>
                </li>
              </Link>
              <Link to="/ListarAlunos">
                <li className="flex w-11/12 ml-auto my-2 items-center rounded-md py-2 px-5 gap-2 duration-100 hover:duration-100 hover:bg-gray-800">
                  <CircleSVG />
                  <p className="font-normal text-white text-nowrap">
                    Lista de Alunos
                  </p>
                </li>
              </Link>
            </ul>
          </div>
          <div className="group">
            <li className="flex w-11/12 mx-auto my-2 items-center rounded-md py-2 px-5 gap-5 duration-100 hover:duration-100 hover:bg-gray-800 max-sm:hover:bg-transparent">
              <UsersSVG />
              <p className="font-normal text-white text-nowrap">Docentes</p>
            </li>
            <ul className="w-11/12 mx-auto max-h-0 ease-in-out duration-200 overflow-hidden group-hover:max-h-96 group-hover:duration-1000">
              <Link to="/CadastrarDocente">
                <li className="flex w-11/12 ml-auto my-2 items-center rounded-md py-2 px-5 gap-2 duration-100 hover:duration-100 hover:bg-gray-800">
                  <CircleSVG />
                  <p className="font-normal text-white text-nowrap">
                    Cadatrar Docente
                  </p>
                </li>
              </Link>
              <Link to="/ListarDocentes">
                <li className="flex w-11/12 ml-auto my-2 items-center rounded-md py-2 px-5 gap-2 duration-100 hover:duration-100 hover:bg-gray-800">
                  <CircleSVG />
                  <p className="font-normal text-white text-nowrap">
                    Lista de Docentes
                  </p>
                </li>
              </Link>
            </ul>
          </div>
        </ul>
      </nav>
    </menu>
  );
}
