import React from "react";
import Image from "next/image";
import Iphone from "../public/images/iphone.svg";

const Hero = ({heading, message}:any) => {
    return (
        <div className="flex items-center justify-left h-screen mb-12 bg-fixed bg-center bg-cover  bg-rub-darker-blue">
            {/* Overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-rub-darker-blue/70 z-[2]'/>
            <div className='p-5 text-white z-[2] mt-[-10rem] '>
                <div className='grid grid-cols-1 md:grid-cols-2'>{/* <h2 className='text-5xl font-bold '>{heading}</h2> */}

                <p className='py-5 text-3xl'>{message}</p>
                <div className='top-[300px] right-[30px]'>
                    <Iphone className='height:2000'/>
                </div>
                </div>
                
                <button className='px-8 py-2 rounded-full bg-gradient-to-r from-rub-purple to-rub-dark-blue text-xl sm:text-center'>Adquira já</button>

            </div>
        </div>
    );
    };

export default Hero;