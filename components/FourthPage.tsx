import React from "react";
import Negocio from '../public/images/negocio.svg'

const FourthPage = () => {
    return (
        <div className='flex flex-col md:flex-row mx-auto justify-between items-center py-32 px-20vw'>
            <div className='flex flex-col justify-center items-center text-white p-6'>
                <h1 className='content-center text-[5.5vh] text-rub-purple'>Construir seu negócio é fácil</h1>
                <p className='text-[20px]'>RubBank introduz a criação simples e direta de contas para qualquer usuário, com CNPJ ou não. <br />
                Você pode organizar tais contas como quiser.</p>
            </div>
            {/* <img src='http://placekitten.com/460/460' alt='kitten' /> */}
            <Negocio className='w-[210px] md:w-[460px]'/>

        </div>
    )
}

export default FourthPage;