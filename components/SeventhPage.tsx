import React from "react";
import Multi from "../public/images/multi_rub.svg";

const SeventhPage = () => {
  return (
    <div className="flex flex-col md:flex-row mx-auto justify-between items-center w-full h-screen">
      <div className="flex flex-col justify-center items-center text-white p-6 mx-auto text-center">
        <h1 className="content-center text-2xl md:text-5xl font-medium  text-rub-purple">
          Totalmente digital
        </h1>
        <br />
        <Multi className="w-[150px] h-[161px] md:w-[300px] md:h-[300px] md:my-6" />
        <br />
        <p className="text-2xl md:mx-14 text-left md:text-center md:text-3xl">
          Esqueça filas, atendentes, <i>commuting</i>, gerentes e problemas:
          Todos nossos serviços são automatizados, sem a necessidade de sair de
          casa ou revelar sua situação financeira para terceiros.
        </p>
      </div>
    </div>
  );
};

export default SeventhPage;
