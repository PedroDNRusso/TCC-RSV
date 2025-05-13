# TCC (Trabalho de Conclusão de Curso)
Em processo de desenvolvimento

## Integrantes
* Pedro Duarte

## Instituição e Curso

Projeto desenvolvido com o intuito educacional dos alunos de Desevolvimento de Sistemas - SENAI Jaguariúna 

## Ideia do Projeto e Metodologia

Loja de venda de discos online, com carrinho e função de vender seus proprios discos. A metodologia seguida no projeto sera a XP.

## Como testar 

1. Configure o ambiente de desenvolvimento com as seguintes ferramentas.

- [VsCode](https://code.visualstudio.com/)
- [XAMPP](https://www.apachefriends.org/pt_br/index.html)
- [Git](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org/pt)

2. Após a instalação das ferramentas siga esse passo para clonar o repositorio e testa-ló.

- Copie o codigo HTTP no GitHub do repositorio que queira testar, abra o Git Bash em sua area de trabalho e coloque o seguinte codígo

```bash
git clone <https://url>
```

- Agora com o repositorio clonado, entre nela com o seguinte comando

```bash
cd <nomedoarquivo>
```

- Agora dentro do arquivo clonado pelo Git Bash, digite esse comando para abri-lo no VsCode

```bash
code .
```

- Com o arquivo aberto no VsCode, abra o CMD (CRTL+"), e coloque os seguinte comandos na ordem que aparecem logo abaixo

```bash
cd api
npm i prisma -g
npm init -y
npm i express cors dotenv
npx prisma init --datasource-provider mysql
```

- Apos colocar os comandos em ordem no CMD crie um pasta chamada .env (caso os comandos dados ja tenham criado não será necessario)

```bash
DATABASE_URL="mysql://root@localhost:3306/discohouse?schema=public&timezone=UTC"
```

- Faremos a migração do banco de dados para o MySQL através do comando a seguir no terminal

```bash
npx prisma migrate dev --name init
```

## Requisitos funcionais 
- [RF001] O sistema deve permitir o CRUD de clientes.
- [RF002] O sistema deve permitir que a compra de disco.
- [RF002.1] O sistema deve permitir o cliente adicionar mais de um produto no carrinho.
- [RF002.2] O sistema deve permitir o cliente retirar mais de um produto no carrinho.
- [RF003] O sistema deve permitir o CRUD de fornecedores.

## Tecnologias Utilizadas para o Desenvolvimento

| Linguagens e Ferramentas  | Funcionalidade |
| ------------- |:-------------:|
| [HTML](https://html.spec.whatwg.org/multipage/) | Modelo     |
| [CSS](https://www.w3.org/Style/CSS/Overview.en.html)    | Visão |
| [JavaScript (Vanilla)](https://262.ecma-international.org/)  | Controle |
| [ORM Prisma](https://262.ecma-international.org/)  | Ferramenta de source que auxilia banco de dados |
| [Vscode](https://code.visualstudio.com/)    | IDE (Ambiente integrado de desenvolvimento) |
| [Insomnia](https://insomnia.rest/download)   | Testar, criar e simular APIs |
| [NodeJS](https://nodejs.org/pt)    | Interpretar codigos em JavaScript (Vanilla) |
| [XAMPP](https://www.apachefriends.org/pt_br/index.html)    | Software que gera um servidor web local (Banco de Dados) |
| [Git](https://git-scm.com/downloads)    | Ferramenta colaborativa de versionamento |

## Github dos Desenvolvedores

* [Pedro Duarte](https://github.com/PedroDNRusso)

## Github dos Professores

* [Wellington Fábio de Oliveira Martins](https://github.com/wellifabio)
* [Lucas Paiva](https://github.com/lucasPaiva00)
* [Luís Fernando](https://github.com/luisfernandospoljaric)
* [Reenye Lima](https://github.com/ReenyeLima)
* [Robson Souza](https://github.com/robsonbsouzaa)

## Canvas e Cronograma

* [Canvas](https://wellifabio.github.io/canvas/)
* [Cronograma](https://wellifabio.github.io/gantt/)

## Wireframes

![Wireframe01](./docs/Wireframe01.PNG)
![Wireframe02](./docs/Wireframe02.PNG)
![Wireframe03](./docs/Wireframe03.png)
![Wireframe04](./docs/Wireframe04.png)

## Progresso de Desenvolvimento

| Data  | Alterações |
| ------------- |:-------------:|
| 03/05/2025     | Começo do Projeto     |
| 04/05/2025     | Desenvolvimento de Pagina Inicial e Cadastro (Front-End)    |
| 05/05/2025 | Desenvolvimento Pagina de Produtos (Front-End)     |
| 06/05/2025 | Pagina de Produtos concluida, inicio do desenvolvimento de "Carrinho"    |
| 07/05/2025 | Pagina de Carrinho Pronta (Front-End), desenvolvendo pagina "Finalizar Compra"    |
| 12/05/2025 | Desenvolvendo API para cadastro com ORM Prisma    |
| 13/05/2025 | API para cadastro funcional com ORM Prisma    |

## Desenvolvido por Pedro Duarte