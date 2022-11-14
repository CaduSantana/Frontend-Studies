import React from "react";

const EightPage = () => {
    return(
        <div className='flex flex-col md:flex-row mx-auto justify-between items-center py-28 px-2vw text-white'>
            <div className='oval mx-auto px-6 py-1 bg-rub-purple flex flex-col items-center justify-center'>
                <h1 className='font-bold text-2xl py-4'>Problemas</h1>
                <p className="content-center">Ter que sair de casa<br />Ter que falar com gerente para resolver problemas<br />Ter mais de uma conta<br />Poder visualizar transações<br />Cadastros complicados<br />Baixo desempenho de app de banco<br />Sentir-se inseguro<br />Ter que aprender a usar o app no PC e celular</p>
            </div>
            <div className='oval mx-auto px-6 py-1 bg-rub-dark-purple flex flex-col items-center justify-center'>
                <h1 className='font-bold text-2xl py-4'>Soluções</h1>
                <ol type="1">
                    <li className="content-center">Banco 100% digital!</li>
                    <li className="content-center">Sem filas ou gerentes</li>
                    <li className="content-center">Criação de novas contas fácil e rápida</li>
                    <li className="content-center">Extrato atualizado com dados concretos</li>
                    <li className="content-center">Interface clara e facilidade de uso</li>
                    <li className="content-center">Implementação otimizada</li>
                    <li className="content-center">Criptografia sólida</li>
                    <li className="content-center"><i>Look and feel</i> multiplataforma</li>

                </ol>
                
            </div>
        </div>
    )
}

export default EightPage;