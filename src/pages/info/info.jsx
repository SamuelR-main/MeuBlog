import javaimg from '../../assets/java.png'
import { Link } from 'react-router-dom'

function InfoPage(){
    return (
        <div className="flex flex-col items-center w-full">
            <h1 className="flex flex-col bg-amber-50 items-center justify-center w-full pb-3">infomation</h1>
            <div className="flex flex-col bg-yellow-900 w-[1000px] h-[1000px] items-center justify-evenly">
                <div className="flex flex-row bg-yellow-700 w-[950px] h-[200px] items-end">
                    <Link to="/info/javainfo">
                        <div className="flex flex-col items-center justify-end w-[25px] h-[180px] bg-white hover:cursor-pointer hover:border-amber-300 hover:border-[2px]">
                            <img src={javaimg} alt="" className='w-[90%]'/>
                        </div>
                    </Link>
                    <div className="flex flex-row w-[25px] h-[180px] hover:bg-blue-500"></div>
                    <div className="flex flex-row w-[25px] h-[180px] hover:bg-blue-500"></div>
                    <div className="flex flex-row w-[25px] h-[180px] hover:bg-blue-500"></div>
                    <div className="flex flex-row w-[25px] h-[180px] hover:bg-blue-500"></div>
                    <div className="flex flex-row w-[25px] h-[180px] hover:bg-blue-500"></div>
                    <div className="flex flex-row w-[25px] h-[180px] hover:bg-blue-500"></div>
                    <div className="flex flex-row w-[25px] h-[180px] hover:bg-blue-500"></div>
                    <div className="flex flex-row w-[25px] h-[180px] hover:bg-blue-500"></div>
                    <div className="flex flex-row w-[25px] h-[180px] hover:bg-blue-500"></div>
                </div>
                <div className="flex flex-col bg-yellow-700 w-[950px] h-[200px]"></div>
                <div className="flex flex-col bg-yellow-700 w-[950px] h-[200px]"></div>
                <div className="flex flex-col bg-yellow-700 w-[950px] h-[200px]"></div>
            </div>
        </div>
    )
}

export function JavaInfo(){
    return(
        <div>
            <h1>Hello World!</h1>
        </div>
    )
}

export default InfoPage;
