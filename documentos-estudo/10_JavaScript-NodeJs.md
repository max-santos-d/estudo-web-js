# NodeJs

Índice

- [NodeJs](#nodejs)
  - [Módulos](#módulos)
    - [Objeto `module`](#objeto-module)
    - [Objeto `exports`](#objeto-exports)
    - [Exportação de Módulos](#exportação-de-módulos)
    - [Importação de Módulos](#importação-de-módulos)
    - [Exportando Funções](#exportando-funções)
    - [Exportando Classes](#exportando-classes)
    - [Importando Funções e Classes](#importando-funções-e-classes)
  - [NPM - Node Package Manager](#npm---node-package-manager)
  - [File System (FS)](#file-system-fs)
    - [Funcionalidades Principais do FS](#funcionalidades-principais-do-fs)
  - [Express](#express)
    - [Recursos Principais do Express.js](#recursos-principais-do-expressjs)
    - [Renderizando HTML no express](#renderizando-html-no-express)
    - [Express + Nodemon](#express--nodemon)
    - [Exemplo de Uso do Express com o Nodemon](#exemplo-de-uso-do-express-com-o-nodemon)
    - [Express - `req.params`, `req.query` e `req.body`](#express---reqparams-reqquery-e-reqbody)
    - [Exemplo com renderização de HTML e submissão e captação dos dados de formulário:](#exemplo-com-renderização-de-html-e-submissão-e-captação-dos-dados-de-formulário)
    - [Express Router](#express-router)
    - [Express Router + Controllers](#express-router--controllers)
    - [Express Views](#express-views)
    - [Passos para Configurar Arquivos Estáticos no Express:](#passos-para-configurar-arquivos-estáticos-no-express)
    - [Express Middlewares em JavaScript](#express-middlewares-em-javascript)
      - [Características dos Middlewares:](#características-dos-middlewares)
    - [Webpack + Express](#webpack--express)
  - [Projetos e exercícios praticos](#projetos-e-exercícios-praticos)

## Módulos

No Node.js, os objetos module e exports são fundamentais para o sistema de módulos e a exportação de funcionalidades de um módulo para outros módulos. Vamos entender como esses objetos são estruturados:

### Objeto `module`

O objeto `module` é um objeto global fornecido pelo Node.js para cada módulo. Ele contém informações sobre o módulo atual, como seu nome, caminho do arquivo, exports e outras propriedades. O objeto `module` é representado da seguinte forma:

~~~javascript
{
  id: '.', // Caminho absoluto do arquivo do módulo
  exports: {}, // Objeto que contém as funcionalidades exportadas pelo módulo
  parent: null, // Módulo que requer este módulo (se houver)
  filename: '/caminho/do/arquivo/meuModulo.js', // Caminho absoluto do arquivo do módulo
  loaded: false, // Indica se o módulo foi carregado completamente
  children: [], // Lista dos módulos requeridos por este módulo
  paths: [ /* Lista de caminhos de busca para módulos */ ]
}
~~~

### Objeto `exports`

O objeto `exports` é uma propriedade do objeto `module` e é usado para exportar funcionalidades de um módulo. Quando atribuímos valores ou objetos a `module.exports` ou `exports`, essas funcionalidades se tornam acessíveis para outros módulos que requerem este módulo. Por padrão, `module.exports` é uma referência para `exports`, então podemos usar ambos para exportar funcionalidades.

~~~javascript
// Exemplo de exportação de uma função e uma variável
exports.minhaFuncao = () => {
  console.log('Minha função');
};

exports.minhaVariavel = 'Meu valor';
~~~

ou

~~~javascript
// Exemplo de exportação usando module.exports
module.exports = {
  minhaFuncao: () => {
    console.log('Minha função');
  },
  minhaVariavel: 'Meu valor'
};
~~~

Ambos os métodos são equivalentes e podem ser usados para exportar funcionalidades de um módulo.

### Exportação de Módulos

No Node.js, um arquivo JavaScript é considerado um módulo separado. Para exportar funcionalidades de um módulo, usamos a variável global `module.exports` ou a sintaxe de exportação ES6 (`export`).

1. **Usando `module.exports`**: Podemos atribuir qualquer valor ou objeto a module.exports para exportá-lo do módulo. Por exemplo:

    ~~~javascript
    // meuModulo.js
    const minhaFuncao = () => {
    console.log('Minha função');
    };

    module.exports = {
    minhaFuncao: minhaFuncao,
    minhaVariavel: 'Meu valor'
    };
    ~~~

2. **Usando `exports`**: `exports` é uma referência para `module.exports`. Podemos adicionar propriedades a `exports` para exportar múltiplas funcionalidades. Por exemplo:

    ~~~javascript
    // meuModulo.js
    exports.minhaFuncao = () => {
    console.log('Minha função');
    };

    exports.minhaVariavel = 'Meu valor';
    ~~~

### Importação de Módulos

Para importar funcionalidades de outros módulos no Node.js, usamos a função `require()`. Esta função aceita o caminho para o arquivo do módulo como argumento e retorna o objeto exportado.

~~~javascript
// app.js
const meuModulo = require('./meuModulo');

meuModulo.minhaFuncao(); // Saída: Minha função
console.log(meuModulo.minhaVariavel); // Saída: Meu valor
~~~

Resolução de Caminho

O Node.js usa o sistema de arquivos do sistema operacional para localizar os módulos. Quando fornecemos um caminho relativo para um módulo no `require()`, o Node.js procura pelo arquivo no sistema de arquivos começando do diretório atual.

Além disso, podemos usar caminhos absolutos ou caminhos de módulo (`node_modules`) no `require()`. O Node.js procura por módulos em `node_modules` começando do diretório atual e subindo na hierarquia de diretórios até encontrar o módulo desejado.

Ciclo de Vida de um Módulo

Quando um módulo é importado pelo primeiro tempo, o Node.js executa o código do módulo e armazena o resultado em cache. Nas importações subsequentes, o Node.js retorna o resultado do cache, em vez de recarregar o arquivo.

### Exportando Funções

Para exportar uma função de um módulo, podemos simplesmente atribuí-la a uma propriedade do objeto `exports` ou `module.exports`. Por exemplo:

~~~javascript
// meuModulo.js
exports.minhaFuncao = function() {
  console.log('Minha função');
};
~~~

ou

~~~javascript
// meuModulo.js
module.exports.minhaFuncao = function() {
  console.log('Minha função');
};
~~~

A função `minhaFuncao` agora está disponível para ser importada em outros módulos.

### Exportando Classes

Da mesma forma, podemos exportar classes de um módulo atribuindo-as a uma propriedade do objeto exports ou module.exports. Por exemplo:

~~~javascript
// minhaClasse.js
class MinhaClasse {
  constructor() {
    // Construtor da classe
  }

  meuMetodo() {
    console.log('Meu método');
  }
}

exports.MinhaClasse = MinhaClasse;
~~~

### Importando Funções e Classes

Para importar funções e classes exportadas de um módulo, usamos a função require() e a sintaxe de desestruturação, se necessário. Por exemplo:

~~~javascript
// app.js
const { minhaFuncao } = require('./meuModulo');
const MinhaClasse = require('./minhaClasse');

minhaFuncao(); // Chama a função exportada
const minhaInstancia = new MinhaClasse(); // Cria uma nova instância da classe exportada
minhaInstancia.meuMetodo(); // Chama o método da classe exportada
~~~

## NPM - Node Package Manager

O NPM (Node Package Manager) é o gerenciador de pacotes oficial do ecossistema Node.js. Ele facilita a instalação, gerenciamento e compartilhamento de bibliotecas e ferramentas JavaScript desenvolvidas pela comunidade. Abaixo, detalho os principais aspectos do NPM:

Instalação do NPM

O NPM é instalado automaticamente quando você instala o Node.js em seu sistema. Portanto, sempre que você instala o Node.js, o NPM também é instalado junto com ele. Você pode verificar se o NPM está instalado e sua versão executando o comando:

~~~bash
npm -v
~~~

Funcionalidades Principais

1. **Instalação de Pacotes**: O NPM permite instalar pacotes (bibliotecas ou ferramentas JavaScript) em um projeto. Para instalar um pacote, basta executar o comando `npm install <nome_do_pacote>` no diretório do projeto. Por exemplo:

    ~~~bash
    npm install lodash
    ~~~

2. **Gerenciamento de Dependências**: O NPM gerencia as dependências de um projeto, mantendo um registro das bibliotecas que seu projeto precisa para funcionar corretamente. Ele cria automaticamente um arquivo `package.json` que lista todas as dependências do projeto, bem como suas versões.

3. **Atualização de Pacotes**: O NPM permite atualizar pacotes facilmente para suas versões mais recentes. Você pode atualizar um pacote específico executando `npm update <nome_do_pacote>`, ou todos os pacotes de uma vez com `npm update`.

4. **Remoção de Pacotes**: Você pode remover pacotes instalados usando o NPM com o comando `npm uninstall <nome_do_pacote>`.

5. **Pesquisa de Pacotes**: O NPM possui um repositório online de pacotes chamado [npm Registry](https://www.npmjs.com/), onde você pode pesquisar e descobrir pacotes disponíveis para instalação.

6. s**Publicação de Pacote**: Desenvolvedores podem publicar seus próprios pacotes no NPM Registry para que outros desenvolvedores possam usar. Para publicar um pacote, você precisa criar uma conta no site do NPM e executar o comando `npm publish` no diretório do seu projeto.

Arquivo `package.json`

O arquivo `package.json` é um arquivo de metadados de um projeto Node.js, onde você especifica várias informações sobre o projeto, como nome, versão, descrição, scripts, dependências, etc. Esse arquivo é crucial para o gerenciamento de dependências usando o NPM.

Uso em Projetos

Ao iniciar um novo projeto Node.js, geralmente você começa criando um arquivo `package.json` usando o comando `npm init`. Isso cria um arquivo `package.json` interativo onde você pode inserir informações sobre o projeto.

Instalar Pacotes: Para instalar um pacote, basta usar o comando `npm install <nome_do_pacote>`.

Desinstalar Pacotes: Para desinstalar um pacote, você pode usar o comando `npm uninstall <nome_do_pacote>`.

Atualizar Pacotes: Para atualizar um pacote para a versão mais recente, você pode usar o comando `npm update <nome_do_pacote>`.

Downgrade de Pacote: Se precisar fazer downgrade para uma versão específica de um pacote, você pode usar a opção `@` seguida da versão desejada durante a instalação. Por exemplo:

~~~bash
npm install lodash@4.17.15
~~~

Isso instalará a versão `4.17.15` específica do pacote `lodash`.

Instalar Pacotes Globalmente: Se você deseja instalar um pacote globalmente (ou seja, disponível em todo o sistema), você pode adicionar a opção `-g` ao comando `npm install`.

Além dos comandos básicos para instalar, desinstalar, atualizar e fazer downgrade de pacotes no NPM, é importante entender a diferença entre as seções `dependencies` e `devDependencies` no arquivo `package.json`. Essas seções são usadas para especificar as dependências do projeto e as dependências de desenvolvimento, respectivamente.

Instalação em `dependencies` e `devDependencies`

1. **dependencies**: Esta seção é usada para listar as dependências necessárias para o funcionamento do projeto em produção. Isso inclui bibliotecas e ferramentas utilizadas diretamente pelo código em execução. Para instalar um pacote como dependência do projeto, você pode usar o comando `npm install <nome_do_pacote> --save`, ou simplesmente `npm install <nome_do_pacote>` se você estiver usando o NPM versão 5 ou superior, pois o NPM agora instala automaticamente as dependências e as adiciona ao arquivo `package.json`.

2. **devDependencies**: Esta seção é usada para listar as dependências necessárias apenas durante o desenvolvimento do projeto, como ferramentas de teste, linters, etc. Essas dependências não são necessárias para a execução do projeto em produção. Para instalar um pacote como dependência de desenvolvimento do projeto, você pode usar o comando `npm install <nome_do_pacote> --save-dev`, ou `npm install <nome_do_pacote> -D`, se estiver usando uma versão mais recente do NPM.

Movendo Pacotes entre `dependencies` e `devDependencies`

Às vezes, você pode querer mover um pacote entre as seções `dependencies` e `devDependencies`, por exemplo, quando uma dependência inicialmente instalada como uma dependência de desenvolvimento agora é necessária para o funcionamento do projeto em produção. Para isso, você pode usar o comando `npm install <nome_do_pacote> --save` ou `npm install <nome_do_pacote> --save-dev`, conforme apropriado, para reinstalar o pacote e atualizar a seção correspondente do arquivo package.json.

## File System (FS)

O módulo File System (FS) é uma parte fundamental do Node.js que permite interagir com o sistema de arquivos do sistema operacional. Com o módulo FS, você pode ler, gravar, atualizar, excluir, renomear e manipular arquivos e diretórios.

### Funcionalidades Principais do FS

- **Leitura de Arquivos**: Você pode ler o conteúdo de um arquivo usando o método `fs.readFile()` ou `fs.readFileSync()`. O primeiro é assíncrono e o segundo é síncrono.
- **Escrita em Arquivos**: Você pode escrever dados em um arquivo usando o método `fs.writeFile()` ou `fs.writeFileSync()`. O primeiro é assíncrono e o segundo é síncrono.
- **Atualização de Arquivos**: O método `fs.appendFile()` permite adicionar dados a um arquivo existente sem substituir seu conteúdo.
- **Exclusão de Arquivos**: Você pode excluir arquivos usando o método `fs.unlink()`.
- **Manipulação de Diretórios**: O módulo FS também oferece métodos para criar, renomear e excluir diretórios usando `fs.mkdir()`, f`s.rename()` e `fs.rmdir()`.
- **Listagem de Arquivos em um Diretório**: O método `fs.readdir()` permite listar os arquivos em um diretório.
- **Verificação da Existência de Arquivos e Diretórios**: Você pode verificar se um arquivo ou diretório existe usando `fs.exists()` ou `fs.existsSync()`.

Exemplo de Uso

Aqui está um exemplo simples que lê o conteúdo de um arquivo, adiciona uma linha e escreve de volta no mesmo arquivo usando operações assíncronas:

~~~javascript
const fs = require('fs');

// Leitura do arquivo
fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if (err) throw err;

    // Adicionando uma linha
    const novoConteudo = data + '\nNova linha adicionada';

    // Escrita no arquivo
    fs.writeFile('arquivo.txt', novoConteudo, 'utf8', err => {
        if (err) throw err;
        console.log('Conteúdo do arquivo atualizado com sucesso.');
    });
});
~~~

## Express

O Express.js é um framework web minimalista e flexível para Node.js, projetado para criar aplicativos web e APIs de forma rápida e eficiente. Ele fornece uma série de recursos poderosos para lidar com rotas, middlewares, renderização de visualizações, gerenciamento de solicitações HTTP, manipulação de sessões e muito mais.

### Recursos Principais do Express.js

- **Gerenciamento de Rotas**: O Express permite definir rotas para diferentes URLs e métodos HTTP usando o método `app.get()`, `app.post()`, `app.put()`, `app.delete()` e outros.
- **Middlewares**: Os middlewares são funções que são executadas em cada solicitação recebida pelo servidor Express. Eles são usados para executar tarefas comuns, como registro de solicitações, análise de corpo de solicitação, autenticação, autorização, etc.
- **Suporte a Vários Tipos de Resposta**: Com o Express, você pode enviar várias respostas, como JSON, HTML, texto simples, arquivos estáticos, etc.
- **Renderização de Visualizações**: O Express facilita a renderização de visualizações dinâmicas usando mecanismos de modelo como EJS, Pug (anteriormente conhecido como Jade), Handlebars, etc.
- **Gerenciamento de Sessões**: O Express oferece suporte a vários middlewares para o gerenciamento de sessões e cookies, permitindo a persistência de dados entre solicitações do cliente.
- **Recursos Avançados**: Além disso, o Express possui uma grande variedade de recursos avançados, como roteamento modular, manipulação de erros, compactação de resposta, negociação de conteúdo, entre outros.

**Exemplo de Uso Básico**

Aqui está um exemplo simples de um aplicativo Express que cria um servidor HTTP e responde a solicitações GET na raiz:

~~~javascript
// Código JavaScript

// CRUD ->  CREATE  READ  UPDATE    DELETE
//          POST    GET   PUT       DELETE
//          Criar   Ler   Atualizar Deletar

const express = require('express');
const app = express();

// Definição da rota para a raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo ao Express!');
});

// Rota de exemplo
app.get('/exemplo', (req, res) => {
    res.send('Esta é uma rota de exemplo.');
});

// Inicialização do servidor na porta 3000
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor Express rodando na porta 3000');
});
~~~

### Renderizando HTML no express

~~~javascript
const express = require('express');
const app = express();

// Definição da rota para a raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo ao Express!');
});

// Rota de exemplo
app.get('/exemplo', (req, res) => {
    // Layout HTML básico
    const htmlLayout = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Express HTML Layout</title>
        </head>
        <body>
            <h1>Exemplo de Rota Express com Layout HTML</h1>
            <p>Este é um exemplo de rota Express que envia um layout HTML.</p>
        </body>
        </html>
    `;

    res.send(htmlLayout);
});

// Iniciando o servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor Express está rodando em http://localhost:${port}`);
});
~~~

### Express + Nodemon

O Nodemon é uma ferramenta que ajuda no desenvolvimento de aplicativos Node.js, reiniciando automaticamente o servidor sempre que detecta mudanças nos arquivos do projeto. Juntamente com o Express, o Nodemon torna o processo de desenvolvimento mais eficiente, pois você não precisa parar e reiniciar manualmente o servidor a cada vez que faz alterações no código.

Passos para Usar o Express com o Nodemon

- **Instalar o Nodemon**: Comece instalando o Nodemon globalmente ou localmente no projeto. Para instalar globalmente, você pode executar o seguinte comando no terminal:

~~~bash
npm install -g nodemon
~~~

Para instalar localmente no projeto, você pode executar:

~~~bash
npm install nodemon --save-dev
~~~

- **Atualizar o Script no `package.json`**: Se você instalou o Nodemon localmente no projeto, você precisa atualizar o script no arquivo `package.json` para usar o Nodemon. Adicione uma entrada no script com o comando `nodemon`:

~~~json
"scripts": {
    "start": "nodemon app.js"
}
~~~

Substitua `app.js` pelo nome do arquivo principal do seu aplicativo Express.

- **Executar o Aplicativo**: Agora você pode iniciar seu aplicativo Express usando o Nodemon executando o seguinte comando no terminal:

~~~bash
npm start
~~~

Isso iniciará seu servidor Express e o Nodemon estará observando as alterações nos arquivos do projeto. Sempre que você fizer uma alteração e salvar um arquivo, o Nodemon reiniciará automaticamente o servidor para refletir as alterações.


### Exemplo de Uso do Express com o Nodemon

Aqui está um exemplo básico de como usar o Express com o Nodemon:

Instale o Express e o Nodemon:

~~~bash
npm install express nodemon --save
~~~

Crie um arquivo `app.js` com o seguinte conteúdo:

~~~javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor Express está rodando em http://localhost:${port}`);
});
~~~

Adicione um script de start no package.json:

~~~json
"scripts": {
    "start": "nodemon app.js"
}
~~~

Execute o aplicativo usando o Nodemon:

~~~bash
npm start
~~~

Agora seu aplicativo Express está em execução e o Nodemon está monitorando as alterações nos arquivos. Experimente fazer alterações no arquivo `app.js` e salve-o. O Nodemon irá reiniciar automaticamente o servidor e refletir as alterações.

### Express - `req.params`, `req.query` e `req.body`

No Express, os objetos req.params, req.query e req.body são usados para acessar diferentes partes dos dados enviados em uma solicitação HTTP. Aqui está uma explicação detalhada de cada um:

**`req.params`**

O objeto `req.params` é usado para acessar os parâmetros de rota em uma solicitação HTTP. Quando você define parâmetros em suas rotas usando dois pontos `:`, esses parâmetros são acessíveis através do objeto `req.params`.

Exemplo de rota com parâmetros:

~~~javascript
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Faça algo com userId...
});
~~~

Neste exemplo, a rota `/users/:id` permite acessar o parâmetro id da URL usando `req.params.id`.

**`req.query`**

O objeto `req.query` é usado para acessar os parâmetros de consulta em uma solicitação HTTP. Parâmetros de consulta são aqueles que vêm após o ponto de interrogação (`?`) na URL.

Exemplo de rota com parâmetros de consulta:

~~~javascript
app.get('/search', (req, res) => {
    const searchTerm = req.query.q;
    // Faça algo com searchTerm...
});
~~~

Neste exemplo, a rota `/search` permite acessar o parâmetro de consulta q usando `req.query.q`.

**`req.body`**

O objeto `req.body` é usado para acessar os dados do corpo de uma solicitação HTTP, especialmente em solicitações POST, PUT e PATCH, onde os dados são enviados no corpo da solicitação.

Para acessar o `req.body`, você precisa configurar o Express para analisar o corpo da solicitação. O Express fornece os middlewares `express.json()` e `express.urlencoded()` para analisar automaticamente o corpo da solicitação em formatos JSON e URL-encoded, respectivamente.

Exemplo de uso do `req.body` com `express.json()` e `express.urlencoded()`:

~~~javascript
const express = require('express');
const app = express();

app.use(express.json()); // Middleware para analisar corpos de solicitação JSON
app.use(express.urlencoded({ extended: true })); // Middleware para analisar corpos de solicitação codificados como URL

app.post('/api/users', (req, res) => {
    const userData = req.body;
    // Faça algo com userData...
});
~~~


Neste exemplo, `express.json()` é usado para analisar automaticamente o corpo da solicitação como JSON, enquanto `express.urlencoded()` é usado para analisar corpos de solicitação codificados como URL. Isso permite acessar os dados enviados no corpo da solicitação através do `req.body` na rota especificada.

### Exemplo com renderização de HTML e submissão e captação dos dados de formulário:

~~~javascript
const express = require('express');
const app = express();

app.use(express.urlencoded({ exetended: true }));

// Definição da rota para a raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo ao Express!');
});

// Rota de exemplo
app.get('/exemplo', (req, res) => {
    // Layout HTML básico
    const htmlLayout = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Express HTML Layout</title>
        </head>
        <body>
            <h1>Exemplo de Rota Express com Layout HTML</h1>
            <p>Este é um exemplo de rota Express que envia um layout HTML.</p>
        </body>
        </html>
    `;

    res.send(htmlLayout);
});

app.get('/form', (req, res) => {
    // Layout HTML básico com um formulário
    const htmlLayout = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Express HTML Form Layout</title>
        </head>
        <body>
            <h1>Exemplo de Rota Express com Formulário HTML</h1>
            <form action="/submit" method="POST">
                <label for="name">Nome:</label><br>
                <input type="text" id="name" name="name"><br>
                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email"><br><br>
                <button>Enviar</button>
            </form>
        </body>
        </html>
    `;

    // Enviando o layout HTML com formulário como resposta
    res.send(htmlLayout);
});

// Rota para manipular o envio do formulário
app.post('/submit', (req, res) => {

    console.log(req.body);

    const { name, email } = req.body;
    res.send(`
        Formulário enviado com sucesso! <br>
        Nome: ${name}, Email: ${email}`
    );
});

// Iniciando o servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor Express está rodando em http://localhost:${port}`);
});
~~~

### Express Router

O Express Router é um recurso do Express.js que permite organizar e modularizar as rotas de uma aplicação web ou API. Ele ajuda a manter o código limpo, organizado e fácil de manter, especialmente em aplicações grandes ou complexas.

Funcionalidades do Express Router:

- Organização de Rotas: O Router permite agrupar rotas relacionadas em módulos separados, facilitando a organização e a manutenção do código.
- Middleware: Assim como o aplicativo principal do Express, o Router também pode usar middleware para tratar solicitações HTTP. Isso permite a aplicação de middleware específico para determinadas rotas ou grupos de rotas.
- Encadeamento de Rotas: O Router suporta o encadeamento de middleware e manipuladores de rota, permitindo a definição de várias funções de middleware ou manipuladores de rota para a mesma rota.
- Roteamento Aninhado: O Router suporta o roteamento aninhado, o que significa que você pode definir rotas em rotas, criando uma estrutura hierárquica de roteamento.

Exemplo de Uso do Express Router:

Aqui está um exemplo simples de como usar o Express Router:

~~~javascript
// arquivo: routes/users.js
const express = require('express');
const router = express.Router();

// Definindo uma rota no Router
router.get('/', (req, res) => {
    res.send('Lista de usuários');
});

// Definindo outra rota no Router
router.get('/:id', (req, res) => {
    res.send(`Detalhes do usuário com ID ${req.params.id}`);
});

module.exports = router;
~~~

~~~javascript
// arquivo: app.js (ou qualquer arquivo principal)
const express = require('express');
const app = express();

// Importando o Router de users.js
const usersRouter = require('./routes/users');

// Usando o Router para lidar com rotas relacionadas a usuários
app.use('/users', usersRouter);

// Iniciando o servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor Express está rodando em http://localhost:${port}`);
});
~~~

Neste exemplo, `routes/users.js` define um Router com duas rotas relacionadas a usuários. Em seguida, no arquivo principal `app.js`, importamos e usamos esse Router para lidar com todas as rotas relacionadas a usuários, prefixando-as com `/users`. Isso mantém as rotas de usuários organizadas e modulares em seu aplicativo Express.

### Express Router + Controllers

Combinar o Express Router com controllers é uma prática comum para manter suas rotas limpas e separadas da lógica de negócios da sua aplicação. Os controllers são responsáveis por lidar com a lógica de uma rota específica e são chamados pelos manipuladores de rota definidos no Router. Aqui está um exemplo de como você pode usar o Express Router com controllers:

Exemplo de Uso do Express Router com Controllers:

Definindo um Controller:

~~~javascript
// controllers/usersController.js
exports.listUsers = (req, res) => {
    res.send('Lista de usuários');
};

exports.getUserDetails = (req, res) => {
    res.send(`Detalhes do usuário com ID ${req.params.id}`);
};
~~~

Definindo o Router:

~~~javascript
// routes.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Definindo rotas no Router com os controllers
router.get('/', usersController.listUsers);
router.get('/:id', usersController.getUserDetails);

module.exports = router;
~~~

Usando o Router no Arquivo Principal:

~~~javascript
// app.js (ou qualquer arquivo principal)
const express = require('express');
const app = express();

// Importando o Router de users.js
const usersRouter = require('./routes/users');

// Usando o Router para lidar com rotas relacionadas a usuários
app.use('/users', usersRouter);

// Iniciando o servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor Express está rodando em http://localhost:${port}`);
});
~~~

**Exemplo com maior complexidade**

Definindo os Controllers:

~~~javascript
// arquivo: contollers/contatoController.js

// Importação do módulo 'express' não é necessária nos controladores
// pois não estão usando recursos específicos do Express diretamente

// Define uma função para a rota '/contato'
exports.index = (req, res) => {
    // HTML básico a ser enviado como resposta para a rota
    const htmlLayout = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Express HTML Contato</title>
        </head>
        <body>
            <h1>Contato</h1>
            <p>Este é um exemplo de rota Express para contato</p>
        </body>
        </html>
    `;

    // Envia o HTML como resposta
    res.send(htmlLayout);
};
~~~

~~~javascript
// arquivo: contollers/formController.js

// Define uma função para a rota '/form' com o método GET
exports.index = (req, res) => {
    // HTML de um formulário básico
    const htmlLayout = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Express HTML Form Layout</title>
        </head>
        <body>
            <h1>Exemplo de Rota Express com Formulário HTML</h1>
            <form action="/form" method="POST">
                <label for="name">Nome:</label><br>
                <input type="text" id="name" name="name"><br>
                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email"><br><br>
                <button>Enviar</button>
            </form>
        </body>
        </html>
    `;

    // Envia o HTML como resposta
    res.send(htmlLayout);
};

// Define uma função para a rota '/form' com o método POST
exports.form = (req, res) => {
    // Exibe os dados do formulário submetido no console
    console.log(req.body);

    // Extrai os dados do corpo da requisição
    const { name, email } = req.body;

    // Envia uma resposta com os dados do formulário submetido
    res.send(`
        Formulário enviado com sucesso! <br>
        Nome: ${name}, Email: ${email}`
    );
};
~~~

~~~javascript
// arquivo: contollers/homeController.js

// Define uma função para a rota raiz ('/')
exports.index = (require, response) => {
    // Envia uma mensagem de boas-vindas como resposta
    response.send('Bem-vindo ao Express!');
};
~~~

Definindo o Router:

~~~javascript
// routers.js

// Importa o módulo 'express'
const express = require('express');

// Cria uma instância do roteador do Express
const route = express.Router();

// Importa os controladores definidos anteriormente
const homeController = require('./controllers/homeController');
const formController = require('./controllers/formController');
const contatoController = require('./controllers/contatoController');

// Define a rota para a raiz ('/') usando o método GET
route.get('/', homeController.index);

// Define a rota para '/form' usando o método GET e associa ao controlador 'formController.index'
route.get('/form', formController.index);
// Define a rota para '/form' usando o método POST e associa ao controlador 'formController.form'
route.post('/form', formController.form);

// Define a rota para '/contato' usando o método GET e associa ao controlador 'contatoController.index'
route.get('/contato', contatoController.index);

// Exporta o roteador para ser utilizado no arquivo principal
module.exports = route;
~~~

Usando o Router no Arquivo Principal:

~~~javascript
// arquivo: app.js

// Importa o módulo 'express'
const express = require('express');

// Cria uma instância do aplicativo Express
const app = express();

// Importa as rotas definidas no arquivo 'routers.js'
const routes = require('./routes');

// Define o middleware 'express.urlencoded()' para processar dados de formulário HTML
app.use(express.urlencoded({ extended: true }));

// Utiliza as rotas definidas
app.use(routes);

// Define a porta em que o servidor irá ouvir
const port = 3000;

// Inicia o servidor Express para escutar na porta especificada
app.listen(port, () => {
    console.log(`Servidor Express está rodando em http://localhost:${port}`);
});
~~~

### Express Views

Express Views refere-se à capacidade do Express.js de renderizar e exibir páginas HTML, geralmente usando um mecanismo de modelo como o EJS (Embedded JavaScript) ou o Pug (antigo Jade). Isso permite que você crie páginas da web dinâmicas, onde o conteúdo pode ser gerado dinamicamente com base em dados ou lógica de negócios.

Configuração do Express Views com EJS:

Instalar o EJS:
Antes de começar, você precisa instalar o pacote EJS em seu projeto Node.js. Você pode fazer isso usando o npm:

~~~bash
npm ejs
~~~

Configurar o Express:
No seu arquivo principal do Express (geralmente `app.js` ou `index.js`), configure o Express para usar o EJS como mecanismo de modelo:

~~~javascript
const express = require('express');
const app = express();

// Configurar o Express para usar o EJS
app.set('view engine', 'ejs');
~~~

Criar uma Rota:
Crie uma rota no Express que renderizará e exibirá uma página EJS:

~~~javascript
// Rota para renderizar a página inicial
app.get('/', (req, res) => {
    const data = { title: 'Página Inicial', message: 'Bem-vindo ao meu site!' };
    res.render('index', data);
});
~~~

Criar a Página EJS:
Crie um arquivo de modelo EJS na pasta views. Por exemplo, crie um arquivo chamado index.ejs:

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title %></title>
</head>
<body>
    <h1><%= message %></h1>
</body>
</html>
~~~

Renderização de Página:
Quando a rota é acessada, o Express renderizará a página EJS e enviará o HTML resultante como resposta para o navegador.

Exemplo mais detalhado:

Views EJS

~~~html
<!-- arquivo:  src/views/form.ejs-->

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
</head>

<body>
    <h1>Documento Form EJS renderizado!</h1>

    <form action="/form" method="POST">
        <label for="name">Nome:</label><br>
        <input type="text" name="name"><br>
        <label for="email">Email:</label><br>
        <input type="email" name="email"><br><br>
        <button>Enviar</button>
    </form>
</body>

</html>
~~~

~~~html
<!-- arquivo:  src/views/formData.ejs-->

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data-Form</title>
</head>
<body>
    <h1>Documento Data-Form EJS renderizado!</h1>

    <p>Formulário enviado com sucesso!</p>
    <p>Nome: <%= name %></p>
    <p>Email: <%= email %></p>
</body>
</html>
~~~

~~~html
<!-- arquivo:  src/views/index.ejs-->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
</head>
<body>
    <h1>Documento EJS renderizado!</h1>

    <a href="./form" target="_blank">form</a><br>
</body>
</html>
~~~

Controllers:

~~~javascript
// arquivo: src/controllers/formController.js

exports.index = (req, res) => {
    res.render('form');
};

exports.form = (req, res) => {
    const { name, email } = req.body;

    res.render('formData', {name, email});
};
~~~

~~~javascript
// arquivo: src/controllers/homeController.js

exports.index = (req, res) => {
    res.render('index');
};
~~~

Definindo o Router:

~~~javascript
// arquivo: routes.js

const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const formController = require('./src/controllers/formController');

route.get('/', homeController.index);

route.get('/form', formController.index);
route.post('/form', formController.form);

module.exports = route;
~~~

Usando o Router no Arquivo Principal:

~~~javascript
// arquivo: app.js

const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ exetended: true }));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor Express está rodando em http://localhost:${port}`);
});
~~~

### Passos para Configurar Arquivos Estáticos no Express:

1. **Criar Pasta para Arquivos Estáticos:**
   Crie uma pasta no seu projeto para armazenar os arquivos estáticos, por exemplo, uma pasta chamada `public`.

2. **Mover Arquivos Estáticos:**
   Mova todos os arquivos estáticos (HTML, CSS, JavaScript, imagens, etc.) para dentro da pasta `public`.

3. **Configurar o Express:**
   No seu arquivo principal do Express (geralmente `app.js` ou `index.js`), configure o Express para servir arquivos estáticos da pasta `public` usando o middleware `express.static`:

   ~~~javascript
   const express = require('express');
   const path = require('path');
   const app = express();

   // Configurar o Express para servir arquivos estáticos
   app.use(express.static(path.resolve(__dirname, 'public')));
   ~~~

   Esta linha de código diz ao Express para servir os arquivos estáticos da pasta public quando uma solicitação for feita a partir do cliente.

4. **Acessando os Arquivos Estáticos:**
   Agora, os arquivos estáticos podem ser acessados diretamente a partir do cliente. Por exemplo, se você tiver um arquivo style.css na pasta public/css, ele pode ser acessado em http://localhost:3000/css/style.css (se estiver executando o servidor localmente na porta 3000).

Benefícios:

- **Simplicidade**: A configuração de arquivos estáticos no Express é fácil e direta.
- **Desempenho**: Servir arquivos estáticos diretamente pelo servidor do Express pode melhorar o desempenho, especialmente para recursos comuns acessados por várias páginas.
- **Organização**: Separar os arquivos estáticos em uma pasta específica como `public` ajuda a organizar e manter o projeto de forma limpa e estruturada.

### Express Middlewares em JavaScript

Os middlewares no Express são funções que têm acesso aos objetos de solicitação (req), resposta (res) e à próxima função de middleware no ciclo de solicitação-resposta do aplicativo. Eles são usados ​​para executar tarefas específicas, manipular solicitações HTTP e adicionar funcionalidades ao aplicativo Express.

#### Características dos Middlewares:

1. **Acesso aos Objetos de Solicitação e Resposta:**
   - Os middlewares recebem os objetos de solicitação (`req`) e resposta (`res`) como parâmetros. 
   - Isso permite que eles inspecionem os dados da solicitação e preparem uma resposta para o cliente.

2. **Próxima Função de Middleware:**
   - Todo middleware tem acesso a uma terceira função chamada `next`.
   - Esta função é usada para passar o controle para o próximo middleware no ciclo de solicitação-resposta.

3. **Manipulação de Solicitações HTTP:**
   - Os middlewares são usados ​​para executar várias tarefas relacionadas ao processamento de solicitações HTTP.
   - Isso inclui validação de dados, autenticação de usuários, manipulação de erros, entre outras tarefas.

4. **Adição de Funcionalidades:**
   - Os middlewares também são usados ​​para adicionar funcionalidades adicionais ao aplicativo Express.
   - Por exemplo, eles podem lidar com sessões de usuário, compactar respostas, definir cabeçalhos de segurança, entre outras coisas.

Em resumo, os middlewares no Express são uma parte fundamental do desenvolvimento de aplicativos web. Eles permitem que você organize e manipule o fluxo de solicitação e resposta de maneira flexível e modular, facilitando o desenvolvimento de aplicativos robustos e escaláveis.


Neste exemplo, vamos criar um aplicativo de lista de tarefas (to-do list) que permite adicionar e visualizar tarefas. Vamos criar três middlewares:

- `logger`: Para registrar todas as solicitações HTTP recebidas pelo servidor.
- `authenticator`: Para simular a autenticação do usuário. Este middleware verificará se o cabeçalho Authorization está presente na solicitação.
- `errorHandler`: Para lidar com erros de servidor, como erros 404 (recurso não encontrado) e erros internos do servidor.

Vamos estruturar o projeto da seguinte forma:

~~~txt
exercicio4_middlewares/
│   
├── src/
│   ├── controllers
│   │   └── taskController.js
│   └── middlewares  
│       ├── logger.js
│       ├── authenticator.js
│       └── errorHandler.js
│
├── app.js
├── routes.js
└── package.json
~~~

Aqui está o código para cada arquivo:

`app.js`:

~~~javascript
const express = require('express');
const app = express();
const routes = require('./routes');

const loggerMiddleware = require('./src/middlewares/logger');
const authMiddleware = require('./src/middlewares/authenticator');
const errorHandlerMiddleware = require('./src/middlewares/errorHandler');

app.use(express.urlencoded({ exetended: true }));

// Middlewares globais
app.use(loggerMiddleware);
app.use(authMiddleware);

// Rotas
app.use(routes);

// Middleware de tratamento de erros
app.use(errorHandlerMiddleware);

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor Express está rodando em http://localhost:${port}`);
});
~~~

