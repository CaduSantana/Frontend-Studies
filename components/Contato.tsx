import React from "react";

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
                </ul>
            </div>
            <img src='http://placekitten.com/460/460' alt='kitten' />

        </div>
        
    )
}

export default Contato;