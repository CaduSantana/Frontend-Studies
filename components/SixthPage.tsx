import React from "react";
import Pizza from '../public/images/pizza_rub.svg'

const SixthPage = () => {
    return(
        <div className='flex flex-col md:flex-row mx-auto justify-center items-center py-32 px-20vw'>
            <div className='flex flex-col justify-center items-center text-white p-6'>
                <h1 className='content-center text-[5.5vh] text-rub-purple'>Suas transações na palma da sua mão</h1>
                <p className='text-[20px]'>Acesse seu extrato de qualquer conta com facilidade.</p>
                <br /><br />

                <Pizza className='' />
            </div>
        </div>
    )
}

export default SixthPage;