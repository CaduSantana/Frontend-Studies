import React from "react";
import Image from "next/image";
import Controle from "../public/images/controle.svg";

const SecondPage = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-evenly items-center text-white mx-auto w-full h-screen">
      <div className="flex flex-col text-center md:text-left md:mb-72">
        <h1 className="text-6xl md:mr-8 text-rub-purple">
          Controle seu
          <br /> dinheiro{" "}
        </h1>
        <p className="text-xl md:text-3xl mx-10 md:mx-0 text-left mt-10">
          Use o RubBank para analisar suas transações
          <br /> nativamente.
        </p>
      </div>
      {/* <img src='http://placekitten.com/515/515' height={'80vh'} alt='kitten' /> */}
      <Image
        src="/images/controle.svg"
        alt="Controle"
        width={515}
        height={515}
        className=" right-0 w-[205px] h-[205px] md:w-[515px] md:h-[515px]"
      />
    </div>
  );
};

export default SecondPage;
