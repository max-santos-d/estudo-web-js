# Implementação do Webpack em um Projeto Express

## Passo a Passo

1. **Criar Pasta `frontend`:**
   Crie uma nova pasta chamada `frontend` na raiz do seu projeto Express, onde serão adicionados os arquivos do projeto modelo relacionados ao Webpack.

2. **Adicionar Arquivo `webpack.config.js`:**
   Na raiz do projeto, adicione um arquivo chamado `webpack.config.js` para configurar o Webpack.

3. **Configurar Arquivo HTML:**
   Copie o conteúdo do arquivo `3_webpack-template/dist/index.html` do modelo do projeto Webpack e cole-o no arquivo correspondente `src/views/index.ejs` do seu projeto Express. Certifique-se de manter o caminho do script do bundle igual, pois a configuração dos arquivos estáticos garantirá o acesso.

4. **Mover Arquivos Estáticos:**
   Copie a pasta `assets` do modelo do projeto Webpack (localizada dentro de `dist`) para a pasta `public` do seu projeto Express.

5. **Adicionar Script JavaScript:**
   Na pasta `frontend` do seu projeto Express, copie o arquivo `app.js` do diretório `src` do modelo do projeto Webpack. Você pode renomeá-lo para `main.js` para evitar conflito com o `app.js` na raiz do seu projeto.

6. **Mover Arquivos CSS:**
   Da mesma forma, mova a pasta `assets` do modelo do projeto Webpack (contendo os arquivos CSS) para a pasta `frontend` do seu projeto Express.

7. **Atualizar Dependências:**
   Copie as dependências do arquivo `package.json` do modelo do projeto Webpack para o arquivo de mesmo nome do seu projeto Express.

8. **Adicionar Script de Desenvolvimento:**
   No arquivo `package.json` do seu projeto Express, adicione o script `"dev": "webpack -w"` para iniciar o Webpack em modo de observação.

9. **Modificar Script de Inicialização do Nodemon:**
   Atualize o script de inicialização do Nodemon no arquivo `package.json` para ignorar algumas pastas relacionadas ao Webpack. Exemplo: `"start": "nodemon app.js --ignore public --ignore frontend"`.

10. **Atualizar Entry Point no Webpack:**
    No arquivo `webpack.config.js`, atualize o ponto de entrada (`entry`) para o novo diretório `frontend`. Exemplo: `entry: './frontend/main.js'`.

11. **Instalar Novas Dependências:**
    Execute `npm install` no terminal para instalar as novas dependências do projeto.

12. **Iniciar Nodemon e Webpack:**
    Inicie o servidor do Nodemon com o comando `npm start` e o Webpack em modo de observação com o comando `npm run dev`.

### Estrutura de Arquivos

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
│       └── module1.js
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
