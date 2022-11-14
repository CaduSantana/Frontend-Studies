import React from "react";
import Maps from '../public/images/maps.svg'

const Contato = () => {
    return (
        <div className='flex flex-col md:flex-row-reverse mx-auto justify-center items-center py-32 px-20vw'>
            <div className='flex flex-col justify-center items-center text-white p-6'>
                <h1 className='content-center text-[5.5vh] text-rub-purple'>Contato</h1>
                <ul className='text-[20px]'>
                    <li>
                        19060-050
                    </li>
                    <li> 
                        Rua João Gonçalves Fóz - 1147, Sala 01
                    </li>
                    <li>
                        contato@rubbank.com
                    </li>
                </ul><br /><br />
                <button className='px-8 py-2 rounded-full bg-gradient-to-r from-rub-purple to-rub-dark-blue text-xl sm:text-center w-[240px] h-[70px] font-semibold text-[18px]'>Adquira já</button>
            </div>
            <Maps className='hidden md:block'/>

        </div>
        
    )
}

export default Contato;