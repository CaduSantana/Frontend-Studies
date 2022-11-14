import React from "react";
import Appstore from '../public/images/appstore.svg'
import Playstore from '../public/images/Play_store.svg'
import QR from '../public/images/qr.svg'
import Mulher from  '../public/images/mulher.svg'

const NinthPage = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-center items-center text-white px-20vw mx-auto bg-rub-purple '>
            <div className='flex flex-col px-5 justify-center items-center mx-auto'>
                <h1 className='text-[6vh] text-rub-dark-purple'>Junte-se a nós!</h1>
                <p className='text-[20px]'>Baixe o aplicativo clicando nos botões abaixo:</p><br/>
                    {/* <button className='px-4 py-2 rounded-full bg-gradient-to-r from-rub-purple to-rub-dark-blue text-xl sm:text-center w-[240px] h-[70px] font-semibold text-[18px]'>Android</button> */}
                    <Appstore className=''/><br/>
                    {/* <button className='px-4 py-2 rounded-full bg-gradient-to-r from-rub-purple to-rub-dark-blue text-xl sm:text-center w-[240px] h-[70px] font-semibold text-[18px]'>iOS</button>  */}
                    <Playstore className=''/><br/>
                    

                <p className='text-[20px]'>Ou escaneie nosso código QR:</p><br/>
                <QR />
            </div>
            <Mulher className='hidden md:block'/>
            
            {/* <img src='http://placekitten.com/515/515' height={'80vh'} alt='kitten' /> */}
        </div>
    )
}

export default NinthPage;