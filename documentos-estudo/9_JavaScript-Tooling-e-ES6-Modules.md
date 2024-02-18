# JavaScript Tooling e ES6 Modules

ndice

- [JavaScript Tooling e ES6 Modules](#javascript-tooling-e-es6-modules)
  - [Babel](#babel)
    - [Como Utilizar o Babel em um Projeto Real](#como-utilizar-o-babel-em-um-projeto-real)
    - [Exemplo prático com o Babel](#exemplo-prático-com-o-babel)
  - [Webpack](#webpack)
    - [Como Utilizar o Webpack em um Projeto Real](#como-utilizar-o-webpack-em-um-projeto-real)
    - [Exemplo prático com o Webpack](#exemplo-prático-com-o-webpack)
  - [ES6 Modules - Import/Export](#es6-modules---importexport)
  - [Projetos e exercicios pratcos](#projetos-e-exercicios-pratcos)

## Babel

O Babel é uma ferramenta popular em JavaScript que permite aos desenvolvedores escrever código usando recursos mais recentes da linguagem, como classes, arrow functions, destructuring, async/await, e muitos outros, mesmo em navegadores que não oferecem suporte nativo a esses recursos. Ele funciona transpilando (convertendo) código JavaScript moderno para uma versão mais antiga que é compatível com uma ampla gama de navegadores.

Principais características e benefícios do Babel:

- **Compatibilidade de navegadores**: Permite que você escreva código usando os recursos mais recentes da linguagem JavaScript, enquanto ainda garante que ele funcione em navegadores mais antigos que não suportam esses recursos.
- **Extensibilidade**: Oferece suporte a plugins que permitem estender suas funcionalidades. Isso permite configurar o Babel para atender às necessidades específicas do seu projeto.
- **Integração com outras ferramentas**: Pode ser facilmente integrado com outras ferramentas de desenvolvimento, como Webpack, Parcel, e outros, para automatizar o processo de transpilação e garantir uma experiência de desenvolvimento suave.
- **Suporte para JSX**: Permite escrever código JSX usado em bibliotecas como React, e o converte para JavaScript padrão que os navegadores entendem.

Facilidade de uso: É fácil de configurar e usar, com uma configuração mínima necessária para começar a transpilar código.

### Como Utilizar o Babel em um Projeto Real

Para utilizar o Babel em um projeto real, geralmente seguimos os seguintes passos:

1. **Instalação do Babel**: Primeiro, instalamos o Babel no nosso projeto. Podemos fazer isso utilizando o npm (Node Package Manager) ou o Yarn. Podemos instalar os pacotes necessários do Babel executando o seguinte comando no terminal, na raiz do projeto:

    ~~~bash
    # Código Bash

    npm install --save-dev @babel/core @babel/cli @babel/preset-env
    ~~~

    Este comando instala o Babel Core (o coração do Babel), o CLI (Interface de Linha de Comando) para executar o Babel a partir do terminal, e o preset-env, que é um conjunto de plugins do Babel para habilitar as últimas funcionalidades do JavaScript.

2. **Configuração do Babel**: Após a instalação, precisamos configurar o Babel para que ele saiba quais transformações aplicar ao nosso código JavaScript. Podemos criar um arquivo chamado .babelrc na raiz do projeto e adicionar a seguinte configuração:

    ~~~bash
    # Código Bash

    {
    "presets": ["@babel/preset-env"]
    }
    ~~~

    Isso diz ao Babel para usar o preset-env para transpilar o código para a versão do JavaScript compatível com os navegadores definidos no ambiente de destino.

3. Execução do Babel: Podemos executar o Babel a partir do terminal, passando o arquivo ou diretório que desejamos transpilar. Por exemplo, se tivermos um arquivo `app.js` na raiz do projeto que queremos transpilar, podemos executar o seguinte comando:

    ~~~bash
    # Código Bash

    npx babel app.js --out-file app-transpilado.js
    ~~~

    Isso transpilará o arquivo `app.js` usando as configurações do Babel e salvará o resultado no arquivo `app-transpilado.js`.

4. Integração com Ferramentas de Construção: Em projetos mais complexos, é comum integrar o Babel com outras ferramentas de construção, como Webpack ou Parcel, para automatizar o processo de transpilação e otimização do código. Por exemplo, se estivermos usando o Webpack, podemos configurá-lo para usar o Babel como um loader. Aqui está um exemplo básico de configuração do Webpack com o Babel:

    ~~~bash
    # Código Bash

    module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader'
            }
        }
        ]
    }
    };
    ~~~

    Isso dirá ao Webpack para usar o Babel para transpilar arquivos JavaScript no diretório src, excluindo qualquer código de biblioteca do node_modules.

5. Uso no Desenvolvimento e Produção: Durante o desenvolvimento, podemos executar o Babel sob demanda para transpilar nosso código à medida que fazemos alterações. Em produção, geralmente configuramos a compilação do Babel como parte do processo de construção, para gerar código otimizado e compatível com os navegadores mais antigos.

### Exemplo prático com o Babel

O exemplo com decrição de passo a passo pode ser acessado em:
    - `projetos/9_/1_babel-example` ou [clicando aqui](https://github.com/max-santos-d/estudo-web-js/tree/main/projetos/9_/1_babel-example)

## Webpack

 Webpack é uma ferramenta popular de código aberto utilizada para empacotar e modularizar aplicações web JavaScript. Ele é frequentemente utilizado em conjunto com outras ferramentas modernas de desenvolvimento web, como Babel, para criar uma pipeline de construção eficiente para projetos JavaScript.

Aqui estão algumas características e funcionalidades do Webpack:

- **Empacotamento de Módulos**: O Webpack permite a importação de módulos JavaScript, CSS, arquivos de imagem e outros tipos de arquivos em um único bundle, simplificando o carregamento e o gerenciamento de dependências.
- **Gerenciamento de Dependências**: O Webpack analisa as dependências do seu código e as inclui no bundle final. Isso facilita o desenvolvimento de aplicações modulares, onde os diferentes componentes dependem uns dos outros.
- **Suporte a Plugins**: O Webpack é altamente extensível e oferece suporte a uma ampla variedade de plugins que podem ser utilizados para realizar tarefas adicionais durante o processo de construção, como otimização de código, minificação, geração de arquivos de manifesto, entre outros.
- **Criação de Ambientes de Desenvolvimento e Produção**: O Webpack pode ser configurado para gerar bundles otimizados para ambientes de desenvolvimento e produção. No ambiente de desenvolvimento, ele pode habilitar funcionalidades como hot module replacement (HMR) para recarregar automaticamente as alterações no navegador sem a necessidade de atualizar a página. No ambiente de produção, ele pode realizar otimizações de tamanho e desempenho para garantir que o código seja eficiente e rápido de carregar.
- **Suporte a Diferentes Tipos de Arquivos**: Além de JavaScript, o Webpack suporta a importação de uma variedade de outros tipos de arquivos, como CSS, SASS, LESS, arquivos de imagem, fontes e muito mais. Ele pode ser configurado para processar esses arquivos e incluí-los no bundle final.
- **Criação de Múltiplos Bundles**: O Webpack permite criar múltiplos bundles para diferentes partes da aplicação. Isso é útil para dividir a lógica da aplicação em partes menores e carregar apenas o código necessário para cada página ou componente.
- **Integração com Outras Ferramentas**: O Webpack é frequentemente utilizado em conjunto com outras ferramentas de desenvolvimento web, como Babel, ESLint, Jest, entre outros. Ele pode ser configurado para trabalhar em conjunto com essas ferramentas para criar uma pipeline de construção poderosa e eficiente.

### Como Utilizar o Webpack em um Projeto Real

**Instalação do Webpack**: Primeiro, instalamos o Webpack e suas dependências no nosso projeto. Podemos fazer isso utilizando o npm (Node Package Manager) ou o Yarn. Podemos instalar os pacotes necessários do Webpack executando o seguinte comando no terminal, na raiz do projeto:

~~~bash
# Código Bash

npm install --save-dev webpack webpack-cli
~~~

**Criação de Arquivo de Configuração**: Em seguida, criamos um arquivo de configuração do Webpack na raiz do nosso projeto. Este arquivo geralmente é chamado de webpack.config.js e contém as configurações do Webpack, como entrada, saída, loaders e plugins. Aqui está um exemplo básico de arquivo de configuração do Webpack:

~~~javascript
// Código JavaScript

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
~~~

Este exemplo configura o Webpack para ler o arquivo `src/index.js` como ponto de entrada e gerar o arquivo `dist/bundle.js` como saída.

**Configuração de Loaders**: Em projetos mais complexos, podemos precisar configurar loaders para processar diferentes tipos de arquivos, como JavaScript, CSS, arquivos de imagem, entre outros. Por exemplo, podemos adicionar um loader para processar arquivos JavaScript usando Babel:

~~~javascript
// Código JavaScript

module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }
  ]
}
~~~

Este exemplo configura o Webpack para usar o `babel-loader` para transpilar arquivos JavaScript no diretório `src`, excluindo qualquer código de biblioteca do `node_modules`.

**Execução do Webpack**: Com o arquivo de configuração configurado, podemos executar o Webpack a partir do terminal para criar o bundle da nossa aplicação. Podemos fazer isso executando o seguinte comando:

~~~bash
# Código Bash

npx webpack
~~~

Isso instrui o Webpack a ler o arquivo de configuração `webpack.config.js` e gerar o bundle com base nas configurações fornecidas.

**Integração com Outras Ferramentas**: Por fim, podemos integrar o Webpack com outras ferramentas de desenvolvimento, como um servidor de desenvolvimento para recarregar automaticamente o navegador quando as alterações são feitas no código, ou um sistema de construção para automatizar tarefas de construção, teste e implantação.

### Exemplo prático com o Webpack

O exemplo com decrição de passo a passo pode ser acessado em:
    - `projetos/9_/2_webpack-example` ou [clicando aqui](https://github.com/max-santos-d/estudo-web-js/tree/main/projetos/9_/2_webpack-example)

## ES6 Modules - Import/Export

~~~javascript
// Código JavaScript


~~~

Os módulos ES6 (também conhecidos como ES2015) introduziram uma maneira nativa de modularizar o código JavaScript, permitindo que os desenvolvedores organizem melhor seus projetos e reutilizem o código de forma mais eficiente. Isso é alcançado através das instruções import e export.

Import

A instrução `import` é usada para importar funcionalidades (como variáveis, funções, classes) de outros módulos. Existem várias maneiras de usar o `import`:

Importar uma única exportação:

~~~javascript
// Código JavaScript

import { minhaFuncao } from './meuModulo';
~~~

Importar várias exportações:

~~~javascript
// Código JavaScript

import { minhaFuncao, minhaVariavel } from './meuModulo';
~~~


Importar todas as exportações como um objeto:

~~~javascript
// Código JavaScript

import * as meuModulo from './meuModulo';
~~~

Export

A instrução export é usada para exportar funcionalidades de um módulo. Existem várias maneiras de usar o export:

Exportar uma função, variável ou classe:

~~~javascript
// Código JavaScript

export function minhaFuncao() {
  // código da função
}

export const minhaVariavel = 'valor';
~~~

Exportar uma função por padrão (exportação padrão):

~~~javascript
// Código JavaScript

export default function minhaFuncao() {
  // código da função
}
~~~

Exemplo de Uso:

Considere dois arquivos, `meuModulo.js` e `app.js`:

~~~javascript
// Código JavaScript

// meuModulo.js
export function minhaFuncao() {
  console.log('Minha função');
}

export const minhaVariavel = 'Meu valor';

// app.js
import { minhaFuncao, minhaVariavel } from './meuModulo';

minhaFuncao(); // Saída: Minha função
console.log(minhaVariavel); // Saída: Meu valor
~~~

Neste exemplo, `minhaFuncao` e minhaVariavel são importadas de `meuModulo.js` para `app.js` e são usadas como qualquer outra função ou variável no arquivo `app.js`.

## Projetos e exercicios pratcos

Os projetos e exericicos práticos podem ser encontrados em `projetos/9_` ou [Clicando Aqui](https://github.com/max-santos-d/estudo-web-js/tree/main/projetos/9_).
