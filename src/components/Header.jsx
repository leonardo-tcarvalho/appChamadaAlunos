import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="flex items-center w-full h-24 py-2 px-10 bg-gray-900">
            <ul className="flex gap-2">
                <Link to="/">
                    <li className="rounded-md bg-gray-800 p-2 hover:bg-gray-700 duration-100 hover:-translate-y-1 hover:duration-100">
                        <p className="text-white">Turma</p>
                    </li>
                </Link>
                <Link to='/alunos'>
                    <li className="rounded-md bg-gray-800 p-2 hover:bg-gray-700 duration-100 hover:-translate-y-1 hover:duration-100">
                        <p className="text-white">Alunos</p>
                    </li>
                </Link>
                <Link to='/chamada'>
                    <li className="rounded-md bg-gray-800 p-2 hover:bg-gray-700 duration-100 hover:-translate-y-1 hover:duration-100">
                        <p className="text-white">Chamada</p>
                    </li>
                </Link>
            </ul>
        </header>
    )
}