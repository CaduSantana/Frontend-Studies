import React from "react";

const SeventhPage = () => {
    return(
        <div className='flex flex-col md:flex-row mx-auto justify-between items-center py-32 px-10vw'>
            <div className='flex flex-col justify-center items-center text-white p-6 mx-auto'>
                <h1 className='content-center text-[5.5vh] text-rub-purple'>Totalmente digital</h1>
                <img src="http://placekitten.com/240/240" alt="kitten" />
                <p className='text-[20px]'>Esqueça filas, atendentes, <i>commuting</i>, gerentes e problemas: Todos nossos serviços são automatizados, sem a necessidade de sair de casa ou revelar sua situação financeira para terceiros.</p>
            </div>
        </div>
    )
}

export default SeventhPage;