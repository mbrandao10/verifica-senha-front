# verifica-senha-front

## 1. Sobre:
- Este projeto tem o seu código aberto, de forma que qualquer pessoa pode vê-lo, fazer um fork, ou updates.

- Este projeto foi desenvolvido em Angular na sua versção 13.1.4 com o objetivo de fazer validação de uma senha, e gravar essa senha em um banco de dados MongoDB;

- Este projeto contém um template onde você poderá digitar sua senha e verificar se esse senha está validada ou não.
- Para que você consiga utilizar está aplicação será necessário instalar o backend e o banco de dado desta aplicação localizada neste link: [Baixe e faça a instalação.](https://github.com/mbrandao10/verifica-senha-core/tree/feature/api-senha);

- A regra de negócio para validação da senha foi inplementada no Front-end da aplicação , então para que a senha seja validada, será necassário cumprir alguns requisitos:
  - Nove ou mais caracteres;
  - Ao menos 1 dígito;
  - Ao menos 1 letra minúscula;
  - Ao menos 1 letra maiúscula;
  - Ao menos 1 caractere especial, Considere como especial os seguintes caracteres: !@#$%^&*()-+
  - Não possuir caracteres repetidos dentro do conjunto;
- Esses requisitos estão listados no template caso tenha alguma duvida para validar sua senha.

# AVISO:
- Os testes unitarios, ainda não foram implementados nesta versão.


## 2. Instalação e configuração de ambiente:

- Instale o NodeJs, caso não tenha o node instalado, vá ate o site oficial do NodeJs ou clique no link e [Baixe e faça a instalação.](https://nodejs.org/en/download);

- Você precisará ter instalado o Angular, caso não tenha instalado na sua máquina, sica os passos:
- com o nedeJs instalado na sua maquina, abra o terminal e digite o comando  **npm install -g @angular/cli@13.1.4**

- Clone ou baixe o projeto;
- Vá até a raiz do seu projeto e instale as dependencias, com **npm install** ou só **npm i**;



## 3. Como usar?

- Para iniciar va na pasta raiz do seu projeto pelo terminal ou no terminal integrado de sua IDE e digite o comando **ng serve** 
- O projeto será iniciado na url **http://localhost:4200**
