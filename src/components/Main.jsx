import React from "react";
import { IoIosArrowDown } from 'react-icons/io'
import react from '../assets/react.png'
import js from '../assets/js.png'
import tailwind from '../assets/tailwind.png'
import GraphQL from '../assets/GraphQL.png'
import programming2 from '../assets/programming2.jpg'

export function Main(){
    return(
        <main className="min-h-full w-[80%] m-auto mt-16">
           <div className="w-full flex justify-between items-start min-h-full">

              <section className="w-[500px] h-full flex flex-col">
                <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    Tecnologias <IoIosArrowDown size={14} className="mt-2" />
                </h1>

                <div className="flex gap-2 flex-col">
                    <h2 className="text-[22px] font-semibold mb-2 mt-2 underline">As principais tecnologias do mercado</h2>
                    <img src={programming2} alt="" />
                    
                    <div className="mt-4 border-b border-gray-900">
                        <h1 className="text-2xl font-semibold">Como o blog funciona?</h1>
                        <p className="text-gray-900 font-poppins font-normal text-base py-2 pb-8" >
                            Nesse blog sobre tecnologia você irá encontrar as principais notícias sobre tecnologia em tempo real, 
                            e também poderá tirar suas dúvidas na aba de Forúm.
                        </p>
                    </div>
                </div>
              </section>
             
              <section className="w-[450px]">
                <div className="flex-col">
                    <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        Resumo <IoIosArrowDown size={14} className="mt-2" />
                    </h1>
                </div>

                <div className="flex items-center mt-3 h-[140px]">
                    <div className="flex flex-col h-[120px]">
                        <div className="flex gap-4 items-center pb-2 mt-3"> 
                            <span className="text-base font-semibold">React</span>
                            <span className="text-sm mt-[1px]">29/06/2022</span>
                        </div>

                        <p className="leading-5">
                            O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.
                        </p>

                        <a href="/#" className="w-24 mt-4 block bg-gray-900 text-white text-center p-2 font-bold hover:bg-transparent hover:border hover:border-gray-900 hover:text-gray-900 transition-colors">
                            Ler mais
                        </a>
                    </div>

                    <img 
                    className="w-[100px] object-cover"
                    src={react} 
                    alt="progrmming-languages-img" 
                    />
                </div>
                
                <div className="flex items-center mt-8 h-[180px]">
                    <div className="flex flex-col h-[120px]">
                        <div className="flex gap-4 items-center pb-2 mt-3"> 
                            <span className="text-base font-semibold">Javascript</span>
                            <span className="text-sm mt-[1px]">29/06/2022</span>
                        </div>

                        <p className="leading-5">
                            JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.
                        </p>

                        <a href="/#" className="w-24 mt-4 block bg-gray-900 text-white text-center p-2 font-bold hover:bg-transparent hover:border hover:border-gray-900 hover:text-gray-900 transition-colors">
                            Ler mais
                        </a>
                    </div>

                    <img 
                    className="w-[100px] object-cover"
                    src={js} 
                    alt="progrmming-languages-img" 
                    />
                </div>

                <div className="flex items-center mt-3 h-[180px]">
                    <div className="flex flex-col h-[120px]">
                        <div className="flex gap-4 items-center pb-2 mt-3"> 
                            <span className="text-base font-semibold">Tailwind</span>
                            <span className="text-sm mt-[1px]">29/06/2022</span>
                        </div>

                        <p className="leading-5">
                        Tailwind é um framework CSS que oferece a possibilidade de você criar layouts usando uma estrutura de CSS pronta.
                        </p>

                        <a href="/#" className="w-24 mt-4 block bg-gray-900 text-white text-center p-2 font-bold hover:bg-transparent hover:border hover:border-gray-900 hover:text-gray-900 transition-colors">
                            Ler mais
                        </a>
                    </div>

                    <img 
                    className="w-[100px] object-cover"
                    src={tailwind} 
                    alt="progrmming-languages-img" 
                    />
                </div>

                {/*<div className="flex items-center mt-3 h-[180px]">
                    <div className="flex flex-col h-[120px]">
                        <div className="flex gap-4 items-center pb-2 mt-3"> 
                            <span className="text-base font-semibold">GraphQL</span>
                            <span className="text-sm mt-[1px]">29/06/2022</span>
                        </div>

                        <p className="leading-5">
                        GraphQL é uma linguagem de consulta criada pelo Facebook em 2012 e lançada publicamente em 2015. É considerada uma alternativa para arquiteturas REST, além de oferecer um serviço runtime para rodar comandos e consumir uma API.
                        </p>

                        <a href="/#" className="w-24 mt-4 block bg-gray-900 text-white text-center p-2 font-bold hover:bg-transparent hover:border hover:border-gray-900 hover:text-gray-900 transition-colors">
                            Ler mais
                        </a>
                    </div>

                    <img 
                    className="w-[100px] object-cover mt-16"
                    src={GraphQL} 
                    alt="progrmming-languages-img" 
                    />
                </div>*/}
                
              </section>
            </div>
        </main>
    )
}