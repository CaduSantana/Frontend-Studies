import React from "react";

const NinthPage = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-center items-center text-white px-20vw py-32 mx-auto bg-rub-purple '>
            <div className='flex flex-col py-2 px-5 justify-center items-center mx-auto'>
                <h1 className='text-[6vh] text-rub-dark-purple'>Junte-se a nós!</h1>
                <p className='text-[20px]'>Baixe o aplicativo clicando nos botões abaixo:</p>
                    <button className='px-4 py-2 rounded-full bg-gradient-to-r from-rub-purple to-rub-dark-blue text-xl sm:text-center w-[240px] h-[70px] font-semibold text-[18px]'>Android</button>
                    <button className='px-4 py-2 rounded-full bg-gradient-to-r from-rub-purple to-rub-dark-blue text-xl sm:text-center w-[240px] h-[70px] font-semibold text-[18px]'>iOS</button> 
                    

                <p className='text-[20px]'>Ou escaneie nosso código QR:</p>
                <img src="http://placekitten.com/240/240" alt="kitten" />
            </div>
            
            {/* <img src='http://placekitten.com/515/515' height={'80vh'} alt='kitten' /> */}
        </div>
    )
}

export default NinthPage;