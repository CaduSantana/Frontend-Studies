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
        src="/images/negocio_brilho.svg"
        alt="Negocio"
        width={650}
        height={650}
        className=" right-0 w-[225px] h-[225px] md:w-[650px] md:h-[650px]"
      />
    </div>
  );
};

export default FourthPage;
