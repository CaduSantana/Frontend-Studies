import React from "react";

const EightPage = () => {
  return (
    <div className="flex flex-col relative md:flex-row mx-auto justify-center items-center w-full h-screen text-white">
      <div className="oval md:h-5/6 w-full mx-auto my-1 bg-rub-purple flex flex-col items-center md:w-[40%] justify-center relative space-y-3">
        <h1 className="font-bold text-3xl md:text-6xl md:my-6 top-0">Problemas</h1>
        <ol type="1" className="md:text-2xl md:space-y-3">
          <li className="content-center">Ter que sair de casa</li>
          <li>Ter que falar com gerente para resolver problemas</li>
          <li>Ter mais de uma conta</li>
          <li>Poder visualizar transações</li>
          <li>Cadastros complicados</li>
          <li>Baixo desempenho de app de banco</li>
          <li>Sentir-se inseguro</li>
          <li>Ter que aprender a usar o app no PC e celular</li>
        </ol>
      </div>
      <div className="oval md:h-5/6 w-full mx-auto my-1 bg-rub-dark-purple flex flex-col md:w-[40%] items-center justify-center relative space-y-3">
        <h1 className="font-bold text-3xl md:text-6xl md:my-6 top-0">Soluções</h1>
        <ol type="1" className="md:text-2xl md:space-y-3">
          <li className="content-center">Banco 100% digital!</li>
          <li className="content-center">Sem filas ou gerentes</li>
          <li className="content-center">
            Criação de novas contas fácil e rápida
          </li>
          <li className="content-center">
            Extrato atualizado com dados concretos
          </li>
          <li className="content-center">
            Interface clara e facilidade de uso
          </li>
          <li className="content-center">Implementação otimizada</li>
          <li className="content-center">Criptografia sólida</li>
          <li className="content-center">
            <i>Look and feel</i> multiplataforma
          </li>
        </ol>
      </div>
    </div>
  );
};

export default EightPage;
