import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"
import { Turmas } from "./pages/Turmas"
import { Alunos } from "./pages/Alunos"
import { Chamada } from "./pages/Chamada"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Turmas />} />
        <Route path="/alunos" element={<Alunos />} />
        <Route path="/chamada" element={<Chamada />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
