# JavaScript básico

Índice

- [JavaScript básico](#javascript-básico)
  - [`console.log` em JavaScript?](#consolelog-em-javascript)
  - [Diferenças na Execução do Código JavaScript entre o Node.js e o Navegador](#diferenças-na-execução-do-código-javascript-entre-o-nodejs-e-o-navegador)
  - [Variáveis `let` em JavaScript](#variáveis-let-em-javascript)
  - [Variáveis `const` em JavaScript](#variáveis-const-em-javascript)
  - [Diferença entre `let` e `var` em JavaScript](#diferença-entre-let-e-var-em-javascript)
  - [Tipos de dados primitivos em JavaScript e suas funções](#tipos-de-dados-primitivos-em-javascript-e-suas-funções)
  - [Operadores em JavaScript e sua Utilidade](#operadores-em-javascript-e-sua-utilidade)
    - [Operadores Aritméticos](#operadores-aritméticos)
    - [Operadores de Atribuição](#operadores-de-atribuição)
    - [Operadores de Incremento e Decremento](#operadores-de-incremento-e-decremento)
  - [Funcionalidades do `alert`, `confirm` e `prompt` no Navegador](#funcionalidades-do-alert-confirm-e-prompt-no-navegador)
    - [`alert`](#alert)
    - [`confirm`](#confirm)
  - [Objeto `Math` em JavaScript](#objeto-math-em-javascript)
    - [Utilizações comuns do Objeto Math](#utilizações-comuns-do-objeto-math)
    - [Exemplo de Utilização](#exemplo-de-utilização)
  - [Const com valores mutáveis](#const-com-valores-mutáveis)
    - [Exemplos de Const com valores mutáveis](#exemplos-de-const-com-valores-mutáveis)
  - [`Array` em JavaScript](#array-em-javascript)
    - [Exemplo de `Array` em JavaScript](#exemplo-de-array-em-javascript)
  - [Funções em JavaScript](#funções-em-javascript)
    - [Exemplo da Utilização de Funções](#exemplo-da-utilização-de-funções)
  - [Objetos em JavaScript](#objetos-em-javascript)
    - [Exemplo da Utilização de Objetos](#exemplo-da-utilização-de-objetos)
  - [Valores Primitivos e Valores por Referência em JavaScript](#valores-primitivos-e-valores-por-referência-em-javascript)
    - [Valores Primitivos](#valores-primitivos)
    - [Exemplo da Utilização Valores Primitivos](#exemplo-da-utilização-valores-primitivos)

## `console.log` em JavaScript?

O `console.log` é um método do objeto `console` em JavaScript. Ele exibe mensagens de registro no console do navegador ou em ambientes de execução JavaScript, como o Node.js.

Para que serve o console.log em JavaScript?

O `console.log` é usado principalmente para depuração e diagnóstico durante o desenvolvimento de aplicativos. Ele permite que os desenvolvedores imprimam valores, variáveis e mensagens no console, o que ajuda a entender o fluxo de execução do programa e a identificar possíveis erros ou problemas de lógica.

## Diferenças na Execução do Código JavaScript entre o Node.js e o Navegador

Ambiente de Execução:

- **Node.js:**
  - Executa JavaScript fora do navegador, no lado do servidor.
  - Fornece acesso a recursos do sistema operacional, como sistema de arquivos e rede.
  - Usa o mecanismo V8 do Google Chrome para executar JavaScript.

- **Navegador:**
  - Executa JavaScript dentro de um ambiente de navegador da web.
  - Fornece acesso ao DOM (Document Object Model) e APIs do navegador, como manipulação de eventos e elementos HTML.
  - Usa o mecanismo de renderização específico do navegador para executar JavaScript.

Recursos Disponíveis:

- **Node.js:**
  - Acesso ao sistema de arquivos, rede, módulos e bibliotecas do Node.js.
  - Funcionalidades para construir aplicativos de servidor, CLI (Command Line Interface) e ferramentas de linha de comando.

- **Navegador:**
  - Acesso ao DOM, eventos do navegador, APIs Web (como Geolocalização, Armazenamento Local, Canvas etc.).
  - Funcionalidades para construir aplicativos da web interativos e responsivos.

Entrada e Saída:

- **Node.js:**
  - Entrada/saída assíncrona e baseada em eventos.
  - Usa módulos como `fs` para manipulação de arquivos e `http` para criar servidores HTTP.

- **Navegador:**
  - Interage com o usuário por meio de eventos do mouse, teclado e elementos da página.
  - Manipula entrada/saída assíncrona, como solicitações AJAX e eventos de usuário.

Dependências e Pacotes:

- **Node.js:**
  - Usa o npm (Node Package Manager) para instalar, gerenciar e compartilhar pacotes e dependências.
  - Utiliza módulos CommonJS para modularizar o código.

- **Navegador:**
  - Usa ferramentas como Webpack, Browserify ou ES6 Modules para gerenciar dependências e modularizar o código.
  - Utiliza módulos ES6 (ECMAScript 2015) para modularizar o código.

Essas são algumas das principais diferenças na execução do código JavaScript entre o Node.js e o navegador.

Um arquivo `.js` pode ser execultado diretamente no terminal pelo motor do node, tanto no terminal do sistema, quanto no terminal do vscode. Para executar um arquivo JavaScript no Node.js, siga estes passos:

- Abra o terminal: Abra o terminal ou prompt de comando no seu sistema operacional.
- Navegue até o diretório do seu arquivo JavaScript: Use o comando `cd` para navegar até o diretório onde está localizado o arquivo JavaScript que deseja executar.
- Execute o arquivo JavaScript: Use o comando `node` seguido do nome do arquivo JavaScript que deseja executar. Por exemplo:

~~~bash
# Código bash

node seu_arquivo.js
~~~

Substitua `seu_arquivo.js` pelo nome do seu arquivo JavaScript.

Após seguir esses passos, o Node.js executará o arquivo JavaScript e você verá a saída no terminal, se houver alguma, dependendo do que estiver definido no arquivo.

## Variáveis `let` em JavaScript

As variáveis `let` são uma forma de declarar variáveis em JavaScript, introduzida no ECMAScript 6 (ES6). Elas permitem a criação de variáveis cujos valores podem ser alterados posteriormente durante a execução do programa.

Para que utilizar variáveis let em JavaScript?

- **Escopo de bloco:** As variáveis `let` têm escopo de bloco, o que significa que elas só são acessíveis dentro do bloco em que foram declaradas.

- **Reatribuição de valor:** Ao contrário das variáveis `const`, as variáveis `let` permitem a reatribuição de valor.

- **Evita poluição do escopo global:** Usar `let` ajuda a evitar a poluição do escopo global, pois limita a visibilidade da variável ao bloco em que é declarada.

- **Loop for:** As variáveis `let` são frequentemente usadas em loops `for`, pois cada iteração do loop cria uma nova instância da variável `let`, evitando problemas comuns de escopo em loops.

## Variáveis `const` em JavaScript

As variáveis `const` são uma forma de declarar variáveis em JavaScript introduzida no ECMAScript 6 (ES6). Elas são utilizadas para declarar constantes, ou seja, variáveis cujo valor não pode ser alterado depois de ser atribuído inicialmente.

Para que utilizar variáveis const em JavaScript?

- **Imutabilidade:** As variáveis `const` garantem que o valor atribuído a elas permaneça o mesmo durante a execução do programa, tornando-as úteis para valores que não devem ser alterados.

- **Legibilidade e segurança:** O uso de `const` torna o código mais legível, indicando que o valor de uma variável não deve ser modificado intencionalmente. Isso também ajuda a prevenir erros de programação causados por reatribuição acidental.

- **Escopo de bloco:** Assim como `let`, as variáveis `const` têm escopo de bloco, o que significa que elas só são acessíveis dentro do bloco em que foram declaradas.

- **Declaração de constantes:** É uma prática comum utilizar `const` para declarar valores constantes, como valores literais, URLs, chaves de API etc.

## Diferença entre `let` e `var` em JavaScript

Escopo de bloco:

- **`let`:** Tem escopo de bloco, o que significa que ela só é acessível dentro do bloco em que foi declarada.
- **`var`:** Tem escopo de função ou escopo global, o que pode levar a problemas de escopo, especialmente em loops e funções aninhadas.

Hoisting:

- **`let`:** Não é içada (hoisted) para o início do bloco, o que significa que ela não pode ser usada antes de ser declarada.
- **`var`:** É içada para o início da função ou escopo global, o que pode resultar em comportamento inesperado, permitindo que a variável seja usada antes de ser declarada.

Reatribuição de valor:

- **`let`:** Permite a reatribuição de valor.
- **`var`:** Também permite a reatribuição de valor.

Uso em loops:

- **`let`:** Recomendado para loops `for`, pois cria uma variável única para cada iteração, evitando problemas comuns de escopo.
- **`var`:** Pode levar a problemas de escopo em loops `for`, especialmente em closures.

Em geral, o uso de `let` é preferível a `var` devido ao seu escopo de bloco mais restrito e comportamento mais previsível.

## Tipos de dados primitivos em JavaScript e suas funções

1. **Number:**
   - Representa números inteiros ou de ponto flutuante.
   - É utilizado para realizar operações matemáticas e armazenar valores numéricos.

2. **String:**
   - Representa uma sequência de caracteres.
   - É utilizada para armazenar e manipular texto.

3. **Boolean:**
   - Representa um valor lógico verdadeiro (`true`) ou falso (`false`).
   - É utilizada para expressar condições lógicas e controlar o fluxo de execução do programa.

4. **Null:**
   - Representa a ausência intencional de qualquer valor ou objeto.
   - É utilizada quando uma variável precisa ser explicitamente definida como vazia ou nula.

5. **Undefined:**
   - Indica que uma variável foi declarada, mas ainda não foi atribuída a um valor.
   - É utilizada como valor padrão para variáveis não inicializadas.

6. **Symbol:**
   - Introduzido no ECMAScript 6 (ES6).
   - Representa um identificador único e imutável, útil para criação de propriedades de objetos únicas.

7. **BigInt:**
   - Introduzido no ECMAScript 11 (ES11).
   - Representa números inteiros maiores que o limite do tipo `Number`.
   - É utilizado para operações matemáticas que envolvem números inteiros muito grandes.

Esses tipos de dados primitivos são os blocos fundamentais para representar e manipular informações em JavaScript.

## Operadores em JavaScript e sua Utilidade

### Operadores Aritméticos

1. **Adição (+):** Utilizado para adicionar dois valores.
2. **Subtração (-):** Utilizado para subtrair um valor de outro.
3. **Multiplicação (*):** Utilizado para multiplicar dois valores.
4. **Divisão (/):** Utilizado para dividir um valor pelo outro.
5. **Módulo (%):** Retorna o resto da divisão entre dois valores.
6. **Incremento (++):** Incrementa o valor da variável em 1.
7. **Decremento (--):** Decrementa o valor da variável em 1.

### Operadores de Atribuição

1. **Atribuição simples (=):** Atribui o valor à variável.
2. **Atribuição com Adição (+=):** Adiciona o valor à variável e atribui o resultado.
3. **Atribuição com Subtração (-=):** Subtrai o valor da variável e atribui o resultado.
4. **Atribuição com Multiplicação (*=):** Multiplica o valor da variável e atribui o resultado.
5. **Atribuição com Divisão (/=):** Divide o valor da variável e atribui o resultado.
6. **Atribuição com Módulo (%=):** Calcula o módulo do valor da variável e atribui o resultado.
7. **Atribuição com Concatenação (+=) (em strings):** Concatena o valor à variável e atribui o resultado.

### Operadores de Incremento e Decremento

1. **Pré-incremento (++variável):** Incrementa o valor da variável antes de sua utilização.
2. **Pós-incremento (variável++):** Incrementa o valor da variável após sua utilização.
3. **Pré-decremento (--variável):** Decrementa o valor da variável antes de sua utilização.
4. **Pós-decremento (variável--):** Decrementa o valor da variável após sua utilização.

Esses operadores são fundamentais para realizar cálculos, manipular valores de variáveis e atribuir valores a variáveis em JavaScript.

A ordem de execução dos operadores em JavaScript segue as regras da precedência de operadores. Aqui está a ordem da mais alta para a mais baixa precedência:

1. **Parênteses `()`:** Expressões entre parênteses têm a mais alta precedência e são avaliadas primeiro.
2. **Incremento (`++`) e Decremento (`--`):** Operadores de incremento e decremento têm a segunda mais alta precedência.
3. **Multiplicação (`*`), Divisão (`/`) e Módulo (`%`):** Estes operadores têm a terceira mais alta precedência e são avaliados antes de adições e subtrações.
4. **Adição (`+`) e Subtração (`-`):** Estes operadores têm a quarta mais alta precedência.
5. **Operadores de Concatenação de String (`+`):** Quando usado com strings, o operador de adição (`+`) é usado para concatenar strings e tem uma precedência mais alta do que a adição aritmética.
6. **Atribuição (`=`) e Operadores de Atribuição Combinada (`+=`, `-=`, `*=`, `/=`, `%=`):** Estes operadores têm a mais baixa precedência e são avaliados por último.

É importante notar que, mesmo dentro da mesma precedência, a associação (esquerda para direita ou direita para esquerda) pode variar dependendo do operador. Por exemplo, a adição (`+`) é associativa da esquerda para a direita, o que significa que as operações são realizadas da esquerda para a direita. Por outro lado, a atribuição (`=`) é associativa da direita para a esquerda, o que significa que a atribuição é realizada da direita para a esquerda.

Seguir a ordem de precedência dos operadores é fundamental para garantir que as expressões sejam avaliadas conforme desejado e para evitar comportamentos inesperados em seu código.

## Funcionalidades do `alert`, `confirm` e `prompt` no Navegador

### `alert`

- **Funcionalidade:** O `alert` exibe uma caixa de diálogo com uma mensagem para o usuário.
- **Utilidade:** É frequentemente usado para exibir mensagens informativas, avisos ou instruções simples para o usuário.
- **Exemplo de Uso:**

~~~javascript
// Código JavaScript

  alert("Bem-vindo ao nosso site!");
~~~

### `confirm`

- **Funcionalidade**: O `confirm` exibe uma caixa de diálogo com uma mensagem e botões de "OK" e "Cancelar".
**Utilidade**: É usado para solicitar uma confirmação do usuário, onde o usuário pode escolher entre duas opções (OK ou Cancelar).
- **Retorno**: Retorna `true` se o usuário clicar em "OK" e `false` se clicar em "Cancelar".
- **Exemplo de Uso**:

~~~javascript
// Código JavaScript

if (confirm("Tem certeza de que deseja excluir este item?")) {
    // Código para excluir o item
} else {
    // Código para cancelar a operação
}
~~~

`prompt`:

- **Funcionalidade**: O prompt exibe uma caixa de diálogo com uma mensagem, um campo de entrada e botões de "OK" e "Cancelar".
- **Utilidade**: É usado para solicitar que o usuário insira alguma informação.
- **Retorno**: Retorna o valor inserido pelo usuário como uma string se o usuário clicar em "OK" e null se clicar em "Cancelar".
- **Exemplo de Uso**:

~~~javascript
// Código JavaScript

let nome = prompt("Por favor, insira seu nome:");
if (nome !== null) {
    alert("Olá, " + nome + "! Bem-vindo ao nosso site.");
}
~~~

Essas funcionalidades são úteis para interagir com o usuário em aplicativos da web, solicitando informações, confirmações ou exibindo mensagens de forma dinâmica.

## Objeto `Math` em JavaScript

O objeto `Math` é um objeto embutido em JavaScript que fornece métodos e constantes para realizar operações matemáticas.

### Utilizações comuns do Objeto Math

1. **Operações Matemáticas:**
   - O objeto `Math` fornece métodos para realizar operações matemáticas comuns, como:
     - `Math.abs()`: Retorna o valor absoluto de um número.
     - `Math.sqrt()`: Retorna a raiz quadrada de um número.
     - `Math.pow()`: Retorna a base elevada à potência de um expoente.
     - `Math.min()`: Retorna o menor de dois ou mais números.
     - `Math.max()`: Retorna o maior de dois ou mais números.
     - E muitos outros.

2. **Constantes Matemáticas:**
   - O objeto `Math` possui constantes matemáticas úteis, como:
     - `Math.PI`: Retorna o valor de π (pi).
     - `Math.E`: Retorna o valor de e (número de Euler).

3. **Funções Trigonométricas:**
   - O objeto `Math` fornece métodos para calcular funções trigonométricas, como:
     - `Math.sin()`: Retorna o seno de um ângulo (em radianos).
     - `Math.cos()`: Retorna o cosseno de um ângulo (em radianos).
     - `Math.tan()`: Retorna a tangente de um ângulo (em radianos).
     - E outras funções trigonométricas como `asin`, `acos`, `atan` etc.

4. **Funções Exponenciais e Logarítmicas:**
   - O objeto `Math` também possui métodos para calcular funções exponenciais e logarítmicas, como:
     - `Math.exp()`: Retorna o valor de e (número de Euler) elevado à potência de um número.
     - `Math.log()`: Retorna o logaritmo natural (base e) de um número.
     - E outros métodos como `log10`, `log2` etc.

### Exemplo de Utilização

~~~javascript
// Código JavaScript

let raio = 5;
let area = Math.PI * Math.pow(raio, 2);
console.log("A área do círculo é:", area);
~~~

O Objeto Math é uma ferramenta poderosa para realizar cálculos matemáticos complexos em JavaScript.

## Const com valores mutáveis

`const` descreve uma variável que não pode ser reatribuída (com o operador de atribuição `=`). Depois de criá-la, não podemos fazer algo assim:

~~~javascript
// Código JavaScript

const nome = 'luiz';
nome = 'joão'; // Erro: Assignment to constant variable.
~~~

Porém, existe uma diferença entre variável e valor.

Variáveis são como **um apelido para um valor**, uma espécie de alias para mencionar algum valor salvo na memória.

Já valores são os dados que realmente ficam salvos na memória e sustentam determinado tipo. Alguns tipos de valores **são imutáveis**, como `number`, `string`, `boolean`, `undefined`, `null`, `symbol` e `bigint` ([os primitivos todos são imutáveis](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)). Outros tipos são mutáveis, como `arrays` e `objetos` (objetos em geral são mutáveis, com exceção de `null`).

Valores mutáveis geralmente são estruturas de dados mais complexas que sustentam outros valores ou comportamentos internamente. Como é o caso do array, que pode ser composto por vários outros tipos de dados.

Quando usamos `const` com tipos primitivos, esse valor nunca mais poderá ser alterado. Nesse caso, além de `const` não permitir reatribuição, o valor também é imutável (consequentemente, nunca podemos alterar essa constante).

Já quando usamos `const` com valores mutáveis (como arrays e objetos), a variável continua sendo constante, porém os valores dentro do objeto poderão ser alterados. Isso acontece porque quando alteramos um valor interno de um objeto, não ocorre a reatribuição da variável com sinal de atribuição = (a variável continua apontando para o mesmo local na memória), apenas a alteração de um valor interno do mesmo objeto.

Por este motivo, pode-se usar `const` com objetos mutáveis e ainda assim alterar seus valores internos. A única coisa que não vamos conseguir fazer é reatribuir o valor da variável.

### Exemplos de Const com valores mutáveis

**Isso Pode:**

~~~javascript
// Código JavaScript

const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]
~~~

**Isso Não Pode:**

~~~javascript
// Código JavaScript

const array = [1, 2, 3, 4, 5];
array = 'Legal'; // Assignment to constant variable.
~~~

## `Array` em JavaScript

Um array em JavaScript é uma estrutura de dados que armazena uma coleção ordenada de elementos. Cada elemento em um array é acessado por um índice numérico.

Utilizações do Array:

1. **Armazenamento de Dados:**
   - Arrays são usados para armazenar coleções de dados relacionados, como números, strings, objetos e até outros arrays.

2. **Acesso a Elementos:**
   - Os elementos de um array são acessados por meio de índices numéricos. O primeiro elemento tem índice 0, o segundo elemento tem índice 1 e assim por diante.

3. **Iteração:**
   - Os loops `for`, `while` e `for...of` são frequentemente usados para percorrer os elementos de um array e realizar operações em cada elemento.

4. **Manipulação de Dados:**
   - Arrays possuem vários métodos embutidos, como `push`, `pop`, `shift`, `unshift`, `splice`, `slice`, entre outros, que permitem adicionar, remover e modificar elementos do array.

5. **Ordenação e Busca:**
   - Arrays podem ser ordenados usando o método `sort()` e pesquisados usando métodos como `indexOf()` e `includes()`.

### Exemplo de `Array` em JavaScript

~~~javascript
// Código JavaScript

// Criando um array de números
let numeros = [1, 2, 3, 4, 5];

// Acessando elementos do array
console.log(numeros[0]); // Saída: 1
console.log(numeros[2]); // Saída: 3

// Iterando sobre os elementos do array
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// Adicionando um novo elemento ao array
numeros.push(6);

// Removendo o último elemento do array
numeros.pop();

// Encontrando o índice de um elemento
console.log(numeros.indexOf(3)); // Saída: 2
~~~

Os arrays são uma parte fundamental do JavaScript e são amplamente utilizados para armazenar e manipular coleções de dados de forma eficiente.

## Funções em JavaScript

As funções em JavaScript são blocos de código reutilizáveis que realizam uma tarefa específica quando chamadas. Elas são fundamentais para organizar e reutilizar código.

Utilizações das Funções

1. **Encapsulamento de Código:**
   - Funções permitem encapsular um conjunto de instruções em um único bloco, facilitando a organização e legibilidade do código.

2. **Reutilização de Código:**
   - Ao definir uma função, você pode reutilizá-la em várias partes do seu programa, evitando a repetição de código.

3. **Abstração:**
   - Funções permitem abstrair detalhes complexos do código, tornando-o mais compreensível e modular.

4. **Passagem de Parâmetros:**
   - Funções podem aceitar parâmetros como entrada, permitindo que você personalize o comportamento da função com diferentes valores.

5. **Retorno de Valores:**
   - Funções podem retornar valores como resultado da execução, permitindo que você obtenha resultados computados dentro da função para serem usados em outras partes do código.

### Exemplo da Utilização de Funções

~~~javascript
// Código JavaScript

// Definindo uma função que soma dois números
function somar(a, b) {
    return a + b;
}

// Chamando a função e armazenando o resultado em uma variável
let resultado = somar(5, 3);
console.log(resultado); // Saída: 8
~~~

As funções são um conceito essencial em JavaScript e são usadas para criar blocos de código reutilizáveis e modulares.

## Objetos em JavaScript

Os objetos em JavaScript são estruturas de dados que permitem armazenar coleções de pares chave-valor. Cada valor é associado a uma chave única dentro do objeto.

Utilizações dos Objetos:

1. **Agrupamento de Dados:**
   - Objetos são usados para agrupar dados relacionados em uma única estrutura, permitindo acesso e manipulação eficiente dos dados.

2. **Modelagem de Entidades:**
   - Objetos podem ser usados para representar entidades do mundo real, como pessoas, produtos, veículos, etc., com propriedades que descrevem suas características e comportamentos.

3. **Organização de Código:**
   - Objetos são utilizados para organizar e estruturar o código em módulos ou classes, agrupando propriedades e métodos relacionados em um único objeto.

4. **Herança e Polimorfismo:**
   - JavaScript é uma linguagem orientada a objetos prototipada, o que significa que os objetos podem herdar propriedades e métodos de outros objetos protótipos, permitindo a criação de hierarquias de objetos e polimorfismo.

### Exemplo da Utilização de Objetos

~~~javascript
// Código JavaScript

// Definindo um objeto que representa um carro
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "prata",
    ligar: function() {
        console.log("O carro está ligado.");
    },
    desligar: function() {
        console.log("O carro está desligado.");
    }
};

// Acessando propriedades do objeto
console.log(carro.marca); // Saída: Toyota

// Chamando métodos do objeto
carro.ligar(); // Saída: O carro está ligado.
~~~

Os objetos são uma parte fundamental do JavaScript e são usados para representar e manipular dados de forma eficiente e organizada.

## Valores Primitivos e Valores por Referência em JavaScript

### Valores Primitivos

- **O que são:** Valores primitivos são dados simples e imutáveis que são armazenados diretamente na variável.
- **Tipos de Valores Primitivos:** Os tipos de valores primitivos em JavaScript são: `string`, `number`, `boolean`, `null`, `undefined`, `symbol` e `bigint`.
- **Utilização:** Valores primitivos são utilizados para armazenar dados simples, como números, strings e valores booleanos. Eles são copiados por valor quando atribuídos a outras variáveis.

Valores por Referência:

- **O que são:** Valores por referência são objetos que são armazenados na memória e têm uma referência ao local na memória onde os dados estão armazenados.
- **Tipos de Valores por Referência:** Os tipos de valores por referência em JavaScript são: objetos, arrays, funções e datas.
- **Utilização:** Valores por referência são utilizados para armazenar dados mais complexos, como coleções de dados, objetos com propriedades e métodos, ou funções. Eles são copiados por referência, o que significa que a variável armazena uma referência ao objeto na memória, não uma cópia dos dados.

### Exemplo da Utilização Valores Primitivos

~~~javascript
// Código JavaScript

// Valor Primitivo (cópia por valor)
let a = 10;
let b = a;
b = 20;
console.log(a); // Saída: 10 (a não é alterado)

// Valor por Referência (cópia por referência)
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // Saída: [1, 2, 3, 4] (arr1 é alterado)
~~~
