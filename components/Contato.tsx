import React from "react";
import Maps from '../public/images/maps.svg'
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";


const Contato = () => {
    return (
        <div id='Contato' className='flex flex-col md:flex-row-reverse mx-auto justify-center items-center w-full h-screen'>
                {/* Bellow is a footer
                <p className={'text-white text-[20px] bottom-0 absolute'}>
        © 2021 RubBank. Todos os direitos reservados.
            </p> */}
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
                    <li className="flex flex-row">
                        <a className="px-1" href='https://www.linkedin.com/company/rubbank' target='_blank' rel='noreferrer'>
                            <FaLinkedin className='text-[30px]' />
                        </a>
                        <a className="px-1" href='https://www.instagram.com/rubbank/' target='_blank' rel='noreferrer'>
                            <FaInstagram className='text-[30px]'/>
                        </a>
                        <a className="px-1" href='https://www.facebook.com/rubbank' target='_blank' rel='noreferrer'>
                            <FaFacebook className='text-[30px]'/>
                        </a>
                        <a className="px-1" href='https://twitter.com/rubbank' target='_blank' rel='noreferrer'>
                            <FaTwitter className='text-[30px]'/>
                        </a>

                    </li>
                </ul><br /><br />
                <button className='px-8 py-2 rounded-full bg-gradient-to-r from-rub-purple to-rub-dark-blue text-xl sm:text-center w-[240px] h-[70px] font-semibold text-[18px]'>Adquira já</button>
            </div>
            <Maps className='hidden md:block'/>

        </div>
        
    )
}

export default Contato;