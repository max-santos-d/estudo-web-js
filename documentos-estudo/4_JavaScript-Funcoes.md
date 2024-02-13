# JavaScript Funções (avançado)

Índice

- [JavaScript Funções (avançado)](#javascript-funções-avançado)
  - [Maneiras de Declarar Funções em JavaScript](#maneiras-de-declarar-funções-em-javascript)
  - [Parâmetros da Função em JavaScript](#parâmetros-da-função-em-javascript)
  - [Retorno da Função em JavaScript](#retorno-da-função-em-javascript)
  - [Escopo Léxico em JavaScript](#escopo-léxico-em-javascript)
  - [Closures em JavaScript](#closures-em-javascript)
  - [Funções de Callback em JavaScript](#funções-de-callback-em-javascript)
  - [Funções Imediatamente Invocadas (IIFE) em JavaScript](#funções-imediatamente-invocadas-iife-em-javascript)
  - [Funções de Fábrica (Factory Functions) em JavaScript](#funções-de-fábrica-factory-functions-em-javascript)
  - [Funções Construtoras (Constructor Functions) em JavaScript](#funções-construtoras-constructor-functions-em-javascript)
  - [Factory Functions vs Constructor Functions](#factory-functions-vs-constructor-functions)
  - [Funções Recursivas em JavaScript](#funções-recursivas-em-javascript)
  - [Funções Geradoras em JavaScript](#funções-geradoras-em-javascript)
  - [Exercício 01 - Pratica com Factory Functions](#exercício-01---pratica-com-factory-functions)
  - [Exercício 02 - Pratica com Constructor Functions](#exercício-02---pratica-com-constructor-functions)

## Maneiras de Declarar Funções em JavaScript

Em JavaScript, existem várias maneiras de declarar funções, cada uma com sua própria sintaxe e uso específico. Abaixo estão as principais formas de declarar funções em JavaScript:

1. Declarar uma Função Tradicional:
   - Este é o método mais comum de declarar funções em JavaScript.
   - Utiliza a palavra-chave `function` seguida pelo nome da função e parênteses contendo os parâmetros.
   - O corpo da função é definido entre chaves `{}`.

2. Expressão de Função:
   - Uma expressão de função é criada atribuindo uma função a uma variável.
   - Pode ser anônima (sem nome) ou nomeada.
   - É uma forma flexível de criar funções e permite a definição de funções dentro de outras funções.

3. Arrow Function:
   - Arrow functions são uma forma mais curta e concisa de escrever funções em JavaScript, introduzidas no ES6.
   - São definidas usando a sintaxe `() => {}`.
   - Têm um comportamento especial com relação ao escopo de `this`.

4. Função Anônima:
   - Uma função anônima é uma função sem um nome associado.
   - Pode ser definida como uma expressão de função ou dentro de outros contextos, como argumentos de outras funções.

5. Função Imediatamente Invocada (IIFE):
   - Uma IIFE é uma função que é declarada e imediatamente executada.
   - É útil para criar escopos isolados e evitar poluição do escopo global.

6. Método de Objeto:
   - Em JavaScript, os objetos podem conter funções, conhecidas como métodos.
   - Os métodos de objeto são definidos dentro do objeto e podem ser chamados usando a notação de ponto.

7. Método Abreviado de Objeto (ES6):
   - O método abreviado de objeto é uma sintaxe simplificada introduzida no ES6 para definir métodos de objeto.
   - Não é necessário utilizar a palavra-chave `function` ou adicionar `:` após o nome do método.

Cada tipo de declaração de função em JavaScript oferece diferentes maneiras de definir e utilizar funções, proporcionando flexibilidade e conveniência na escrita de código.

~~~javascript
//Código JavaScript

// 1. Declarar uma Função Tradicional:
function minhaFuncao(parametro1, parametro2) {
    // Código da função
}

// 2. Expressão de Função:
const minhaFuncao = function(parametro1, parametro2) {
    // Código da função
};


const minhaFuncao = (parametro1, parametro2) => {
    // Código da função
};

// 3. Arrow Function:
const minhaFuncao = (parametro1, parametro2) => {
    // Código da função
};

// 4. Função Anônima:
const minhaFuncao = function(parametro1, parametro2) {
    // Código da função
};

// 5. Função Imediatamente Invocada (IIFE):
(function() {
    // Código da função
})();

// 6. Método de Objeto:
const objeto = {
    minhaFuncao: function(parametro1, parametro2) {
        // Código da função
    }
};

// 7. Método Abreviado de Objeto (ES6):
const objeto = {
    minhaFuncao(parametro1, parametro2) {
        // Código da função
    }
};
~~~

Observações:

- As funções em JavaScript são objetos de primeira classe, o que significa que podem ser tratadas como variáveis e passadas como argumentos para outras funções.
- A escolha da forma de declarar uma função depende das necessidades específicas do código, da legibilidade e da conveniência.

As diferentes maneiras de declarar funções em JavaScript oferecem flexibilidade e versatilidade na programação, permitindo a criação de código mais expressivo e funcional.

## Parâmetros da Função em JavaScript

Os parâmetros de uma função em JavaScript são variáveis ​​especiais utilizadas para receber valores passados durante a chamada da função. Eles permitem que uma função seja flexível e reutilizável, manipulando diferentes valores de entrada.

Sintaxe:
Os parâmetros de uma função são especificados entre parênteses na definição da função, separados por vírgulas.

~~~javascript
//Código JavaScript

function minhaFuncao(parametro1, parametro2) {
    // Código da função
}
~~~

Uso:

- Os parâmetros são utilizados dentro do corpo da função como variáveis locais, representando os valores passados durante a chamada da função.
- Eles podem ser utilizados para realizar cálculos, operações ou manipulações dentro da função.

Passagem de Parâmetros:
Ao chamar uma função, os valores passados como argumentos são atribuídos aos parâmetros correspondentes na definição da função.

~~~javascript
//Código JavaScript

minhaFuncao(valor1, valor2);
~~~

Valor Padrão (Default Parameters):
No ES6 e posterior, é possível definir valores padrão para parâmetros de função, que serão utilizados caso nenhum valor seja passado durante a chamada da função.

~~~javascript
//Código JavaScript

function minhaFuncao(parametro1 = valorPadrao) {
    // Código da função
}
~~~

Arguments Object:
JavaScript fornece um objeto chamado arguments, que permite acessar todos os argumentos passados para uma função, independentemente do número de parâmetros definidos na função.

~~~javascript
//Código JavaScript

function minhaFuncao() {
    console.log(arguments);
}

minhaFuncao(1, 2, 3); // Saída: [1, 2, 3]
~~~

Rest Parameters:
No ES6 e posterior, é possível definir um número variável de parâmetros usando a sintaxe de rest parameters (...). Isso permite que uma função receba um número arbitrário de argumentos, que são agrupados em um array dentro da função.

~~~javascript
//Código JavaScript

function minhaFuncao(...args) {
    console.log(args);
}

minhaFuncao(1, 2, 3); // Saída: [1, 2, 3]
~~~

## Retorno da Função em JavaScript

O retorno da função em JavaScript refere-se ao valor que uma função retorna após a sua execução. Ele permite que uma função produza um resultado que pode ser utilizado em outras partes do código.

Sintaxe:
O retorno de uma função é definido pela palavra-chave `return`, seguida pelo valor que se deseja retornar.

~~~javascript
//Código JavaScript

function minhaFuncao(parametro1, parametro2) {
    // Código da função
    return resultado;
}
~~~

Uso:

- O valor retornado por uma função pode ser atribuído a uma variável, utilizado em expressões ou passado como argumento para outras funções.
- Uma função pode ter zero ou um único valor de retorno.

Retorno de Valores:

- Uma função pode retornar qualquer tipo de valor, incluindo números, strings, booleanos, objetos, arrays, ou até mesmo outras funções.
- Se não houver instrução de retorno ou se a instrução de retorno não especificar um valor, a função retorna undefined.

Exemplo de Utilização:

~~~javascript
//Código JavaScript

function soma(a, b) {
    return a + b;
}

let resultado = soma(2, 3);
console.log(resultado); // Saída: 5
~~~

Múltiplos Retornos:

- Uma função pode retornar múltiplos valores, agrupados em um array, objeto ou outro tipo de estrutura de dados.

~~~javascript
//Código JavaScript

function divisao(dividendo, divisor) {
    if (divisor === 0) {
        return "Divisão por zero não é permitida";
    }
    return dividendo / divisor;
}
~~~

Utilização de Return para Finalizar a Função:

- A palavra-chave return também pode ser utilizada para finalizar a execução de uma função antes do final do bloco de código.

~~~javascript
//Código JavaScript

function verificarIdade(idade) {
    if (idade < 18) {
        return "Você é menor de idade";
    }
    // Se a idade for maior ou igual a 18, a função continua
}
~~~

## Escopo Léxico em JavaScript

O escopo léxico é o princípio que determina como as variáveis são acessadas e resolvidas em uma linguagem de programação, incluindo JavaScript. Em JavaScript, o escopo léxico significa que o escopo de uma variável é definido pelo local onde a variável é declarada fisicamente no código-fonte.

Características Principais:

1. **Escopo Aninhado:** Em JavaScript, as funções podem ser definidas dentro de outras funções, resultando em escopos aninhados. As funções internas têm acesso às variáveis da função externa, mas não o contrário.
2. **Cadeia de Escopo:** Quando uma variável é referenciada em um determinado ponto do código, o interpretador JavaScript procura primeiro no escopo local, depois no escopo imediatamente superior e assim por diante até encontrar a variável ou chegar ao escopo global.
3. **Closure:** O escopo léxico é fundamental para o conceito de closure em JavaScript. Uma closure é uma função que mantém uma referência ao escopo léxico em que foi definida, mesmo após a função externa ter sido concluída.

Exemplo de Escopo Léxico em JavaScript:

~~~javascript
//Código JavaScript

function externa() {
    let variavelExterna = "Externa";
    
    function interna() {
        console.log(variavelExterna); // A função interna tem acesso à variável da função externa
    }
    
    interna();
}

externa(); // Saída: "Externa"
~~~

O escopo léxico em JavaScript é uma característica fundamental da linguagem que afeta a maneira como as variáveis são acessadas e resolvidas durante a execução do código.

## Closures em JavaScript

As closures são uma poderosa característica da linguagem JavaScript que permitem que funções mantenham acesso ao escopo léxico em que foram definidas, mesmo após a função externa ter sido concluída. Elas são frequentemente utilizadas para criar funções com comportamento especial e encapsulado.

Características Principais:

1. **Mantém o Escopo Pai:** Uma closure é uma função interna que mantém referência ao escopo léxico em que foi definida, incluindo as variáveis locais e parâmetros da função externa.
2. **Acesso a Variáveis Externas:** A função interna em uma closure tem acesso às variáveis e parâmetros da função externa, mesmo após a função externa ter sido concluída.
3. **Persistência de Estado:** As closures permitem que o estado interno das variáveis seja mantido entre chamadas à função, criando um comportamento encapsulado e privado.

Exemplo de Closure em JavaScript:

~~~javascript
//Código JavaScript

function criarIncrementador(incremento) {
    return function(numero) {
        return numero + incremento;
    };
}

let incrementarEm5 = criarIncrementador(5);
console.log(incrementarEm5(10)); // Saída: 15
~~~

Neste exemplo, a função `criarIncrementador` retorna uma função interna que utiliza a variável `incremento` do escopo léxico da função externa. Mesmo após a função `criarIncrementador` ter sido concluída, a função interna ainda mantém acesso ao valor de `incremento`, criando uma closure.

Utilização das Closures:

- As closures são frequentemente utilizadas para criar funções fábrica (factory functions), funções de retorno de chamada (callback functions), e para encapsular dados e comportamentos privados.
- Elas permitem criar abstrações e estruturas de dados mais complexas, mantendo o encapsulamento e a privacidade do estado interno.

As closures em JavaScript são uma característica poderosa que permite criar funções com comportamento especial e encapsulado, mantendo referência ao escopo léxico em que foram definidas.

## Funções de Callback em JavaScript

As funções de callback são um conceito importante em JavaScript, onde uma função é passada como argumento para outra função e é executada posteriormente, geralmente em resposta a um evento ou após a conclusão de uma operação assíncrona.

Características Principais:

1. **Passadas como Argumentos:** As funções de callback são passadas como argumentos para outras funções.
2. **Executadas Assincronamente:** As funções de callback são executadas posteriormente, muitas vezes em resposta a eventos ou após a conclusão de operações assíncronas.
3. **Flexibilidade:** Elas permitem que o comportamento de uma função seja personalizado ou estendido, possibilitando a criação de código mais modular e reutilizável.

Exemplo de Função de Callback em JavaScript:

~~~javascript
//Código JavaScript

function fazerAlgo(callback) {
    console.log("Fazendo algo...");
    callback(); // Chama a função de callback
}

function minhaCallback() {
    console.log("A função de callback foi executada!");
}

fazerAlgo(minhaCallback);
~~~

Neste exemplo, a função `fazerAlgo` recebe a função `minhaCallback` como argumento e a executa posteriormente, resultando na saída "A função de callback foi executada!".

Utilização Comum:

- As funções de callback são comumente utilizadas em operações assíncronas, como requisições AJAX, leitura de arquivos, temporizadores, entre outros.
- Elas são úteis para executar código após a conclusão de uma operação assíncrona, sem bloquear a execução do programa.
Callbacks Anônimas:

Além de passar funções nomeadas como callbacks, também é comum utilizar funções anônimas diretamente como callbacks, especialmente para operações simples.

Callbacks Anônimas:

- Além de passar funções nomeadas como callbacks, também é comum utilizar funções anônimas diretamente como callbacks, especialmente para operações simples.

~~~javascript
//Código JavaScript

fazerAlgo(function() {
    console.log("Esta é uma função de callback anônima!");
});
~~~

Tratamento de Erros com Callbacks:

- As funções de callback também podem ser utilizadas para tratar erros em operações assíncronas, permitindo que o código de erro seja passado como argumento para a função de callback.

~~~javascript
//Código JavaScript

function fazerAlgo(callback) {
    if (erro) {
        callback(new Error("Ocorreu um erro"));
    } else {
        callback(null, resultado);
    }
}
~~~

As funções de callback em JavaScript são uma ferramenta poderosa para lidar com operações assíncronas e criar código mais modular e flexível.

## Funções Imediatamente Invocadas (IIFE) em JavaScript

As funções imediatamente invocadas (IIFE) são funções que são definidas e executadas imediatamente após sua criação. Elas são frequentemente utilizadas para criar escopos isolados e evitar a poluição do escopo global.

Características Principais:

1. **Autoexecução:** As IIFE são executadas automaticamente após sua definição.
2. **Escopo Isolado:** Elas criam um escopo local isolado, onde as variáveis e funções definidas dentro da IIFE não entram em conflito com as do escopo global.
3. **Encapsulamento:** Permitem encapsular o código e variáveis, protegendo-os de interferências externas.

Sintaxe:

A sintaxe básica de uma IIFE é envolver a declaração da função entre parênteses e, em seguida, imediatamente invocá-la adicionando parênteses adicionais no final.

~~~javascript
//Código JavaScript

(function() {
    // Código da IIFE
})();
~~~

Utilização Comum:

- Isolar variáveis e funções para evitar poluição do escopo global.
- Criar módulos e bibliotecas independentes.
- Evitar vazamento de variáveis e funções para o escopo global.
- Utilizar variáveis temporárias e evitar a exposição desnecessária.

Exemplo de IIFE em JavaScript:

~~~javascript
//Código JavaScript

(function() {
    let mensagem = "Olá, mundo!";
    console.log(mensagem);
})();
~~~

Neste exemplo, a IIFE cria um escopo isolado onde a variável `mensagem` é declarada. Ela não é acessível fora da IIFE, evitando poluição do escopo global.

Passagem de Parâmetros:

É possível passar parâmetros para uma IIFE da mesma forma que para uma função regular.

~~~javascript
//Código JavaScript

(function(nome) {
    console.log("Olá, " + nome);
})("Alice");
~~~

Neste exemplo, "Alice" é passado como argumento para a IIFE e é acessível dentro da função.

As funções imediatamente invocadas são uma técnica útil em JavaScript para criar escopos isolados e evitar a poluição do escopo global, oferecendo encapsulamento e modularidade ao código.

## Funções de Fábrica (Factory Functions) em JavaScript

As funções de fábrica (ou factory functions) são funções que retornam objetos novos sempre que são invocadas. Elas são usadas para criar e retornar instâncias de objetos de forma flexível e dinâmica.

Características Principais:

1. **Retorno de Objetos:** Factory functions retornam novos objetos sempre que são chamadas.
2. **Personalização de Objetos:** Permitem personalizar as propriedades e comportamentos dos objetos retornados com base nos argumentos passados.
3. **Encapsulamento:** Podem encapsular detalhes de implementação e ocultar a complexidade da criação de objetos.

Sintaxe:
A sintaxe básica de uma factory function é semelhante à de uma função regular, mas em vez de usar a palavra-chave `return` para retornar um valor específico, ela retorna um objeto.

~~~javascript
//Código JavaScript

function criarPessoa(nome, idade) {
    return {
        nome: nome,
        idade: idade,
        saudacao: function() {
            console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
        }
    };
}

const pessoa1 = criarPessoa("Alice", 30);
const pessoa2 = criarPessoa("Bob", 25);

pessoa1.saudacao(); // Saída: "Olá, meu nome é Alice e tenho 30 anos."
pessoa2.saudacao(); // Saída: "Olá, meu nome é Bob e tenho 25 anos."
~~~

Utilização Comum:

- Criar múltiplas instâncias de objetos com estruturas similares, sem a necessidade de usar classes.
- Personalizar as propriedades e comportamentos dos objetos com base nos argumentos passados para a factory function.
- Encapsular detalhes de implementação e ocultar a complexidade da criação de objetos.

Vantagens das Factory Functions:

- Flexibilidade: Permitem criar objetos de diferentes formas com base nos argumentos passados.
- Encapsulamento: Podem ocultar a complexidade da criação de objetos e detalhes de implementação.
- Semelhança com Classes: Permitem criar objetos com estruturas similares, sem a necessidade de usar classes.

As factory functions são uma técnica comum em JavaScript para criar e retornar instâncias de objetos de forma flexível e dinâmica, oferecendo encapsulamento e personalização aos objetos criados.

## Funções Construtoras (Constructor Functions) em JavaScript

As funções construtoras são uma forma de criar objetos em JavaScript, permitindo a definição de um modelo ou tipo de objeto a partir do qual múltiplas instâncias podem ser criadas. Elas são frequentemente usadas junto com a palavra-chave `new` para criar novas instâncias de objetos.

Características Principais:

1. **Modelo de Objeto:** As constructor functions servem como um modelo para criar novos objetos com a mesma estrutura.
2. **Criação de Instâncias:** Permitem criar múltiplas instâncias de objetos com base no modelo definido pela função construtora.
3. **Utilização do Operador `new`:** São comumente utilizadas com o operador `new` para criar novas instâncias de objetos.

Sintaxe:
A sintaxe básica de uma constructor function é semelhante à de uma função regular, mas geralmente é convencionado começar o nome da função com letra maiúscula para indicar que é uma constructor function.

~~~javascript
//Código JavaScript

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.saudacao = function() {
        console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
    };
}

const pessoa1 = new Pessoa("Alice", 30);
const pessoa2 = new Pessoa("Bob", 25);

pessoa1.saudacao(); // Saída: "Olá, meu nome é Alice e tenho 30 anos."
pessoa2.saudacao(); // Saída: "Olá, meu nome é Bob e tenho 25 anos."
~~~

Utilização Comum:

- Criar múltiplas instâncias de objetos com base em um modelo ou tipo de objeto.
- Personalizar as propriedades e comportamentos dos objetos criados com base nos argumentos passados para a constructor function.
- Utilizar o operador new para criar novas instâncias de objetos.

Vantagens das Constructor Functions:

- Facilitam a criação de múltiplas instâncias de objetos com base em um modelo comum.
Permitem personalizar as propriedades e comportamentos dos objetos criados de forma dinâmica.
- São amplamente utilizadas na linguagem JavaScript para criar objetos com estruturas similares.

As constructor functions são uma forma comum em JavaScript de criar e retornar instâncias de objetos com base em um modelo ou tipo de objeto comum, oferecendo flexibilidade e reutilização de código.

## Factory Functions vs Constructor Functions

**Factory Functions:**

- **Definição:** São funções que retornam objetos novos sempre que são invocadas.
- **Vantagens:**
  - Flexibilidade: Permitem criar objetos de diferentes formas com base nos argumentos passados.
  - Encapsulamento: Podem ocultar a complexidade da criação de objetos e detalhes de implementação.
  - Personalização: Permitem personalizar as propriedades e comportamentos dos objetos de forma dinâmica.
- **Desvantagens:**
  - Ausência de Protótipo: Cada objeto criado por uma factory function possui métodos duplicados, o que pode resultar em consumo excessivo de memória.
  - Performance: O encapsulamento pode levar a uma pequena degradação de desempenho em comparação com o uso de protótipos.

**Constructor Functions:**

- **Definição:** São funções que servem como modelo para criar novas instâncias de objetos usando o operador `new`.
- **Vantagens:**
  - Reutilização de Código: Permitem criar múltiplas instâncias de objetos com base em um modelo comum, evitando a duplicação de código.
  - Encapsulamento por Protótipo: Compartilham métodos entre todas as instâncias através do protótipo, resultando em um consumo eficiente de memória.
- **Desvantagens:**
  - Menos Flexibilidade: Podem ser menos flexíveis do que as factory functions, uma vez que as propriedades e métodos são definidos no construtor, tornando mais difícil a personalização dinâmica de objetos.
  - Dificuldade em Manter o Encapsulamento: A herança prototípica pode ser mais complexa de entender e manter em comparação com a encapsulação fornecida por factory functions.

**Observações Gerais:**

- Factory functions são mais flexíveis e oferecem maior controle sobre a criação de objetos, enquanto constructor functions são mais adequadas para criar objetos com uma estrutura comum e compartilhar comportamentos através de protótipos.
- A escolha entre factory functions e constructor functions depende das necessidades específicas do projeto e das preferências de design.
- Em muitos casos, uma combinação de ambos os padrões pode ser usada para obter o melhor dos dois mundos, combinando flexibilidade e reutilização de código.

A decisão entre o uso de factory functions e constructor functions em JavaScript depende das necessidades do projeto, priorizando flexibilidade, encapsulamento e desempenho.

## Funções Recursivas em JavaScript

As funções recursivas são funções que se chamam a si mesmas durante sua execução. Elas são frequentemente utilizadas para resolver problemas que podem ser divididos em casos menores e idênticos, geralmente de forma mais simples, até alcançar um caso base onde a recursão para.

Características Principais:

1. **Autochamada:** As funções recursivas se chamam a si mesmas durante sua execução.
2. **Casos Base e Recursivos:** As funções recursivas geralmente incluem uma verificação de caso base que determina quando a recursão deve parar e um caso recursivo que continua chamando a função recursivamente até que o caso base seja alcançado.
3. **Empilhamento de Chamadas:** Cada chamada recursiva é adicionada à pilha de chamadas, e as chamadas são resolvidas na ordem inversa após atingir o caso base.

Exemplo de Função Recursiva em JavaScript:

~~~javascript
//Código JavaScript

function contarAteDez(numero) {
    if (numero <= 10) {
        console.log(numero);
        contarAteDez(numero + 1); // Chamada recursiva
    }
}

contarAteDez(1);
~~~

Neste exemplo, a função `contarAteDez` é chamada recursivamente até que `numero` seja maior que 10, resultando na contagem de 1 a 10.

Utilização Comum:

- Problemas que podem ser divididos em casos menores e idênticos, como algoritmos de busca, ordenação, e árvores de recursão.
- Processamento de estruturas de dados recursivas, como árvores e listas encadeadas.
- Implementação de algoritmos matemáticos, como fatorial e Fibonacci.

Vantagens das Funções Recursivas:

- Simplicidade de Implementação: Permitem uma implementação elegante e concisa de algoritmos que envolvem divisão e conquista.
- Facilidade de Compreensão: Em muitos casos, a solução recursiva reflete diretamente a descrição do problema.

Desvantagens das Funções Recursivas:

- Custo de Desempenho: O empilhamento de chamadas pode consumir uma quantidade significativa de memória, especialmente para problemas com muitas chamadas recursivas.
- Dificuldade de Depuração: Erros de recursão podem ser difíceis de identificar e corrigir devido à natureza dinâmica das chamadas.

As funções recursivas são uma ferramenta poderosa em JavaScript para resolver problemas complexos de forma elegante e concisa, mas é importante utilizá-las com cuidado devido às suas implicações de desempenho e de depuração.

## Funções Geradoras em JavaScript

As funções geradoras são uma poderosa ferramenta introduzida no ECMAScript 6 (ES6) que permitem criar iteradores personalizados de forma mais fácil e eficiente. Elas são definidas usando a palavra-chave `function*` e possuem uma ou mais instruções `yield`, que pausam a execução da função e retornam um valor para o iterador.

Características Principais:

1. **Iteradores Personalizados:** Permitem criar iteradores customizados para percorrer sequências de dados de forma eficiente.
2. **Execução Pausada:** As funções geradoras podem ser pausadas durante a execução usando a instrução `yield`, permitindo retornar valores para o iterador sem interromper o estado da função.
3. **Retorno de Valores:** Além de pausar a execução, a instrução `yield` também retorna um valor para o iterador, que pode ser acessado pelo código que consome o iterador.

Sintaxe:
A sintaxe básica de uma função geradora é semelhante à de uma função regular, mas com a adição do asterisco (*) após a palavra-chave `function`. A instrução `yield` é usada para pausar a execução e retornar valores para o iterador.

~~~javascript
//Código JavaScript

function* gerarNumeros() {
    yield 1;
    yield 2;
    yield 3;
}

const iterador = gerarNumeros();
console.log(iterador.next()); // Saída: { value: 1, done: false }
console.log(iterador.next()); // Saída: { value: 2, done: false }
console.log(iterador.next()); // Saída: { value: 3, done: false }
console.log(iterador.next()); // Saída: { value: undefined, done: true }
~~~

Utilização Comum:

- Iteração sobre estruturas de dados complexas, como árvores ou grafos.
- Implementação de algoritmos de busca e ordenação.
- Gerenciamento eficiente de grandes volumes de dados, onde não é possível armazenar todos os elementos na memória ao mesmo tempo.

Vantagens das Funções Geradoras:

- Facilidade de Implementação: Permitem criar iteradores personalizados de forma mais simples e legível.
- Eficiência de Memória: Podem lidar com grandes volumes de dados de forma eficiente, pois apenas um elemento é mantido na memória por vez.
- Controle de Iteração: Permitem controlar o fluxo de iteração de forma precisa e flexível usando a instrução `yield`.

Observações:

- As funções geradoras são iteráveis, o que significa que podem ser percorridas usando loops `for...of`.
- Elas são uma parte importante da abordagem de programação assíncrona em JavaScript, especialmente em conjunto com promises e async/await.

As funções geradoras são uma poderosa ferramenta em JavaScript para criar iteradores personalizados de forma eficiente e controlada, facilitando a iteração sobre estruturas de dados complexas e o gerenciamento de grandes volumes de dados.

## Exercício 01 - Pratica com Factory Functions

Desenvolvimento de um pequeno projeto utilizando Factory Functions para criação de uma calculadora. O projeto pode ser encontrado na pasta: `projetos/4_/Exercicio1_calculator-factory-functions` ou [clicando aqui]([link](https://github.com/max-santos-d/estudo-web-js/tree/main/projetos/4_/Exercicio1_calculator-factory-functions));

## Exercício 02 - Pratica com Constructor Functions

Desenvolvimento do projeto anterior, agora utilizando Constructor Functions para criação da calculadora. O projeto pode ser encontrado na pasta: `projetos/4_/Exercicio2_calculator-constructor-functions` ou [clicando aqui]([link](https://github.com/max-santos-d/estudo-web-js/tree/main/projetos/4_/Exercicio2_calculator-constructor-functions));
