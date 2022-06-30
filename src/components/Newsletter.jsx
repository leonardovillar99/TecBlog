import React from 'react'
import { ImNewspaper } from 'react-icons/im'
import { AiOutlineMail } from 'react-icons/ai' 

export function Newsletter(){
  return (
    <section className='mt-20 w-full h-[300px] bg-gray-900 flex'>
         <div className='w-[60%] m-auto h-[220px] flex items-center justify-between'>
            <div className='leading-loose'>
                <h1 className='text-white text-3xl font-bold flex items-center gap-4'>
                    Fique sempre atualizado
                </h1>
                <span className='text-white'>
                    Preencha com seu email para receber as principais notícias do dia.
                </span>
            </div>

            <div className='flex flex-col relative'>
                <input className='outline-none w-[450px] h-10 px-8' 
                type="text" 
                placeholder='Digite seu email' 
                />
                <AiOutlineMail size={20} className='absolute left-2 top-3' />
                <button className='bg-transparent border border-white text-white font-semibold mt-3 p-1 w-36 hover:bg-white hover:text-gray-900 transition-colors'>
                    Enviar
                </button>
            </div>
         </div>
    </section>
  )
}

export default Newsletter