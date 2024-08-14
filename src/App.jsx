import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SideBar } from "./components/SideBar"
import { CadastrarAlunos } from "./pages/Alunos/CadastrarAlunos"
import { ListarAlunos } from "./pages/Alunos/ListarAlunos"
import { Chamada } from "./pages/Chamada"
import { CadastrarTurmas } from "./pages/Turmas/CadastrarTurmas"
import { AlterarTurmas } from "./pages/Turmas/AlterarTurmas"
import { ListarTurmas } from "./pages/Turmas/ListarTurmas"
import { ListarDocentes } from "./pages/Docentes/ListarDocentes"
import { CadastrarDocentes } from "./pages/Docentes/CadastrarDocentes"

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path='/' element={<Chamada />} />
        <Route path="/CadastrarTurmas" element={<CadastrarTurmas />} />
        <Route path="/AlterarTurmas" element={<AlterarTurmas />} />
        <Route path="/ListarTurmas" element={<ListarTurmas />} />
        <Route path="/CadastrarAluno" element={<CadastrarAlunos />} />
        <Route path="/ListarAlunos" element={<ListarAlunos />} />
        <Route path="/CadastrarDocente" element={<CadastrarDocentes />} />
        <Route path="/ListarDocente" element={<ListarDocentes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
