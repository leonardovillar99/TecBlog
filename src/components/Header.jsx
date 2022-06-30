import React from "react";
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai'

export function Header(){
    return(
       <header className="flex w-full h-[100px] bg-gray-900">
         <div className="flex items-center justify-between w-[80%] m-auto">
            <h1 
            className="text-[28px] font-semibold cursor-pointer text-white font-poppins">
                TecNews
            </h1>

            <div className="relative">
                <input className="w-72 outline-none px-3 py-2 rounded-xl" 
                type="text" 
                placeholder="Pesquisar Tecnologia" 
                />
                <AiOutlineSearch size={24} className="absolute right-2 top-2 cursor-pointer" />
            </div>
            
            <ul className="flex items-center justify-center gap-7">
                <li className="flex">
                    <a className="text-lg block font-semibold text-white font-poppins" 
                    href="/#">Blog
                    </a>
                </li>
                <li>
                    <a className="text-lg block font-semibold text-white font-poppins" 
                    href="/#">Forum
                    </a>
                </li>
                <li>
                    <a className="text-lg block font-semibold text-gray-900 font-poppins bg-white rounded p-3 flex items-center gap-2"
                    href="/#">Contato <AiOutlinePhone size={20} />
                    </a>
                </li>
            </ul>
         </div>
       </header>
    )
}