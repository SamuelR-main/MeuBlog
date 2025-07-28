import axiom from '../../assets/Screenshot_1.png'

function Conquistas(){
    return(
        <div className="flex flex-col items-center">
            <header className="bg-violet-900 w-full xl:max-w-7xl text-center text-white">Conquistas</header>
            <div className="bg-violet-900 w-full xl:max-w-7xl h-[1200px]">
                <div className="border-solid border-white border-5 rounded-xl w-[150px] h-[150px]">
                <img src={axiom} alt="" className='w-[100px] h-[100px]'/></div>
            </div>
        </div>
    )
}

export default Conquistas;
