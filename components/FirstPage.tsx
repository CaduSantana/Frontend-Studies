import React from "react";
import Homem from "../public/images/homem.svg";
import Image from "next/image";

const FirstPage = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white px-25vh py-32 relative w-full h-screen">
      <div className="mx-auto px-4 md:px-10">
        <h1 className="text-4xl md:text-6xl text-left md:text-center align-center">
          <span className="text-rub-purple">RubBank</span> é uma ideia para
          mudar a maneira de pensar um banco
        </h1>

        <p className=" py-4 text-xl text-left md:text-center">
          Nossa aplicação foi construída visando aproximar você de seu dinheiro
          e de seus negócios. Com profunda experiência e conhecimento, nossa
          equipe garante que este é o único app que você precisa.
        </p>
      </div>
      <Image
        src="/images/homem.svg"
        alt="Homem"
        width={500}
        height={500}
        className="absolute opacity-70 right-0 -z-10 w-[500px] h-[500px]"
      />
    </div>
  );
};

export default FirstPage;