`routes.js`:

~~~javascript
const express = require('express');
const router = express.Router();

const taskController = require('./src/controllers/taksController');

//Rota index
router.get('/', taskController.index)

// Rota para listar tarefas
router.get('/tasks', taskController.listTasks);

// Rota para adicionar tarefa
router.post('/', taskController.addTask);

module.exports = router;
~~~

`src/middlewares/logger.js`:

~~~javascript
const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};

module.exports = loggerMiddleware;

~~~

`src/middlewares/authenticator.js`:

~~~javascript
const authMiddleware = (req, res, next) => {
    // const token = req.headers.authorization;
    // if (!token) {
    //     return res.status(401).send('Token de autenticação ausente');
    // }
    // // Simulação de autenticação
    // if (token !== 'meuTokenSecreto') {
    //     return res.status(403).send('Token de autenticação inválido');
    // }
    console.log('Autenticação de Token!')
    next();
};

module.exports = authMiddleware;

~~~

`src/middlewares/errorHandler.js`:

~~~javascript
const errorHandlerMiddleware = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Erro interno do servidor');
};

module.exports = errorHandlerMiddleware;

~~~

`controllers/taskController.js`:

~~~javascript
const tasks = [];

exports.index = (req, res) => {
  const formHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Adicionar Tarefa</title>
    </head>
    <body>
      <h1>Adicionar Tarefa</h1>
      <form action="/" method="POST">
        <label for="task">Tarefa:</label>
        <input type="text" id="task" name="task" required>
        <button type="submit">Adicionar</button>
      </form>
    </body>
    </html>
  `;

  res.send(formHtml);
};

// Adiciona uma nova tarefa
exports.addTask = (req, res) => {
  const { task } = req.body;
  tasks.push(task);
  res.status(201).send('Tarefa adicionada com sucesso');
};

// Lista todas as tarefas
exports.listTasks = (req, res) => {
  res.json(tasks);
};

~~~

O middleware pode ser incrementado na chamada de rota, podendo flexibilizar a sua chamada.

Aqui está o código do middleware:

~~~javascript
// src/middlewares/logRoute.js

const logRouteMiddleware = (req, res, next) => {
  console.log(`Rota acessada: ${req.method} ${req.url}`);
  next();
};

module.exports = logRouteMiddleware;
~~~

Agora, vamos usar este middleware em nosso aplicativo Express. Vou incluir este middleware na rota index `/` como um exemplo. Aqui está como ficaria o código:

~~~javascript
const express = require('express');
const router = express.Router();

const taskController = require('./src/controllers/taksController');

const logRouteMiddleware = require('./src/middleware/logRoute');

//Rota index
router.get('/', logRouteMiddleware, taskController.index)

// Rota para listar tarefas
router.get('/tasks', taskController.listTasks);

// Rota para adicionar tarefa
router.post('/', taskController.addTask);

module.exports = router;

~~~

### Webpack + Express

Para mesclar arquivos de um modelo Webpack em um aplicativo Express, você pode configurar o Webpack para compilar e gerar os arquivos estáticos, e então configurar o Express para servir esses arquivos estáticos. Aqui está um exemplo de como configurar todos os arquivos e diretórios: [Clique aqui](../projetos/10_/exercicio3_express/).

## Projetos e exercícios praticos

Os projetos e exericicos práticos podem ser encontrados em: `projetos/10_` ou [Clicando Aqui](../projetos/10_/).
