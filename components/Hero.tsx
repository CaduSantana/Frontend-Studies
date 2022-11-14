import React from "react";
import Image from "next/image";
import Iphone from "../public/images/iphone.svg";

const Hero = ({heading, message}:any) => {
    return (
        <div className='max-w-[1240px] mx-auto flex flex-col-reverse md:flex-row justify-between items-center p-32'>
            <div className='px-5 space-y-10 items-center text-white'>
                <p className='text-3xl'>{message}</p>        
                <button className='px-8 py-2 rounded-full bg-gradient-to-r from-rub-purple to-rub-dark-blue text-xl sm:text-center w-[240px] h-[70px] font-semibold text-[18px]'>Adquira já</button>
            </div>
            
            <Iphone className=''/>
        </div>
    );
    };

export default Hero;