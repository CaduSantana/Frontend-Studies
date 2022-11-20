import React from "react";
import Image from "next/image";
import Negocio from "../public/images/negocio.svg";

const FourthPage = () => {
  return (
    <div className="flex flex-col md:flex-row mx-auto justify-evenly items-center w-full h-screen ">
      <div className="flex flex-col   text-white m-6">
        <h1 className=" md:text-7xl text-center md:text-left text-4xl text-rub-purple">
          Construir seu <br />
          negócio é fácil
        </h1>
        <p className="text-xl md:text-3xl">
          <br />
          RubBank introduz a criação simples e <br />
          direta de contas para qualquer usuário, com CNPJ ou não. <br />
          <br />
          Você pode organizar tais contas como quiser.
        </p>
      </div>
      {/* <img src='http://placekitten.com/460/460' alt='kitten' /> */}
      <Image
        src="/images/negocio.svg"
        alt="Negocio"
        width={515}
        height={515}
        className=" right-0 w-[205px] h-[205px] md:w-[515px] md:h-[515px]"
      />
    </div>
  );
};

export default FourthPage;
