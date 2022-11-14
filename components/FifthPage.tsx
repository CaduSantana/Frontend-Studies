import React from "react";
import OneToN from '../public/images/1n_rub.svg'

const FifthPage = () => {
    return(
        <div className='flex flex-col md:flex-row mx-auto justify-center items-center py-32 px-20vw'>
            <div className='flex flex-col justify-center items-center text-white p-6'>
                <OneToN />
                <h1 className='content-center text-[5.5vh] py-10  text-rub-purple'>Um usuário, várias contas</h1>
                <p className='text-[20px]'>Organize suas finanças como quiser, quando quiser, sem burocracia.</p>
            </div>
        </div>
    )
}

export default FifthPage;