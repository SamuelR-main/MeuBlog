import { BrowserRouter, Links, Route, Routes } from "react-router-dom";
import Home1 from "../pages/home/home1";
import Homepage from "../pages/home/homepage";

function rotas(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home1 />}></Route>
            <Route path="/paletas" element={< Homepage/>}></Route>
        </Routes>
    </BrowserRouter>
    )
}

export default rotas;