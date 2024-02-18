# Passo a passo realizado nesse projeto

Passo 1 - Inicialização do npm:

~~~bash
# Código Bash

npm init -y
~~~

Passo 2 - Instalação de dependências:

~~~bash
# Código Bash

npm i --D @babel/core @babel/cli @babel/preset-env babel-loader webpack-cli regenerator-runtime core-js
~~~

Passo 3 - Criação do arquivo `webpack.config.js`

Passo 4 - Criação de diretório e arquivo de entrada `./src/app.js`

Passo 5 - Configuração do arquivo `webpack.config.js`

Passo 6 - Criação de script no arquivo `package.json`

~~~json
// Código JSON
"scripts": {
    "dev": "webpack -w"
}
~~~
