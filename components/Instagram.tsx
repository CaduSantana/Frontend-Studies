import React from "react";
import IgImg1 from "../public/images/ig-img-1.jpeg";
import IgImg2 from "../public/images/ig-img-2.jpeg";
import IgImg3 from "../public/images/ig-img-3.jpeg";
import IgImg4 from "../public/images/ig-img-4.jpeg";
import IgImg5 from "../public/images/ig-img-5.jpeg";
import IgImg6 from "../public/images/ig-img-6.jpeg";
import InstagramImg from "./InstagramImg";


const Instagram = () => {
    return (
        <div className='max-w-[1240px] mx-auto text-center py-24'>
            <p className='text-2xl font-bold'>Siga-nos no Instagram!</p>
            <p className='pb-4'>@RubBank</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
                <InstagramImg socialImage={IgImg1} />
                <InstagramImg socialImage={IgImg2} />
                <InstagramImg socialImage={IgImg3} />
                <InstagramImg socialImage={IgImg4} />
                <InstagramImg socialImage={IgImg5} />
                <InstagramImg socialImage={IgImg6} />
            </div>
        </div>
    )
}

export default Instagram;