import React, { useState } from 'react';

function Circle(){
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive);
    };
    return(
        <>
        <div id="button" className={`flex rounded-[100px] w-[200px] h-[200px] bg-sky-400 hover:cursor-pointer items-center justify-center text-[20px]${isActive ? 'hidden' : 'flex'}`} onClick={handleClick}>
            <span className="material-symbols-outlined text-[13px]">menu</span>
        </div>
        <div id="menuroxo" className={`bg-purple-300 w-[300px] h-[600px] transition-all duration-300 ${isActive ? 'flex' : 'hidden'}`}>
            <span className="material-symbols-outlined text-[13px]" onClick={handleClick}>menu</span>
        </div>
        </>
    )
}

export default Circle;