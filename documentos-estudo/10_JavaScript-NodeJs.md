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
## Projetos e exercícios praticos

s projetos e exericicos práticos podem ser encontrados em: `projetos/10_` ou [Clicando Aqui](../projetos/10_/).
