import React from "react";
import Image from "next/image";
import Iphone from "../public/images/iphone.svg";

const Hero = ({ heading, message }: any) => {
  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center p-6  w-full h-screen md:justify-between justify-evenly my-10 md:my-20">
      <div className="mx-5 items-center text-white w-full  max-w-xl text-center md:text-left">
        <p className="text-xl md:text-8xl">
          Eficiência, robustez e praticidade
        </p>

        <button className="mt-12 md:mt-24 px-14 py-4 mx-auto rounded-full bg-gradient-to-l from-rub-purple to-rub-dark-blue text-xl font-semibold">
          Adquira já
        </button>
      </div>

      <Image
        src={"/images/iphone_brilho.svg"}
        alt="Iphone"
        width={650}
        height={650}
        className="mb-8 md:mb-0"
      />
    </div>
  );
};

export default Hero;
