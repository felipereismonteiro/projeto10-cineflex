import TelaSelecionarFilme from "./ComponentesSelecioneOFilme/telaSelecionarFIlme"
import TelaSelecionarHorario from "./ComponentesSelecioneHorario/telaSelecionarHorario"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./ComponentesPrincipais/header"


export default function App() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<TelaSelecionarFilme />} />
                <Route path="/horarios" element={<TelaSelecionarHorario />} />
            </Routes>
        </BrowserRouter>
    )
}

