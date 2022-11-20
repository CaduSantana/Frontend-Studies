import React from "react";
import Image from "next/image";
import Appstore from "../public/images/appstore.svg";
import Playstore from "../public/images/Play_store.svg";
import QR from "../public/images/qr.svg";
import Mulher from "../public/images/mulher.svg";

const NinthPage = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center text-white h-screen w-full mx-auto bg-rub-purple ">
      <div className="flex flex-col justify-center items-center mx-auto">
        <h1 className="text-5xl font-semibold text-rub-dark-purple mb-3">
          Junte-se a nós!
        </h1>
        <p className="text-3xl">
          Baixe o aplicativo clicando nos botões abaixo:
        </p>
        <br />
        {/* <button className='px-4 py-2 rounded-full bg-gradient-to-r from-rub-purple to-rub-dark-blue text-xl sm:text-center w-[240px] h-[70px] font-semibold text-[18px]'>Android</button> */}
        <Appstore className="" />
        <br />
        {/* <button className='px-4 py-2 rounded-full bg-gradient-to-r from-rub-purple to-rub-dark-blue text-xl sm:text-center w-[240px] h-[70px] font-semibold text-[18px]'>iOS</button>  */}
        <Playstore className="" />
        <br />

        <p className="text-[20px]">Ou escaneie nosso código QR:</p>
        <br />
        <QR />
      </div>
      <Image
        src={"/images/mulher.svg"}
        alt="Mulher"
        width={432}
        height={649}
        className="hidden md:block md:h-full md:w-2/5 md:object-cover md:object-center"
      />
    </div>
  );
};

export default NinthPage;
