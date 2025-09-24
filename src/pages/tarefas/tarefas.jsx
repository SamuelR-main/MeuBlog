function Tarefas(){
    return(
        <div className="flex flex-col items-center justify-items-center">
            <div className="flex flex-row w-full h-[80px] xl:w-7xl bg-blue-600 rounded-4xl justify-center items-center">
                <button className="flex w-[50px] h-[50px] items-center justify-center justify-items-center text-white text-center text-[30px] hover:cursor-pointer hover:bg-white hover:rounded-4xl hover:text-blue-600"><p>+</p></button>
            </div>
            <div className="flex flex-col w-full h-[2000px] xl:w-7xl bg-amber-200">
                <p className="" id="visor">aaaa</p>
            </div>
        </div>
    )
}

export default Tarefas;