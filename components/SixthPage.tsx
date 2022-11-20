import React from "react";
import Pizza from "../public/images/pizza_rub.svg";

const SixthPage = () => {
  return (
    <div className="flex flex-col md:flex-row mx-auto justify-center items-center w-full h-screen">
      <div className="flex flex-col justify-center items-center text-white p-6 text-center">
        <h1 className="content-center text-2xl md:text-5xl my-10 mx-2 font-medium  text-rub-purple">
          Suas transações na palma da sua mão
        </h1>
        <p className="text-xl mx-3  md:text-3xl">
          Acesse seu extrato de qualquer conta com facilidade.
        </p>
        <br />
        <br />

        <Pizza className="my:10 md:w-[300px] md:h-[300px]" />
      </div>
    </div>
  );
};

export default SixthPage;
