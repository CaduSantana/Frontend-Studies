import React from "react";
import Homem from '../public/images/homem.svg'

const FirstPage = () => {
    return (
        <div className='flex flex-col justify-center items-center text-white px-25vh py-32 relative'>
            <h1 className='text-[4vh] mx-auto max-w-[80vw] align-center'>
                <span className='text-rub-purple'>RubBank</span> é uma ideia para mudar a maneira de pensar um banco
            </h1>
            <Homem className='max-w-[60vw] absolute right-60 -z-10'/>

            <p className='mx-auto max-w-[80vw] py-4 text-[18px]'>Nossa aplicação foi construída visando aproximar você de seu dinheiro e de seus negócios. Com profunda experiência e conhecimento, nossa equipe garante que este é o único app que você precisa.</p>
        </div>
    )
}

export default FirstPage;