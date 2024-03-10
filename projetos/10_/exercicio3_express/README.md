# Passo a passo 1

criar pasta `frontend` para acrescentar os arquivos do projeto modelo na seção webpack

adicionar o arquivo `webpack.config.js` na raiz do projeto

copiar o que tem no arquivo `3_webpack-template/dist/index.html` e colar no carquivo correspondente em `src/views/index.ejs`
- o camilho de script do bundle continua o mesmo pois a configuração dos arquivos estaticos configura o acesso

do modelo webpck, copiar a pasta `assets`, dentro da pasta `dist`, para a pasta `public` do projeto atual

na pasta do projeto webpack, copiar o `app.js` do diretório: `src/` e copia-lo na pasta `frontend` do projeto.
- Obs.: o arquivo pode ser renomeado como `main.js` para não haver confusão com o `app.js` da raiz do projeto.

do projeto webpack, mover a pasta `assets` contendo os arquivos `css` de dentro do diretório `src` e colar dentro da pasta `frontend` do projeto atual

copiar as dependencias do arquivo `package.js` do projeto modelo webpack para o arquivo de mesmo nome do projeto atual

adicionar o script `"dev": "wabpack -w"` no arquivo `packege.json` do projeto atual

modificar o script para start do nodemon para ignorar algumas pastas relacionadas ao webpack, segue o script: `"start": "nodemon app.js --ignore public --ignore frontend"`

no arquivo `webpack.config.js`, modificar o entry poin para o novo diretório, segue: `entry: './frontend/app.js'`

instalar as novas dependencias no terminal com o comando `npm i`

inicializar o nodemom com o comando `npm start`

inicializar o webpack com o comando `npm run dev`

A estrutura de arquivos será:

~~~txt
projeto
│   app.js
│   package.json
│   routes.js
│   webpack.config.js
│
├── frontend
│   ├── main.js
│   ├── assets
│   │   └── css
│   │       └── style.css
│   └── modules
│       └── module1
│
├── public
│   └── assets
│       └── js
│           └── bundle.js
│
└── src
    ├── controllers
    │   └── modelController.js
    └── views
        └── index.ejs
~~~


## Tipo 2

### Passo a Passo para Integração do Modelo Webpack em um Projeto Express

1. **Criar Pasta `frontend`:**
   Crie uma pasta chamada `frontend` na raiz do projeto para adicionar os arquivos do projeto modelo na seção webpack.

2. **Adicionar Arquivo `webpack.config.js`:**
   Na raiz do projeto, adicione o arquivo `webpack.config.js` para configurar o webpack.

3. **Copiar Conteúdo do `index.html`:**
   Copie o conteúdo do arquivo `3_webpack-template/dist/index.html` do modelo webpack e cole no arquivo correspondente `src/views/index.ejs` do seu projeto Express. Certifique-se de manter o caminho do script do bundle igual, pois a configuração dos arquivos estáticos permitirá o acesso.

4. **Mover Pasta `assets`:**
   Do modelo webpack, copie a pasta `assets` de dentro da pasta `dist` e cole na pasta `public` do projeto atual.

5. **Copiar e Renomear `app.js`:**
   Copie o arquivo `app.js` do diretório `src` do modelo webpack e cole na pasta `frontend` do projeto atual. Você pode renomeá-lo como `main.js` para evitar confusão com o `app.js` da raiz do projeto.

6. **Mover Pasta `assets/css`:**
   Do modelo webpack, mova a pasta `assets/css` para dentro da pasta `frontend` do projeto atual.

7. **Copiar Dependências do `package.json`:**
   Copie as dependências do arquivo `package.json` do modelo webpack para o arquivo de mesmo nome do projeto atual.

8. **Adicionar Script `dev`:**
   Adicione o script `"dev": "webpack -w"` no arquivo `package.json` do projeto atual para executar o webpack em modo de desenvolvimento.

