import { BrowserRouter, Links, Route, Routes } from "react-router-dom";
import Home1 from "../pages/home/home1";
import Paletas from "../pages/paletas/paletas";
import Tarefas from "../pages/tarefas/tarefas";
import JSprojects, { Temperature, Tips1 } from "../pages/jsprojects/jsprojects";
import InfoPage, { JavaInfo } from "../pages/info/info";

function rotas(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home1 />}></Route>
            <Route path="/paletas" element={< Paletas/>}></Route>
            <Route path="/tarefas" element={< Tarefas/>}></Route>
            <Route path="/jsprojects" element={< JSprojects/>}></Route>
            <Route path="/jsprojects/tips" element={<Tips1 />}></Route>
            <Route path="/jsprojects/temperature" element={<Temperature />}></Route>
            <Route path="/info" element={<InfoPage />}></Route>
            <Route path="/info/javainfo" element={<JavaInfo />}></Route>
        </Routes>
    </BrowserRouter>
    )
}

export default rotas;