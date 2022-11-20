import React from "react";
import Onda from "../public/images/onda.svg";
import Image from "next/image";
const ThirdPage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse  justify-between text-white bg-rub-dark-purple mx-auto h-screen w-full relative">
        <div className="flex flex-col md:mt-32 mx-14 mt-10  md:w-6/12">
          <h1 className="text-4xl text-center md:text-left md:text-7xl text-rub-purple">
            Sem defeitos
          </h1>
          <p className="text-xl md:text-3xl">
            <br />
            Nossa estrutura foi testada de várias formas, com industriais.
            <br />
            Novas versões e atualizações são automáticas, sem necessidade de
            você se importar com isso.
          </p>
        </div>

        <Image
          src="/images/mulher_app.svg"
          alt="Mulher com celular"
          width={675}
          height={586}
          className="md:w-6/12 w-full b-0 md:h-full  transform -scale-x-100  object-cover object-center"
        />

        <Image
          src="/images/onda.svg"
          width={675}
          height={200}
          alt=""
          className="bottom-0 absolute z-10 w-full"
        />
      </div>

      {/* Wave footer */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9340ff" fill-opacity="1" d="M0,224L48,202.7C96,181,192,139,288,133.3C384,128,480,160,576,170.7C672,181,768,171,864,170.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}

      {/* <img src='http://placekitten.com/1920/300' alt='kitten' /> */}
      {/* Onda should start at the bottom of the previous image */}
    </>
  );
};

export default ThirdPage;
