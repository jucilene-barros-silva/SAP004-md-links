# Markdown Links

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo da Aplicação Md-links](#2-resumo-do-projeto-aplicação-md-links)
* [3. Instalação e uso](#3-instalação)
* [3. Instalação e uso](#3-instalação-e-uso)
* [4. Roadmap](#4-Roadmap)

***

## 1. Prefácio

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação
muito popular entre os programadores. É usada em muitas plataformas que
manipulam texto (GitHub, fórum, blogs e etc) e é muito comum encontrar arquivos
com este formato em qualquer repositório (começando pelo tradicional
`README.md`).

Os arquivos `Markdown` normalmente contém _links_ que podem estar
quebrados, ou que já não são válidos, prejudicando muito o valor da
informação que está ali.

## 2. Resumo da Aplicação Md-links

É uma biblioteca que lê arquivos em linguagem de marcação Markdown e retorna os links de URLs dos links já validados e com os seus respectivos textos,poderá ser instalada pelo terminal, possuindo a sua execução na linha de comando (CLI), pode ser importada e utilizado no código.

Contém testes Jest

## 3. Uso e instalação
## 3. Instalação e Uso
### Instale e deseinstale pelo terminal
```sh
$ npm install -g jucilene-barros-silva/SAP004-md-links
```
Sistemas operacionais (Linux, MacOS) podem não funcionar com o comando citado acima, então tente com:
```sh
$ sudo npm install -g jucilene-barros-silva/SAP004-md-links
```
Caso após a utilização, se deseje retirar a biblioteca da máquina, basta digitar:
```sh
$ npm uninstall -g md-links
```
No entanto em algumas máquinas, após a instalação, o nome da pasta raiz onde a biblioteca é salva pode se alterar. Por conta disso, caso o comando acima não funcione, recomendamos que digite:
```sh
$ npm list -g --depth=0
```
Para que todas as sub-dependências do NPM sejam exibidas, e assim você consiga encontrar a pasta onde o arquivo está instalado. E após obtê-la, basta digitar:
```sh
$ npm uninstall -g <nome-da-pasta>
```
### Uso
Essa biblioteca pode ser executada diretamente do terminal ou pode ser importada para o seu código.
**NO TERMINAL**
É possivel executar através do comando:
```sh
$ md-links <caminho-do-arquivo>
```
Por exemplo:
```sh
$ md-links ./some/example.md
```
E os resultados serão exibidos no próprio terminal
```
$ md-links ./some/example.md
http://algo.com/2/3/ Link de algo
https://outra-coisa-.net/algum-doc.html algum doc
http://google.com/ Google
```
Se o texto linkado for longo, este será reduzido para 50 caracteres no máximo, para melhor visualização.
**NO CÓDIGO**
Outro modo de utilizar este módulo é importando com `require`, no qual o resultado será uma array contendo objetos com duas propriedades:
* `href`: URL
* `text`: Texto 
```js
const mdLinks = require("md-links");
mdLinks("./example.md")
  .then(links => {
    // => [{ href, text }]
  })
  .catch(console.error);
```
## 4. Roadmap

Atualmente, essa biblioteca apenas identifica os links presentes no documento Markdown. Para versões futuras, deseja-se implementar a status dos links e ler um diretório para identificar os arquivos kMarkdown.

## Autores

Projeto desenvolvido por [Jucilene Barros](https://github.com/jucilene-barros-silva/SAP004-md-links) no Bootcamp da [Laboratoria](https://github.com/laboratoria).