9. **Modificar Script `start` do Nodemon:**
   No arquivo `package.json`, modifique o script de inicialização do Nodemon para ignorar algumas pastas relacionadas ao webpack. O script pode ser: `"start": "nodemon app.js --ignore public --ignore frontend"`.

10. **Modificar `entry point` no `webpack.config.js`:**
    No arquivo `webpack.config.js`, modifique o `entry point` para o novo diretório. Por exemplo: `entry: './frontend/main.js'`.

11. **Instalar Novas Dependências:**
    No terminal, execute o comando `npm install` para instalar as novas dependências.

12. **Inicializar Nodemon e Webpack:**
    Inicialize o Nodemon com o comando `npm start` e o webpack com o comando `npm run dev`.

### Estrutura de Arquivos Resultante:

~~~txt
projeto
│   app.js
│   package.json
│   routes.js
│   webpack.config.js
│
├── frontend
│   ├── main.js
│   ├── assets
│   │   └── css
│   │       └── style.css
│   └── modules
│       └── module1
│
├── public
│   └── assets
│       └── js
│           └── bundle.js
│
└── src
    ├── controllers
    │   └── modelController.js
    └── views
        └── index.ejs
~~~



## Tipo 3

Passo a Passo para Mesclar um Modelo Webpack em um Projeto Express:

1. **Criar Pasta `frontend`:**
   Crie uma pasta chamada `frontend` na raiz do projeto para armazenar os arquivos do modelo webpack.

2. **Adicionar `webpack.config.js`:**
   Crie ou copie o arquivo `webpack.config.js` para a raiz do projeto para configurar o webpack.

3. **Copiar `index.html` para `index.ejs`:**
   Copie o conteúdo do arquivo `index.html` do modelo webpack e cole no arquivo correspondente `index.ejs` dentro da pasta `src/views`.

4. **Copiar Pasta `assets` para `public`:**
   Copie a pasta `assets` do diretório `dist` do modelo webpack e cole dentro da pasta `public` do projeto atual.

5. **Copiar `main.js` para `frontend`:**
   Copie o arquivo `app.js` do diretório `src` do modelo webpack e cole na pasta `frontend` do projeto. 
   Renomeie-o, se necessário, para evitar conflito com o `app.js` da raiz.

6. **Mover Pasta `assets` para `frontend`:**
   Mova a pasta `assets`, contendo os arquivos CSS, do diretório `src` do modelo webpack e cole dentro da pasta `frontend` do projeto atual.

7. **Copiar Dependências do `package.json`:**
   Copie as dependências do arquivo `package.json` do modelo webpack e cole no arquivo de mesmo nome do projeto atual.

8. **Adicionar Script de Desenvolvimento:**
   Adicione o script `"dev": "webpack -w"` no arquivo `package.json` do projeto atual para executar o webpack em modo de observação.

9. **Modificar Script de Start do Nodemon:**
   Modifique o script de start do nodemon no arquivo `package.json` para ignorar as pastas relacionadas ao webpack, utilizando o comando `"start": "nodemon app.js --ignore public --ignore frontend"`.

10. **Atualizar Entry Point no `webpack.config.js`:**
    No arquivo `webpack.config.js`, modifique o ponto de entrada (`entry`) para o novo diretório `entry: './frontend/main.js'`.

11. **Instalar Novas Dependências:**
    No terminal, execute o comando `npm install` para instalar as novas dependências do projeto.

12. **Inicializar Nodemon e Webpack:**
    Inicie o servidor nodemon com o comando `npm start` e o webpack em modo de observação com o comando `npm run dev`.

Estrutura de Arquivos Resultante:

projeto
│   app.js
│   package.json
│   routes.js
│   webpack.config.js
│
├── frontend
│   ├── main.js
│   ├── assets
│   │   └── css
│   │       └── style.css
│   └── modules
│       └── module1
│
├── public
│   └── assets
│       └── js
│           └── bundle.js
│
└── src
    ├── controllers
    │   └── modelController.js
    └── views
        └── index.ejs
