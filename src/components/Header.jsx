import { Link } from "react-router-dom";
import { CircleSVG } from "../images/svg/CircleSVG";
import { GraduationCapSVG } from "../images/svg/GraduationCapSVG";
import { UsersSVG } from "../images/svg/UsersSVG";
import { AgendTabSVG } from "../images/svg/AgendTabSVG";

export function Header() {
  return (
    <header className="flex justify-center w-60 h-screen py-10 border-r-2 shadow-l z-50 border-gray-800 bg-gray-900">
      <ul className="w-full">
        <Link to="/">
          <li className="flex w-11/12 mx-auto my-2 items-center rounded-md py-2 px-5 gap-5 duration-100 hover:duration-100 hover:bg-gray-800">
            <GraduationCapSVG />
            <p className="font-normal text-white">Turma</p>
          </li>
        </Link>
        <div className="group">
          <Link to="/alunos">
            <li className="flex w-11/12 mx-auto my-2 items-center rounded-md py-2 px-5 gap-5 duration-100 hover:duration-100 hover:bg-gray-800">
              <UsersSVG />
              <p className="font-normal text-white">Alunos</p>
            </li>
            <ul className="max-h-0 ease-in-out duration-1000 overflow-hidden group-hover:max-h-96 group-hover:duration-1000">
              <li className="flex w-11/12 mx-auto my-2 items-center rounded-md py-2 px-5 gap-5 duration-100 hover:duration-100 hover:bg-gray-800">
                <CircleSVG />
                <p className="font-normal text-white">teste</p>
              </li>
              <li className="flex w-11/12 mx-auto my-2 items-center rounded-md py-2 px-5 gap-5 duration-100 hover:duration-100 hover:bg-gray-800">
                <CircleSVG />
                <p className="font-normal text-white">teste</p>
              </li>
            </ul>
          </Link>
        </div>
        <Link to="/chamada">
          <li className="flex w-11/12 mx-auto my-2 items-center rounded-md py-2 px-5 gap-5 duration-100 hover:duration-100 hover:bg-gray-800">
            <AgendTabSVG />
            <p className="font-normal text-white">Chamada</p>
          </li>
        </Link>
      </ul>
    </header>
  );
}
