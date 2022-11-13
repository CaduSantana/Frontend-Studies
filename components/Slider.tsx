import React, {useState} from "react";
import Image from "next/image";
import {FaArrowCircleRight, FaArrowCircleLeft} from "react-icons/fa";

const Slider = ({slides}:any) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div id='gallery' className='max-w-[1240px] mx-auto'>
            <h1 className='text-2xl font-bold text-center p-4'>Slider</h1>
            <div className='relative flex justify-center p-4'>

            <div>
                {slides.map((slide:any, index:any) => {
                    return (
                        <div key={index} className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>
                        
                            <FaArrowCircleLeft  className='absolute top-[50%] left-[30px] text-4xl text-white/70 cursor-pointer select-none z-[2]' onClick={prevSlide} />
                            
                            {index === current && (<Image src={slide.image} width='1440' height='600' objectFit='cover' alt={slide.alt} key={index} />)}
                            
                            <FaArrowCircleRight className='absolute top-[50%] right-[30px] text-4xl text-white/70 cursor-pointer select-none z-[2]' onClick={nextSlide} />
                        </div>
                        
                        
                    );
                })}
            </div>
            </div>
        </div>
    );
}

export default Slider;