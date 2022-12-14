import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo2 from "../public/images/logo2.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  // useEffect(() => {
  //     const changeColor = () => {
  //         if (window.scrollY >= 80) {
  //             setColor('#ffffff');
  //             setTextColor('#000000');
  //         } else {
  //             setColor('transparent');
  //             setTextColor('white');
  //         }
  //         window.addEventListener('scroll', changeColor);
  //     };
  // })

  return (
    <div className="fixed left-0 top-0 w-full z-50 ease-in duration-300 bg-rub-darker-blue">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          {/* <h1 style={{color: `${textColor}`}} className='font-bold text-4xl'><span className={'text-rub-purple'}>Rub</span><span className='font-thin'>Bank</span></h1> */}
          <Logo2 />
        </Link>
        <ul
          style={{ color: `${textColor}` }}
          className="hidden sm:flex font-semibold"
        >
          <li className="p-4 text-2xl text-rub-purple hover:underline">
            <Link href="#FirstPage">O RubBank</Link>
          </li>
          <li className="p-4 text-2xl text-rub-purple hover:underline">
            <Link href="#FifthPage">Para você</Link>
          </li>
          <li className="p-4 text-2xl text-rub-purple hover:underline">
            <Link href="#Contato">Contato</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `#260e69` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `#9340ff` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-rub-purple/90 text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-rub-purple/90 text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              {/* <Link href='/#RubBank'>O RubBank</Link> */}
              <Link href="#FirstPage">O RubBank</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="#FifthPage">Para você</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="#Contato">Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
