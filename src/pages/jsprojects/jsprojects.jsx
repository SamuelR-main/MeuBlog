import tipsArt from "../../assets/tips.png"
import temp_1 from "../../assets/temp_1.png"
import temp_2 from "../../assets/temp_2.png"

import { Link } from 'react-router-dom'
import { useState } from "react";

function JSprojects(){
        const [temp_img1, settemp_img1] = useState(temp_2)
    function changeImage(){
        settemp_img1(temp_1)
    }
    return(
        <div className="flex flex-col w-full min-h-[1000px] h-full items-center bg-gray-900">
            <div className="flex flex-row flex-wrap xl:w-6xl w-full bg-amber-200 min-h-[1200px] h-full p-[100px] justify-around">
                <Link to="/jsprojects/tips"><div className="flex flex-col bg-white rounded-4xl w-[150px] h-[150px] items-center justify-center hover:cursor-pointer hover:border-3 hover:border-solid hover:border-amber-100 hover:w-[170px] hover:h-[170px]"><img src={tipsArt} alt="Tips Calculator" className="w-[80%] h-[80%]"/><p>Tips Calculator</p></div></Link>
                <Link to="/jsprojects/temperature"><div className="flex flex-col bg-white rounded-4xl w-[150px] h-[150px] items-center justify-center hover:cursor-pointer hover:border-3 hover:border-solid hover:border-amber-100 hover:w-[170px] hover:h-[170px]"><img src={temp_2} alt="Tips Calculator" className="w-[80%] h-[80%]" onTouchMove={changeImage}/><p>Temperature Convert</p></div></Link>
                <div className="flex flex-col bg-white rounded-4xl w-[150px] h-[150px]"></div>
                <div className="flex flex-col bg-white rounded-4xl w-[150px] h-[150px]"></div>
                <div className="flex flex-col bg-white rounded-4xl w-[150px] h-[150px]"></div>
                <div className="flex flex-col bg-white rounded-4xl w-[150px] h-[150px]"></div>
                <div className="flex flex-col bg-white rounded-4xl w-[150px] h-[150px]"></div>
                <div className="flex flex-col bg-white rounded-4xl w-[150px] h-[150px]"></div>
            </div>
        </div>
    )
}

export function Tips1(){
    const [pagamento, setPagamento] = useState(0);
    const [porcentagem, setPorcentagem] = useState(0);
    const [gojeta, setGojeta] = useState(0);

    function calcGojeta(){
        const valor = (pagamento * porcentagem) / 100;
        setGojeta(valor);
    }

    return(
        <div className="flex flex-col w-full h-full items-center justify-center justify-items-center pt-10">
            <div className="flex flex-col xl:w-6xl w-full h-auto items-center justify-center justify-items-center">
                <div className="flex w-3xl h-[500px] bg-white rounded-4xl">
                    <div className="flex flex-col w-full items-center text-center">
                        <h1 className="">Calculador de Gojetas</h1>
                        <p>Coloque o valor do pagamento, e selecione a porcentagem da gojeta</p>
                        <p>Valor do Pagamento:</p>
                        <input type="number" placeholder="Digite aqui..." value={pagamento} onChange={(e) => setPagamento(Number(e.target.value))}/>
                        <p>Porcetagem:</p>
                        <input type="number" placeholder="Digite aqui..." value={porcentagem} onChange={(e) => setPorcentagem(Number(e.target.value))}/>
                        <button type="button" className="bg-green-500" onClick={calcGojeta}>Calcular</button>
                        <p>Valor: ${gojeta.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export function Temperature(){

    return(
        <div>

        </div>
    )
}

export default JSprojects;