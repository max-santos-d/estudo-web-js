# Passo a passo realizado nesse projeto

## Passo a passo

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

## Explicção importante de arquivos

### Arquivo `webpack.config.js`

- **Require do módulo 'path'**: O módulo 'path' é um módulo do Node.js que fornece utilitários para lidar com caminhos de arquivos e diretórios. Aqui, estamos importando o módulo para usar a função `path.resolve()` mais tarde.
- **module.exports**: Esta é a maneira padrão do Node.js de exportar um objeto de um arquivo. Estamos exportando um objeto de configuração do Webpack para ser utilizado em outros arquivos.
- **mode**: Define o modo de construção do Webpack. No exemplo, está configurado para 'development', o que otimiza a compilação para o desenvolvimento. Para produção, você pode definir para 'production', o que minificará e otimizará o código.
- **entry**: Define o ponto de entrada do aplicativo. É o arquivo JavaScript principal a partir do qual o Webpack começará a construir a árvore de dependências. No exemplo, está configurado como './src/app.js'.
- **output**: Define a saída do Webpack, ou seja, onde o código resultante será gerado. Neste exemplo:
  - **`filename`**: O nome do arquivo de saída. Aqui, 'bundle.js'.
  - **`path`**: O caminho para o diretório de saída. Utilizamos path.resolve() para garantir que o caminho seja absoluto e independente do sistema operacional. No exemplo, está configurado como 'dist/assets/js'.
- **module.rules**: Define regras para processar diferentes tipos de arquivos. Aqui, estamos configurando uma regra para arquivos JavaScript:
  - **`exclude`**: Define quais arquivos devem ser excluídos do processo. Neste caso, estamos excluindo os arquivos dentro de 'node_modules'
  - **`test`**: Define um padrão para corresponder aos arquivos que esta regra deve processar. Neste caso, são arquivos JavaScript.
  - **`use`**: Define qual loader deve ser usado para processar os arquivos correspondentes. Aqui, estamos usando o 'babel-loader' para transpilar o código JavaScript usando o Babel.
  - **`options.presets`**: Define os presets do Babel a serem aplicados ao código. No exemplo, estamos usando o preset '@babel/env', que permite usar as últimas funcionalidades do JavaScript.
- **devtool**: Define como os source maps serão gerados. Aqui, está configurado como 'source-map', o que gera um arquivo separado de source map para ajudar na depuração do código.
