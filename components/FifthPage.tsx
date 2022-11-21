import React from "react";
import OneToN from "../public/images/1n_rub.svg";

const FifthPage = () => {
  return (
    <div id='FifthPage' className="flex flex-col md:flex-row mx-auto justify-center items-center h-screen w-full">
      <div className="flex flex-col justify-center items-center text-white ">
        <OneToN className="md:w-[300px] md:h-[300px]" />
        <h1 className="content-center text-2xl md:text-5xl my-10 font-medium  text-rub-purple">
          Um usuário, várias contas
        </h1>
        <p className="text-xl mx-10 text-center md:text-3xl ">
          Organize suas finanças como quiser, quando quiser, sem burocracia.
        </p>
      </div>
    </div>
  );
};

export default FifthPage;
