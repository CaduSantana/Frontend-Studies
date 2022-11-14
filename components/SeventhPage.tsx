import React from "react";
import Multi from '../public/images/multi_rub.svg'

const SeventhPage = () => {
    return(
        <div className='flex flex-col md:flex-row mx-auto justify-between items-center py-32 px-10vw'>
            <div className='flex flex-col justify-center items-center text-white p-6 mx-auto'>
                <h1 className='content-center text-[5.5vh] text-rub-purple'>Totalmente digital</h1><br/><br/>
                <Multi /><br/><br/>
                <p className='text-[20px]'>Esqueça filas, atendentes, <i>commuting</i>, gerentes e problemas: Todos nossos serviços são automatizados, sem a necessidade de sair de casa ou revelar sua situação financeira para terceiros.</p>
            </div>
        </div>
    )
}

export default SeventhPage;