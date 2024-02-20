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
