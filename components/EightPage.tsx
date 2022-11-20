import React from "react";

const EightPage = () => {
  return (
    <div className="flex flex-col md:flex-row mx-auto justify-between items-center w-full h-screen text-white">
      <div className="oval h-5/6 w-full mx-auto my-1 bg-rub-purple flex flex-col items-center justify-center relative space-y-3">
        <h1 className="font-bold text-6xl my-6 top-0 absolute">Problemas</h1>
        <p className="content-center text-2xl">
          Ter que sair de casa
          <br />
          Ter que falar com gerente para resolver problemas
          <br />
          Ter mais de uma conta
          <br />
          Poder visualizar transações
          <br />
          Cadastros complicados
          <br />
          Baixo desempenho de app de banco
          <br />
          Sentir-se inseguro
          <br />
          Ter que aprender a usar o app no PC e celular
        </p>
      </div>
      <div className="oval h-5/6 w-full mx-auto  bg-rub-dark-purple flex flex-col items-center justify-center relative">
        <h1 className="font-bold top-0 absolute text-6xl my-6">Soluções</h1>
        <ol type="1" className="text-2xl space-y-3">
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
