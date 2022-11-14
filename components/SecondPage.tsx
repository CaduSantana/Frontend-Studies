import React from "react";

const SecondPage = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-center items-center text-white px-20vw py-32 mx-auto'>
            <div className='flex flex-col py-2 px-5'>
                <h1 className='text-[6vh] text-rub-purple'>Controle seu dinheiro </h1>
                <p className='text-[20px]'>Use o RubBank para analisar suas transações nativamente.</p>
            </div>
            <img src='http://placekitten.com/515/515' height={'80vh'} alt='kitten' />
        </div>
    )
}

export default SecondPage;