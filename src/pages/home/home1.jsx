import planetbase from "../../assets/spr-planet.png"
import { Link } from 'react-router-dom'

function Home1(){
    return(
        <div className="flex w-full h-full items-center justify-center">
            <div className="flex flex-row flex-wrap w-[80%] h-[80%] justify-evenly">
                <div className="flex w-[750px] h-[750px] hover:cursor-pointer hover:border-4 hover:border-white items-center justify-center flex-col text-7xl text-white"><Link to="/paletas"><img src={planetbase} alt="" /><p>Paletas</p></Link></div>
                <div className="flex w-[750px] h-[750px] hover:cursor-pointer hover:border-4 hover:border-white items-center justify-center flex-col text-7xl text-white"><Link to="/"><img src={planetbase} alt="" /><p>Universe</p></Link></div>
                <div className="flex w-[750px] h-[750px] hover:cursor-pointer hover:border-4 hover:border-white items-center justify-center flex-col text-7xl text-white"><Link to="/tarefas"><img src={planetbase} alt="" /><p>Tarefas</p></Link></div>
                <div className="flex w-[750px] h-[750px] hover:cursor-pointer hover:border-4 hover:border-white items-center justify-center flex-col text-7xl text-white"><Link to="/jsprojects"><img src={planetbase} alt="" /><p>JS Projects</p></Link></div>
                <div className="flex w-[750px] h-[750px] hover:cursor-pointer hover:border-4 hover:border-white items-center justify-center flex-col text-7xl text-white"><Link to="/achivements"><img src={planetbase} alt="" /><p>Achivements</p></Link></div>
                <div className="flex w-[750px] h-[750px] hover:cursor-pointer hover:border-4 hover:border-white items-center justify-center flex-col text-7xl text-white"><Link to="/info"><img src={planetbase} alt="" /><p>Info</p></Link></div>
                <div className="flex w-[750px] h-[750px] hover:cursor-pointer hover:border-4 hover:border-white items-center justify-center flex-col text-7xl text-white"><img src={planetbase} alt="" /><p>Blog</p></div>
                <div className="flex w-[750px] h-[750px] hover:cursor-pointer hover:border-4 hover:border-white items-center justify-center flex-col text-7xl text-white"><img src={planetbase} alt="" /><p>Blog</p></div>
                <div className="flex w-[750px] h-[750px] hover:cursor-pointer hover:border-4 hover:border-white items-center justify-center flex-col text-7xl text-white"><img src={planetbase} alt="" /><p>Blog</p></div>
                <div className="flex w-[750px] h-[750px] hover:cursor-pointer hover:border-4 hover:border-white items-center justify-center flex-col text-7xl text-white"><img src={planetbase} alt="" /><p>Blog</p></div>
                <div className="flex w-[750px] h-[750px] hover:cursor-pointer hover:border-4 hover:border-white items-center justify-center flex-col text-7xl text-white"><img src={planetbase} alt="" /><p>Blog</p></div>
                <div className="flex w-[750px] h-[750px] hover:cursor-pointer hover:border-4 hover:border-white items-center justify-center flex-col text-7xl text-white"><img src={planetbase} alt="" /><p>Blog</p></div>
                <div className="flex w-[750px] h-[750px] hover:cursor-pointer hover:border-4 hover:border-white items-center justify-center flex-col text-7xl text-white"><img src={planetbase} alt="" /><p>Blog</p></div>
                <div className="flex w-[750px] h-[750px] hover:cursor-pointer hover:border-4 hover:border-white items-center justify-center flex-col text-7xl text-white"><img src={planetbase} alt="" /><p>Blog</p></div>
                <div className="flex w-[750px] h-[750px] hover:cursor-pointer hover:border-4 hover:border-white items-center justify-center flex-col text-7xl text-white"><img src={planetbase} alt="" /><p>Blog</p></div>
            </div>
        </div>
    )
}
export default Home1;
