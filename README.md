# Rest API

[![GitHub issues](https://img.shields.io/github/issues/MSpilari/API-Test-Typeorm)](https://github.com/MSpilari/API-Test-Typeorm/issues)
[![GitHub forks](https://img.shields.io/github/forks/MSpilari/API-Test-Typeorm)](https://github.com/MSpilari/API-Test-Typeorm/network)
[![GitHub stars](https://img.shields.io/github/stars/MSpilari/API-Test-Typeorm)](https://github.com/MSpilari/API-Test-Typeorm/stargazers)
[![GitHub license](https://img.shields.io/github/license/MSpilari/API-Test-Typeorm)](https://github.com/MSpilari/API-Test-Typeorm)
![GitHub language count](https://img.shields.io/github/languages/count/MSpilari/API-Test-Typeorm)
![GitHub top language](https://img.shields.io/github/languages/top/MSpilari/API-Test-Typeorm)

![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/MSpilari/API-Test-Typeorm/express)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/MSpilari/API-Test-Typeorm/jsonwebtoken)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/MSpilari/API-Test-Typeorm/sqlite3)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/MSpilari/API-Test-Typeorm/typeorm)

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=API%20typeorm&uri=.%2FinsomniaFile.json)

## Rodando o projeto

- Para testar a Api basta clonar o repositório e iniciar o script **yarn dev**, isto abrirá rodará o servidor de desenvolvimento.

- Todas as rotas estão no arquivo do **INSOMNIA** que pode ser usado apenas clicando no botão **RUN ON INSOMNIA**

## Funcionalidades

- Autenticação
  - Rota de cadastro (Signup)
    - Coloque o email e a senha para criar um novo regisro no banco.
  - Rota de login (Login)
    - Coloque o email e a senha, previamente cadastrados, retornará um JWT(Json Web Token)

Obs: Como esse foi um projeto com fim pedagógico, apenas para conhecer melhor as tecnologias utilizadas, vale ressaltar que **NÃO encriptei as senhas salvas e nem utilizei variáveis de ambiente**.

- Rotas privadas

  - Navers
    - Show All
      - Esta rota ela mostra todos os Navers cadastrados no banco de dados
      - Aceita **query strings**, como **name, admissionDate e jobRole** para filtar a resposta da API.
    - Single Naver
      - Recebe o **id** do Naver como **parâmetro** da URL.
      - O retorno é o Naver desejado com todos os projetos que ele participa.
    - Create Naver
      - Recebe os dados através do **Body** e cria um novo naver.
    - Update Naver
      - Recebe do **Body** a atualização do naver desejado.
    - Delete Naver
      - Recebe o **id** do naver via parâmetro da URL e deleta o naver.

  - Projects
    - Show All
      - Esta rota ela mostra todos os Projects cadastrados no banco de dados
      - Aceita **query strings**, como **name, userId e naversId** para filtar a resposta da API.
    - Single Project
      - Recebe o **id** do Project como **parâmetro** da URL.
      - O retorno é o Project desejado com todos os navers participam dele.
    - Create Project
      - Recebe os dados através do **Body** e cria um novo project.
    - Update Project
      - Recebe do **Body** a atualização do Project desejado.
    - Delete Project
      - Recebe o **id** do project via parâmetro da URL e deleta o project.

## Tecnologias

- [Express](https://www.npmjs.com/package/express)
- [Typescript](https://www.npmjs.com/package/typescript)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- [Typeorm](https://www.npmjs.com/package/typeorm)
- [Sqlite3](https://www.npmjs.com/package/sqlite3)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
