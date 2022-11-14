import React from "react";

const ThirdPage = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row-reverse justify-center items-center text-white bg-rub-dark-purple mx-auto'>
                <div className='flex flex-col py-2 px-5 max-w-[400px]'>
                    <h1 className='text-[48px] text-rub-purple'>Sem defeitos</h1>
                    <p className='text-[20px]'>Nossa estrutura foi testada de várias formas, com padrões industriais.<br />Novas versões e atualizações são automáticas, sem necessidade de você se importar com isso.</p>
                </div>
                <img src='http://placekitten.com/675/580' alt='kitten' />
            </div>

            {/* Wave footer */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9340ff" fill-opacity="1" d="M0,224L48,202.7C96,181,192,139,288,133.3C384,128,480,160,576,170.7C672,181,768,171,864,170.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}

            <img src='http://placekitten.com/1920/300' alt='kitten' />

        </>
    )
}

export default ThirdPage;