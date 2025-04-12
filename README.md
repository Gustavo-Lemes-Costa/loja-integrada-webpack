# Loja Integrada Webpack Template

Solução para ambiente de desenvolvimento de lojas na plataforma Loja Integrada utilizando webpack.


## Primeiros passos

Clone este repositório, altere a propriedade "accountName" do package.json para o nome do domínio da lojae e o campo "filesPath" para a url de upload dos arquivos da loja. Instale as dependências e execute o comando yarn (ou npm) start para iniciar o desenvolvimento.


### Pré-requisitos

Além do node, npm ou yarn, é necessário que a loja tenha um html personalizado no cabeçalho com o seguinte código:

```
<link rel="stylesheet" href="/NOMEDALOJA.min.css" type="text/css">
```

Também é necessário que a loja tenha um html personalizado no rodapé com o seguinte código:

```
<script type="text/javascript" src="/NOMEDALOJA.min.js"></script>
```


### Instalando

```
npm install && npm run start
```

## Deployment

Para publicar suas alterações, rode o comando:

```
npm run build
```

Serão gerados dois arquivos na pasta "dist" do projeto: 

- NOMDEDALOJA.min.css
- NOMDEDALOJA.min.js

Faça o upload de ambos os arquvios para a loja integrada e está tudo pronto.


## Construído com

* [Webpack](https://webpack.js.org/)
* [Sass](https://sass-lang.com/)
* [Express](https://expressjs.com/pt-br/)


## Observações

* Inspirado no [vtex-speed](https://github.com/vtex/speed);