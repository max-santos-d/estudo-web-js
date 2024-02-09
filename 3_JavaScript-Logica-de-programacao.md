# JavaScript - Lógica de programação

Índice

- [JavaScript - Lógica de programação](#javascript---lógica-de-programação)
  - [Sobre lógica](#sobre-lógica)
  - [Operadores de Comparação em JavaScript](#operadores-de-comparação-em-javascript)
  - [Operadores Lógicos em JavaScript](#operadores-lógicos-em-javascript)
  - [Avaliação de Curto-Circuito (Short-Circuit Evaluation) em JavaScript](#avaliação-de-curto-circuito-short-circuit-evaluation-em-javascript)
  - [Estruturas Condicionais em JavaScript: if, else if e else](#estruturas-condicionais-em-javascript-if-else-if-e-else)
  - [DOM (Document Object Model) e Árvore do DOM em JavaScript](#dom-document-object-model-e-árvore-do-dom-em-javascript)
  - [Operações Ternárias em JavaScript](#operações-ternárias-em-javascript)
  - [Objeto Date em JavaScript](#objeto-date-em-javascript)
  - [Estrutura switch/case em JavaScript](#estrutura-switchcase-em-javascript)
  - [Atribuição via Desestruturação (Arrays) em JavaScript](#atribuição-via-desestruturação-arrays-em-javascript)
  - [Atribuição via Desestruturação (Objetos) em JavaScript](#atribuição-via-desestruturação-objetos-em-javascript)
  - [Estrutura de Repetição For (Clássico) em JavaScript](#estrutura-de-repetição-for-clássico-em-javascript)
  - [Estrutura de Repetição For...in em JavaScript](#estrutura-de-repetição-forin-em-javascript)
  - [Estrutura de Repetição For...of em JavaScript](#estrutura-de-repetição-forof-em-javascript)
  - [NodeList no Browser](#nodelist-no-browser)
  - [Estrutura de Repetição While e Do...While em JavaScript](#estrutura-de-repetição-while-e-dowhile-em-javascript)
  - [Palavras-chave Break e Continue em JavaScript](#palavras-chave-break-e-continue-em-javascript)
  - [Arrow Functions em JavaScript](#arrow-functions-em-javascript)
  - [Tratando e Lançando Erros em JavaScript](#tratando-e-lançando-erros-em-javascript)
  - [Bloco Finally em JavaScript](#bloco-finally-em-javascript)
  - [setInterval e setTimeout em JavaScript](#setinterval-e-settimeout-em-javascript)
  - [Exercício 01 - cálculo de IMC](#exercício-01---cálculo-de-imc)
  - [Exercício 02 - lógica de programação](#exercício-02---lógica-de-programação)
  - [Exercício 03 - Criando um timer com setInterval](#exercício-03---criando-um-timer-com-setinterval)
  - [Exercício 04 - Criando uma lista de tarefas](#exercício-04---criando-uma-lista-de-tarefas)

## Sobre lógica

Definição:

- **O que é:** Lógica é a disciplina que estuda os princípios e métodos utilizados para realizar inferências válidas e corretas. Em um contexto mais amplo, a lógica refere-se à capacidade de raciocinar de forma consistente e coerente.
- **Utilização:** A lógica é utilizada em diversas áreas, incluindo matemática, ciência da computação, filosofia, linguagens de programação e tomada de decisões, para analisar e resolver problemas, identificar padrões, criar argumentos válidos e desenvolver algoritmos eficientes.

Importância:

- A lógica é fundamental para o pensamento crítico e analítico, permitindo que as pessoas avaliem argumentos, identifiquem falácias, resolvam problemas complexos e tomem decisões informadas.
- Na programação, a lógica é essencial para desenvolver algoritmos eficientes, escrever código claro e livre de erros, depurar problemas e criar soluções inovadoras.

Elementos da Lógica:

- **Premissas:** São as afirmações iniciais ou suposições em um argumento lógico.
- **Inferências:** São as conclusões ou resultados obtidos a partir das premissas por meio de regras lógicas.
- **Validade:** Um argumento lógico é válido quando suas inferências seguem corretamente das premissas, independentemente da verdade ou falsidade das premissas.
- **Coerência:** Refere-se à consistência e conexão lógica entre as afirmações em um argumento.

Exemplo de Utilização:

- Na programação, a lógica é aplicada na resolução de problemas, desenvolvimento de algoritmos e criação de estruturas de controle (como loops e condicionais) para manipular dados e realizar operações de forma eficiente e precisa.
- Por exemplo, ao escrever código para verificar se um número é primo, é necessário aplicar princípios lógicos para determinar se o número atende aos critérios de divisibilidade.

A compreensão e aplicação dos princípios lógicos são essenciais para o desenvolvimento de habilidades analíticas e críticas em diversas áreas do conhecimento.

## Operadores de Comparação em JavaScript

Os operadores de comparação em JavaScript são utilizados para comparar dois valores e retornar um resultado booleano (true ou false) que indica se a comparação é verdadeira ou falsa. Aqui estão os principais operadores de comparação:

Igualdade (==) e Desigualdade (!=):

- **Operador de Igualdade (==):** Compara se dois valores são iguais, convertendo os tipos, se necessário. Retorna true se os valores forem iguais.
- **Operador de Desigualdade (!=):** Compara se dois valores são diferentes, convertendo os tipos, se necessário. Retorna true se os valores forem diferentes.

Igualdade Estrita (===) e Desigualdade Estrita (!==):

- **Operador de Igualdade Estrita (===):** Compara se dois valores são iguais sem fazer conversão de tipo. Retorna true se os valores e os tipos forem iguais.
- **Operador de Desigualdade Estrita (!==):** Compara se dois valores são diferentes sem fazer conversão de tipo. Retorna true se os valores ou os tipos forem diferentes.

Outros Operadores de Comparação:

- **Maior que (>):** Retorna true se o valor da esquerda for maior que o valor da direita.
- **Maior ou igual que (>=):** Retorna true se o valor da esquerda for maior ou igual ao valor da direita.
- **Menor que (<):** Retorna true se o valor da esquerda for menor que o valor da direita.
- **Menor ou igual que (<=):** Retorna true se o valor da esquerda for menor ou igual ao valor da direita.

Operador Ternário (?:):

- O operador ternário é uma forma compacta de escrever uma expressão condicional. Ele avalia uma condição e retorna um valor se a condição for verdadeira e outro valor se a condição for falsa.

Exemplo de Utilização:

~~~javascript
// Código JavaScript

let x = 5;
let y = 10;

console.log(x == y);  // false
console.log(x != y);  // true
console.log(x === "5"); // false
console.log(x !== "5"); // true
console.log(x > y);   // false
console.log(x >= 5);   // true
console.log(x < y);   // true
console.log(x <= y);  // true

// Operador ternário
let idade = 20;
let status = (idade >= 18) ? "Adulto" : "Menor de idade";
console.log(status); // Saída: "Adulto"
~~~

Os operadores de comparação são fundamentais para criar expressões condicionais e realizar comparações de valores em JavaScript, permitindo tomar decisões com base em condições específicas.

## Operadores Lógicos em JavaScript

Os operadores lógicos em JavaScript são utilizados para realizar operações lógicas entre expressões booleanas. Aqui estão os principais operadores lógicos:

E lógico (&&):

- **Símbolo:** &&
- **Descrição:** Retorna true se as duas expressões booleanas forem verdadeiras. Caso contrário, retorna false.

Ou lógico (||):

- **Símbolo:** ||
- **Descrição:** Retorna true se pelo menos uma das expressões booleanas for verdadeira. Retorna false apenas se ambas as expressões forem falsas.

Negação lógica (!):

- **Símbolo:** !
- **Descrição:** Inverte o valor de uma expressão booleana. Se a expressão for true, ! retorna false; se a expressão for false, ! retorna true.

Exemplo de Utilização:

~~~javascript
// Código JavaScript

let x = 5;
let y = 10;
let z = 15;

// E lógico (&&)
console.log((x < y) && (y < z)); // true
console.log((x < y) && (y > z)); // false

// Ou lógico (||)
console.log((x < y) || (y < z)); // true
console.log((x > y) || (y > z)); // false

// Negação lógica (!)
console.log(!(x == y)); // true
console.log(!(x < y));  // false
~~~

Os operadores lógicos são frequentemente utilizados em expressões condicionais e estruturas de controle, permitindo criar condições mais complexas com base em múltiplas expressões booleanas.

## Avaliação de Curto-Circuito (Short-Circuit Evaluation) em JavaScript

A avaliação de curto-circuito, também conhecida como short-circuit evaluation em inglês, é um conceito fundamental em JavaScript (e em muitas outras linguagens de programação) relacionado à avaliação de expressões lógicas.

Funcionamento:

- Na avaliação de curto-circuito, a expressão é interrompida assim que o resultado final pode ser determinado, sem avaliar todas as partes da expressão.
- Isso ocorre porque os operadores lógicos `&&` (E lógico) e `||` (OU lógico) não precisam avaliar todas as expressões se o resultado final puder ser determinado a partir de uma parte da expressão.

Short-Circuit com Operador E (&&):

- Quando a expressão utiliza o operador `&&`, a avaliação é interrompida assim que uma expressão falsa é encontrada, porque não importa o que vem depois, a expressão como um todo será falsa.
- Se a primeira expressão é avaliada como falsa, o resultado final é false, portanto, a segunda expressão não é avaliada.
- Por exemplo: `(false && qualquer_outra_coisa)` é sempre false, portanto `qualquer_outra_coisa` não é avaliada.

Short-Circuit com Operador OU (||):

- Quando a expressão utiliza o operador `||`, a avaliação é interrompida assim que uma expressão verdadeira é encontrada, porque não importa o que vem depois, a expressão como um todo será verdadeira.
- Se a primeira expressão é avaliada como verdadeira, o resultado final é true, portanto, a segunda expressão não é avaliada.
- Por exemplo: `(true || qualquer_outra_coisa)` é sempre true, portanto `qualquer_outra_coisa` não é avaliada.

Exemplo de Utilização:

~~~javascript
// Código JavaScript

// Exemplo de Short-Circuit com Operador E (&&)
let resultado = false && funcao_que_pode_dar_erro(); // funcao_que_pode_dar_erro() não é chamada porque a primeira expressão é false

// Exemplo de Short-Circuit com Operador OU (||)
let resultado2 = true || funcao_que_pode_dar_erro(); // funcao_que_pode_dar_erro() não é chamada porque a primeira expressão é true
~~~

A avaliação de curto-circuito é uma técnica útil para evitar avaliar partes desnecessárias de expressões lógicas, melhorando a eficiência e desempenho do código.

## Estruturas Condicionais em JavaScript: if, else if e else

As estruturas condicionais em JavaScript, como `if`, `else if` e `else`, são utilizadas para controlar o fluxo de execução do código com base em condições lógicas.

if

- A declaração `if` é usada para executar um bloco de código se a condição especificada for verdadeira.
- Se a condição for verdadeira, o bloco de código dentro do `if` é executado.
- Se a condição for falsa, o bloco de código dentro do `if` é ignorado.
- É possível ter apenas um bloco `if` em uma estrutura condicional.

else if

- A declaração `else if` é usada para especificar uma nova condição se a condição anterior `if` for falsa.
- Se a condição `if` for falsa e a condição `else if` for verdadeira, o bloco de código dentro do `else if` é executado.
- É possível ter quantas cláusulas `else if` forem necessárias após o bloco `if` em uma estrutura condicional.

else

- A declaração `else` é usada para executar um bloco de código se nenhuma das condições anteriores for verdadeira.
- O bloco de código dentro do `else` é executado se todas as condições anteriores forem falsas.
- `else` é opcional e pode aparecer apenas uma vez em uma estrutura condicional.

Exemplo de Utilização:

~~~javascript
// Código JavaScript

let hora = 14;

if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}
~~~

Neste exemplo, dependendo do valor da variável `hora`, uma mensagem diferente será exibida. Se hora for menor que 12, será exibido "Bom dia!". Se `hora` for menor que 18, será exibido "Boa tarde!". Caso contrário, será exibido "Boa noite!".

As estruturas condicionais `if`, `else if` e `else` são poderosas ferramentas para controlar o fluxo de execução do código com base em diferentes condições.

## DOM (Document Object Model) e Árvore do DOM em JavaScript

O DOM (Document Object Model) em JavaScript é uma representação hierárquica e estruturada de um documento HTML/XML que permite interação e manipulação dinâmica dos elementos da página web.

DOM:

- O DOM é uma interface de programação que representa a estrutura de um documento como uma árvore de objetos, na qual cada nó representa um elemento, atributo ou texto do documento.
- Os navegadores constroem o DOM a partir do código HTML de uma página web, permitindo que os desenvolvedores acessem e manipulem os elementos da página de forma dinâmica.

Árvore do DOM:

- A árvore do DOM é uma estrutura hierárquica composta por nós (nodes) que representam os elementos, atributos e texto do documento HTML.
- Cada nó na árvore do DOM é um objeto com propriedades e métodos que permitem acessar e manipular suas características e conteúdo.
- A árvore do DOM possui um nó raiz, que é o objeto `document`, e é organizada de forma hierárquica, onde cada nó tem um único nó pai e pode ter zero ou mais nós filhos.

Exemplo de Estrutura da Árvore do DOM:

~~~text
document (nó raiz)
└── html
├── head
│ └── title
├── body
│ ├── div
│ │ ├── h1
│ │ └── p
│ └── img
└── script
~~~

Manipulação do DOM:

- A manipulação do DOM em JavaScript é realizada através de métodos e propriedades do objeto `document` e dos nós da árvore do DOM.
- Os desenvolvedores podem adicionar, remover, modificar e acessar elementos HTML, atributos e texto da página web dinamicamente usando JavaScript.

Importância:

- O DOM é fundamental para a construção de aplicações web interativas e dinâmicas, permitindo que os desenvolvedores criem interfaces de usuário responsivas e personalizadas.
- A compreensão do DOM é essencial para o desenvolvimento front-end em JavaScript, pois permite manipular e interagir com os elementos da página de forma eficaz.

## Operações Ternárias em JavaScript

As operações ternárias em JavaScript são uma forma concisa de escrever expressões condicionais em uma única linha. Elas são frequentemente usadas quando se deseja atribuir um valor com base em uma condição.

Sintaxe:
A sintaxe básica de uma operação ternária em JavaScript é a seguinte:

~~~bash
# Código Bash

condição ? valor_se_verdadeiro : valor_se_falso
~~~

- `condicao`: Uma expressão que é avaliada como verdadeira ou falsa.
- `expressao1`: O valor atribuído se a condição for verdadeira.
- `expressao2`: O valor atribuído se a condição for falsa.

Funcionamento:

- Se a `condicao` for avaliada como verdadeira, a operação ternária retorna `expressao1`.
- Se a `condicao` for avaliada como falsa, a operação ternária retorna `expressao2`.

Exemplo de Utilização:

~~~javascript
// Código JavaScript

let idade = 20;
let status = (idade >= 18) ? "Adulto" : "Menor de idade";
console.log(status); // Saída: "Adulto"
~~~

Neste exemplo, se a `idade` for maior ou igual a 18, a variável `status` recebe o valor "Adulto"; caso contrário, recebe o valor "Menor de idade".

Vantagens:

- As operações ternárias são úteis para escrever expressões condicionais de forma concisa e legível em uma única linha.
- Elas podem melhorar a clareza do código em situações simples de decisão.

Desvantagens:

- Se as expressões dentro da operação ternária forem complexas, a legibilidade do código pode ser comprometida.
- O uso excessivo de operações ternárias em código complexo pode torná-lo menos compreensível para outros desenvolvedores.

As operações ternárias são uma ferramenta útil para simplificar expressões condicionais em JavaScript, mas devem ser usadas com moderação para manter a legibilidade do código.

## Objeto Date em JavaScript

O objeto `Date` em JavaScript é utilizado para trabalhar com datas e horas. Ele permite a criação, manipulação e formatação de datas de acordo com a data e hora do sistema do usuário ou com uma data específica fornecida pelo desenvolvedor.

Criação de um Objeto Date:

- O objeto `Date` pode ser criado de várias formas:
  - Sem parâmetros: Cria um objeto `Date` com a data e hora atuais.
  - Passando uma string contendo uma data como parâmetro.
  - Passando valores numéricos para ano, mês, dia, hora, minuto, segundo e milissegundo.

Principais Métodos do Objeto Date:

- `getDate()`: Retorna o dia do mês (de 1 a 31).
- `getMonth()`: Retorna o mês (de 0 a 11).
- `getFullYear()`: Retorna o ano com quatro dígitos.
- `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()`: Métodos para obter as horas, minutos, segundos e milissegundos.
- `getDay()`: Retorna o dia da semana (de 0 para Domingo a 6 para Sábado).

Exemplo de Utilização:

~~~javascript
// Código JavaScript

// Criando um objeto Date com a data e hora atuais
let dataAtual = new Date();

// Criando um objeto Date com uma data específica
let dataEspecifica = new Date("2024-02-10");

// Obtendo partes específicas de uma data
let dia = dataAtual.getDate();
let mes = dataAtual.getMonth() + 1; // Adiciona 1 porque os meses são indexados de 0 a 11
let ano = dataAtual.getFullYear();

// Obtendo o dia da semana
let diaSemana = dataAtual.getDay(); // 0 para Domingo, 1 para Segunda, ..., 6 para Sábado

console.log(`Data atual: ${dia}/${mes}/${ano}`);
console.log(`Dia da semana: ${diaSemana}`);
~~~

## Estrutura switch/case em JavaScript

A estrutura `switch/case` em JavaScript é uma forma de controle de fluxo que permite avaliar uma expressão e executar diferentes blocos de código com base no valor dessa expressão. É uma alternativa mais limpa e eficiente do que encadear múltiplos blocos `if/else if`.

A sintaxe básica de uma estrutura `switch/case` é a seguinte:

~~~javascript
// Código JavaScript

switch (expressao) {
  case valor1:
    // Bloco de código a ser executado se expressao for igual a valor1
    break;
  case valor2:
    // Bloco de código a ser executado se expressao for igual a valor2
    break;
  ...
  default:
    // Bloco de código a ser executado se expressao não corresponder a nenhum valor
}
~~~

- `expressao`: A expressão a ser avaliada.
- `case valor`: Uma condição a ser comparada com a expressão.
- `break`: Palavra-chave que indica o final do bloco de código do caso atual. O break é opcional, mas é geralmente usado para evitar a execução dos casos seguintes.
- `default`: Caso nenhum dos casos anteriores seja verdadeiro, o bloco de código dentro do `default` será executado. O `default` é opcional e pode aparecer apenas uma vez em uma estrutura `switch/case`.

Funcionamento:

- O valor da expressão é comparado com cada `case`.
- Se houver uma correspondência, o bloco de código associado ao `case` correspondente é executado.
- Se nenhum case corresponder ao valor da expressão e houver um bloco `default`, o código dentro do bloco `default` será executado.

Exemplo de Utilização:

~~~javascript
// Código JavaScript

let diaSemana = 3;
let mensagem = "";

switch (diaSemana) {
  case 1:
    mensagem = "Segunda-feira";
    break;
  case 2:
    mensagem = "Terça-feira";
    break;
  case 3:
    mensagem = "Quarta-feira";
    break;
  case 4:
    mensagem = "Quinta-feira";
    break;
  case 5:
    mensagem = "Sexta-feira";
    break;
  default:
    mensagem = "Final de semana";
}

console.log(mensagem); // Saída: "Quarta-feira"
~~~

Neste exemplo, dependendo do valor da variável `diaSemana`, uma mensagem diferente será atribuída à variável `mensagem` utilizando a estrutura switch/case.

A estrutura `switch/case` é uma ferramenta poderosa para realizar comparações múltiplas de forma mais clara e concisa em JavaScript.

## Atribuição via Desestruturação (Arrays) em JavaScript

A atribuição via desestruturação em JavaScript é uma técnica que permite extrair valores de arrays e atribuí-los a variáveis individuais de forma concisa e eficiente.

Sintaxe:

A sintaxe básica de atribuição via desestruturação de arrays é a seguinte:

~~~javascript
// Código em JavaScript

let [variavel1, variavel2, ..., variavelN] = array;
~~~

- `variavel1`, `variavel2`, ..., `variavelN`: São as variáveis onde os valores do array serão armazenados.
- `array`: O array do qual os valores serão extraídos.

Funcionamento:

- Os valores do array são atribuídos às variáveis na mesma ordem em que aparecem no array.
- Se houver mais variáveis do que elementos no array, os valores extras serão `undefined`.
- Se houver mais elementos no array do que variáveis, os elementos extras serão ignorados.

Exemplo de Utilização:

~~~javascript
// Código em JavaScript

let numeros = [1, 2, 3, 4, 5];

let [primeiro, segundo, terceiro] = numeros;
console.log(primeiro); // Saída: 1
console.log(segundo); // Saída: 2
console.log(terceiro); // Saída: 3

// Ignorando elementos do array
let [a, , b] = numeros;
console.log(a); // Saída: 1
console.log(b); // Saída: 3

// Atribuindo valores padrão
let [x = 0, y = 0, z = 0, w = 0, v = 0, u = 0] = numeros;
console.log(u); // Saída: 0 (não há elemento no array correspondente)

// Troca de valores entre variáveis
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a); // Saída: 20
console.log(b); // Saída: 10
~~~

## Atribuição via Desestruturação (Objetos) em JavaScript

A atribuição via desestruturação de objetos em JavaScript é uma técnica que permite extrair valores de objetos e atribuí-los a variáveis individuais de forma concisa e eficiente.

Sintaxe:

A sintaxe básica de atribuição via desestruturação de objetos é a seguinte:

~~~javascript
// Código JavaScript

let {propriedade1, propriedade2, ..., propriedadeN} = objeto;
~~~

- `propriedade1`, `propriedade2`, ..., `propriedadeN`: São as propriedades do objeto cujos valores serão extraídos.
- `objeto`: O objeto do qual os valores serão extraídos.

Funcionamento:

- Os valores das propriedades do objeto são atribuídos às variáveis com os mesmos nomes das propriedades.
- Se alguma propriedade do objeto não existir, a variável correspondente receberá o valor `undefined`.

Exemplo de Utilização:

~~~javascript
// Código JavaScript

let pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

let {nome, idade, cidade} = pessoa;
console.log(nome); // Saída: "João"
console.log(idade); // Saída: 30
console.log(cidade); // Saída: "São Paulo"

// Renomeando variáveis
let {nome: nomeDaPessoa, idade: idadeDaPessoa} = pessoa;
console.log(nomeDaPessoa); // Saída: "João"
console.log(idadeDaPessoa); // Saída: 30

// Atribuindo valores padrão
let {profissao = "Desconhecida"} = pessoa;
console.log(profissao); // Saída: "Desconhecida" (propriedade não existe no objeto)

// Acessando propriedades aninhadas
let empresa = {
    nome: "Empresa ABC",
    endereco: {
        cidade: "Rio de Janeiro",
        estado: "RJ"
    }
};
let {nome: nomeDaEmpresa, endereco: {cidade, estado}} = empresa;
console.log(nomeDaEmpresa); // Saída: "Empresa ABC"
console.log(cidade); // Saída: "Rio de Janeiro"
console.log(estado); // Saída: "RJ"
~~~

## Estrutura de Repetição For (Clássico) em JavaScript

A estrutura de repetição `for` é utilizada em JavaScript para executar um bloco de código repetidamente, com base em uma condição de controle. É especialmente útil quando o número de iterações é conhecido previamente.

Sintaxe:
A sintaxe básica da estrutura de repetição `for` é a seguinte:

~~~javascript
// Código JavaScript

for (inicialização; condição; incremento) {
    // Bloco de código a ser executado repetidamente
}
~~~

- `inicialização`: É onde uma variável de controle é inicializada, geralmente com um valor inicial.
- `condição`: É a condição que é verificada antes de cada iteração do loop. Se a condição for verdadeira, o bloco de código é executado; caso contrário, o loop é encerrado.
- `incremento`: É onde a variável de controle é atualizada a cada iteração do loop.

Funcionamento:

- A inicialização é executada apenas uma vez, antes da primeira iteração do loop.
- A condição é avaliada antes de cada iteração. Se for verdadeira, o bloco de código é executado; se for falsa, o loop é encerrado.
- O incremento é executado após cada iteração do loop.
- O bloco de código dentro do loop é executado repetidamente enquanto a condição for verdadeira.

Exemplo de Utilização:

~~~javascript
// Código JavaScript

for (let i = 0; i < 5; i++) {
    console.log("O valor de i é: " + i);
}
~~~

Neste exemplo, o loop `for` é utilizado para imprimir os valores de `i` de 0 a 4. A inicialização define `i` como 0, a condição verifica se `i` é menor que 5 e o incremento incrementa `i` em 1 a cada iteração.

Observações:

- A estrutura de repetição `for` é ideal quando o número de iterações é conhecido previamente ou quando se deseja iterar sobre uma sequência de números.
- É importante garantir que a condição do loop eventualmente se torne falsa para evitar loops infinitos.

## Estrutura de Repetição For...in em JavaScript

A estrutura de repetição `for...in` em JavaScript é utilizada para iterar sobre as propriedades enumeráveis de um objeto. Ela permite percorrer todas as propriedades de um objeto, incluindo as propriedades herdadas de sua cadeia de protótipos.

Sintaxe:
A sintaxe básica da estrutura de repetição `for...in` é a seguinte:

~~~javascript
// Código JavaScript

for (variavel in objeto) {
    // Bloco de código a ser executado repetidamente
}
~~~

- `variavel`: Uma variável que irá representar o nome de cada propriedade do objeto a cada iteração.
- `objeto`: O objeto que terá suas propriedades percorridas pelo loop.

Funcionamento:

- O loop `for...in` itera sobre as propriedades enumeráveis do objeto, atribuindo o nome de cada propriedade à variável definida no loop.
- O bloco de código dentro do loop é executado para cada propriedade do objeto.
Exemplo de Utilização:

Exemplo de Utilização:

~~~javascript
// Código JavaScript

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
};

for (let propriedade in carro) {
    console.log(propriedade + ": " + carro[propriedade]);
}
~~~

Neste exemplo, o loop `for...in` é utilizado para iterar sobre as propriedades do objeto carro e imprimir o nome de cada propriedade junto com o seu valor correspondente.

Observações:

- O loop `for...in` também itera sobre as propriedades herdadas do objeto através de sua cadeia de protótipos.
- É importante verificar se a propriedade pertence diretamente ao objeto ou foi herdada, utilizando o método `hasOwnProperty()` dentro do loop, se necessário.

## Estrutura de Repetição For...of em JavaScript

A estrutura de repetição `for...of` em JavaScript é utilizada para iterar sobre elementos iteráveis, como arrays, strings, objetos semelhantes a arrays (por exemplo, NodeList) e outros objetos que implementam o protocolo de iteração.

Sintaxe:
A sintaxe básica da estrutura de repetição `for...of` é a seguinte:

~~~javascript
// Código JavaScript

for (variavel of iteravel) {
    // Bloco de código a ser executado repetidamente
}
~~~

- `variavel`: Uma variável que irá representar cada elemento do iterável a cada iteração.
- `iteravel`: O objeto iterável sobre o qual o loop será executado.

Funcionamento:

- O loop `for...of` itera sobre cada elemento do iterável, atribuindo o valor de cada elemento à variável definida no loop.
- O bloco de código dentro do loop é executado para cada elemento do iterável.
Exemplo de Utilização:

~~~javascript
// Código JavaScript

let cores = ["vermelho", "verde", "azul"];

for (let cor of cores) {
    console.log(cor);
}
~~~

Neste exemplo, o loop `for...of` é utilizado para iterar sobre os elementos do array cores e imprimir cada cor.

Observações:

- O loop `for...of` não é adequado para percorrer objetos, pois ele itera sobre os valores dos elementos, e não sobre as chaves ou propriedades dos objetos.
- Para percorrer as chaves ou propriedades de um objeto, é mais apropriado usar for...in.

A estrutura de repetição `for...of` é útil para iterar sobre elementos de iteráveis de forma simples e concisa em JavaScript.

## NodeList no Browser

Um NodeList é um tipo de objeto semelhante a uma lista de nós que é retornada por métodos do DOM (Document Object Model) em navegadores da web. Ele representa uma coleção de nós (normalmente elementos HTML) que são retornados por métodos como `querySelectorAll()` e `childNodes`.

Características:

- O objeto NodeList se comporta como um array, mas não é um array de fato. Ele possui propriedades e métodos semelhantes aos de um array, como `length` e `forEach()`, mas não possui todos os métodos de array.
- NodeList é estático, o que significa que ele reflete o estado do documento no momento em que é criado. Se o documento for alterado após a criação do NodeList, ele não será automaticamente atualizado.
- Os elementos em um NodeList são acessados por índice, semelhante a um array, e também podem ser iterados usando estruturas de repetição como `for...of` ou `forEach()`.

Utilização:

- Os NodeList são comumente usados para iterar sobre uma coleção de elementos HTML retornados por seletores CSS ou consultas DOM.
- Eles são frequentemente usados em conjunto com loops, como `for...of` ou `forEach()`, para manipular e interagir com vários elementos HTML de uma página web.

Exemplo de Utilização:

~~~javascript
// Código JavaScript

// Selecionando todos os parágrafos da página
let paragrafos = document.querySelectorAll('p');

// Iterando sobre os parágrafos usando for...of
for (let paragrafo of paragrafos) {
    console.log(paragrafo.textContent);
}

// Modificando estilos dos parágrafos usando forEach
paragrafos.forEach(paragrafo => {
    paragrafo.style.color = 'blue';
});
~~~

Neste exemplo, `document.querySelectorAll('p')` retorna um NodeList contendo todos os parágrafos da página. Em seguida, o NodeList é percorrido usando um loop `for...of` para imprimir o conteúdo de cada parágrafo e usando `forEach` para modificar os estilos dos parágrafos.

Observações:

- NodeList é comumente usado para selecionar elementos HTML no documento usando métodos como `document.querySelectorAll()`.
- É importante lembrar que NodeList não é um array, portanto, nem todos os métodos de array estão disponíveis diretamente em um NodeList. Se for necessário utilizar métodos de array, pode-se converter NodeList em um array usando `Array.from()` ou spread operator (`[...nodeList]`).

## Estrutura de Repetição While e Do...While em JavaScript

As estruturas de repetição `while` e `do...while` em JavaScript são utilizadas para executar um bloco de código repetidamente enquanto uma condição especificada for verdadeira. Elas são especialmente úteis quando o número de iterações não é conhecido previamente.

While:

- A estrutura de repetição `while` é utilizada para executar um bloco de código repetidamente enquanto uma condição especificada for verdadeira.
- Antes de cada iteração, a condição é verificada. Se for verdadeira, o bloco de código é executado; se for falsa, o loop é encerrado.

Sintaxe do While:

~~~javascript
// Código JavaScript

while (condicao) {
    // Bloco de código a ser executado repetidamente
}
~~~

Do...While:

- A estrutura de repetição `do...while` é similar ao `while`, mas com uma diferença fundamental: o bloco de código é executado pelo menos uma vez, mesmo se a condição for falsa.
- Após cada iteração, a condição é verificada. Se for verdadeira, o bloco de código é executado novamente; se for falsa, o loop é encerrado.

Sintaxe do Do...While:

~~~javascript
// Código JavaScript

do {
    // Bloco de código a ser executado repetidamente
} while (condicao);
~~~

Exemplo de Utilização do While:

~~~javascript
// Código JavaScript

let contador = 0;

while (contador < 5) {
    console.log("O contador é: " + contador);
    contador++;
}
~~~

Exemplo de Utilização do Do...While:

~~~javascript
// Código JavaScript

let numero = 10;

do {
    console.log("O número é: " + numero);
    numero++;
} while (numero < 5);
~~~

Observações:

- No `while`, a condição é verificada antes da execução do bloco de código, o que significa que o bloco pode nunca ser executado se a condição inicialmente for falsa.
- No `do...while`, o bloco de código é executado pelo menos uma vez antes de verificar a condição, garantindo que o bloco seja executado pelo menos uma vez.

As estruturas de repetição `while` e `do...while` são úteis em situações em que o número de iterações não é conhecido previamente, permitindo a execução de um bloco de código enquanto uma condição específica for atendida.

## Palavras-chave Break e Continue em JavaScript

As palavras-chave `break` e `continue` são utilizadas dentro de estruturas de repetição em JavaScript para controlar o fluxo de execução do código.

Break:

- A palavra-chave `break` é utilizada para interromper a execução de uma estrutura de repetição imediatamente.
- Quando o `break` é encontrado dentro de um loop, o loop é interrompido e a execução continua com o próximo código após o loop.

Sintaxe do Break:

~~~javascript
// Código JavaScript

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
~~~

Neste exemplo, o loop `for` é interrompido quando `i` é igual a 5, e a execução continua com o próximo código após o loop.

Continue:

- A palavra-chave `continue` é utilizada para pular a iteração atual de uma estrutura de repetição e continuar com a próxima iteração.
- Quando o `continue` é encontrado dentro de um loop, o restante do código dentro do loop para a iteração atual é ignorado, e a execução continua com a próxima iteração do loop.

Sintaxe do Continue:

~~~javascript
// Código JavaScript

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
~~~

Neste exemplo, o `console.log(i)` é ignorado quando `i` é igual a 5 devido ao `continue`, e a execução continua com a próxima iteração do loop.

Observações:

- O `break` e o `continue` são frequentemente utilizados em conjunto com estruturas condicionais (if) dentro de loops para controlar o fluxo de execução do código.
- O `break` é útil quando se deseja sair completamente de um loop, enquanto o `continue` é útil quando se deseja pular apenas uma iteração do loop.

As palavras-chave `break` e `continue` são ferramentas poderosas para controlar o fluxo de execução dentro de loops em JavaScript, permitindo maior flexibilidade no desenvolvimento de algoritmos.

## Arrow Functions em JavaScript

As arrow functions (funções de seta) são uma forma concisa e simplificada de escrever funções em JavaScript. Elas oferecem uma sintaxe mais curta em comparação com as funções tradicionais e têm um comportamento ligeiramente diferente em relação ao escopo de `this`.

Sintaxe Básica:

A sintaxe básica de uma arrow function é a seguinte:

~~~javascript
// Código JavaScript

// Sem parâmetros
const minhaFuncao = () => {
    // Código da função
};

// Com um parâmetro
const minhaFuncao = (parametro) => {
    // Código da função
};

// Com múltiplos parâmetros
const minhaFuncao = (parametro1, parametro2) => {
    // Código da função
};

// Com retorno implícito
const minhaFuncao = () => expressao;
~~~

Comportamento de Escopo de this:

- Nas arrow functions, o valor de `this` é definido no momento em que a função é criada, não no momento em que é executada.
- Isso significa que o valor de `this` dentro de uma arrow function é hereditário do contexto em que a função foi definida, não do contexto de execução.
  
Exemplo de Utilização:

~~~javascript
// Código JavaScript

// Função tradicional
function soma(a, b) {
    return a + b;
}

// Arrow function equivalente
const soma = (a, b) => a + b;

console.log(soma(2, 3)); // Saída: 5
~~~

Vantagens:

- Sintaxe mais curta e concisa.
- Comportamento de this mais previsível em comparação com as funções tradicionais.

Desvantagens:

- Não podem ser usadas como construtoras (não podem ser chamadas com new).
- Não possuem arguments (mas podem ser substituídas por rest parameters).

As arrow functions são uma adição poderosa ao JavaScript, oferecendo uma sintaxe mais enxuta e um comportamento de this mais intuitivo em comparação com as funções tradicionais.

## Tratando e Lançando Erros em JavaScript

Em JavaScript, é possível tratar e lançar erros usando as palavras-chave `try`, `catch` e `throw`. Isso permite que os desenvolvedores controlem o fluxo de execução do código em situações de erro.

Try...Catch:

- A estrutura `try...catch` é utilizada para envolver blocos de código onde podem ocorrer erros. Ela permite que você "tente" executar um bloco de código e, caso ocorra um erro, "capture" e manipule o erro.

Sintaxe do Try...Catch:

~~~javascript
// Código JavaScript

try {
    // Bloco de código onde ocorrem operações arriscadas
} catch (error) {
    // Bloco de código para lidar com o erro
}
~~~

- No bloco `try`, você coloca o código que deseja executar e que pode lançar um erro.
- Se ocorrer um erro dentro do bloco `try`, o controle do fluxo de execução será transferido para o bloco `catch`, onde você pode manipular o erro.

Throw:

A palavra-chave `throw` é utilizada para lançar explicitamente um erro. Isso pode ser útil quando você deseja sinalizar um erro em uma situação específica.

Sintaxe do Throw:

~~~javascript
// Código JavaScript

throw new Error("Mensagem de erro");
~~~

- `new Error()` cria um novo objeto de erro com a mensagem especificada.

Exemplo de Utilização do Try...Catch:

~~~javascript
// Código JavaScript

try {
    let resultado = dividir(10, 0);
    console.log(resultado);
} catch (error) {
    console.error("Ocorreu um erro:", error.message);
}

function dividir(dividendo, divisor) {
    if (divisor === 0) {
        throw new Error("Divisão por zero não é permitida");
    }
    return dividendo / divisor;
}
~~~

Neste exemplo, a função `dividir` lança um erro caso o divisor seja zero. O bloco `try` envolve a chamada da função `dividir`, e o bloco `catch` lida com o erro, exibindo uma mensagem de erro.

Observações:

- O uso de `try...catch` é recomendado para lidar com erros de forma controlada e evitar que o programa pare de funcionar inesperadamente.
- É importante entender quando e como lançar e tratar erros de forma apropriada, para tornar o código mais robusto e confiável.

## Bloco Finally em JavaScript

O bloco `finally` é uma parte opcional de uma estrutura `try...catch`, que é executada independentemente de ocorrer uma exceção ou não. Ele é utilizado para realizar operações que devem ser executadas sempre, independentemente do resultado do bloco `try` ou `catch`.

Sintaxe do Finally:

~~~javascript
// Código JavaScript

try {
    // Bloco de código onde podem ocorrer exceções
} catch (error) {
    // Bloco de código para lidar com exceções
} finally {
    // Bloco de código a ser executado sempre
}
~~~

- O bloco `finally` é opcional e pode ser utilizado após o bloco `try` e/ou o bloco `catch`.
- O código dentro do bloco `finally` será executado após a execução do bloco `try` e, se houver, após o bloco `catch`.

Funcionamento:

- O bloco `finally` é sempre executado, independentemente de ocorrer uma exceção no bloco `try` ou de ser capturada no bloco `catch`.
- Ele é útil para realizar operações de limpeza, como fechar conexões de banco de dados, liberar recursos ou finalizar operações pendentes.

Exemplo de Utilização do Finally:

~~~javascript
// Código JavaScript

let arquivoAberto = false;

try {
    abrirArquivo();
    console.log("Arquivo aberto com sucesso");
} catch (error) {
    console.error("Erro ao abrir o arquivo:", error.message);
} finally {
    if (arquivoAberto) {
        fecharArquivo();
        console.log("Arquivo fechado");
    }
}

function abrirArquivo() {
    // Simulando abertura de arquivo (pode lançar uma exceção)
    arquivoAberto = true;
}

function fecharArquivo() {
    // Simulando fechamento de arquivo
    arquivoAberto = false;
}
~~~

- Neste exemplo, o bloco `finally` é utilizado para garantir que o arquivo seja fechado, independentemente de ter sido aberto com sucesso ou não.

Observações:

- O bloco `finally` é útil para garantir que certas operações sejam executadas, mesmo em casos de exceção.
- Ele é frequentemente utilizado para realizar operações de limpeza ou finalização de recursos.

## setInterval e setTimeout em JavaScript

`setInterval` e `setTimeout` são duas funções em JavaScript que permitem agendar a execução de determinado código em intervalos de tempo específicos. Ambas são úteis para criar funcionalidades de temporização e execução de tarefas assíncronas.

setTimeout:

- A função `setTimeout` é utilizada para agendar a execução de uma função ou um trecho de código após um determinado período de tempo.

Sintaxe do setTimeout:

~~~javascript
// Código JavaScript

setTimeout(funcao, tempo);
~~~

- `funcao`: A função ou trecho de código a ser executado após o tempo especificado.
- `tempo`: O tempo em milissegundos que deve decorrer antes de a função ser executada.

setInterval:

- A função `setInterval` é utilizada para agendar a execução repetida de uma função ou um trecho de código em intervalos regulares de tempo.

Sintaxe do setInterval:

~~~javascript
// Código JavaScript

setInterval(funcao, intervalo);
~~~

- `funcao`: A função ou trecho de código a ser executado em cada intervalo de tempo.
- `intervalo`: O intervalo de tempo em milissegundos entre as execuções da função.

Exemplo de Utilização do setTimeout:

~~~javascript
// Código JavaScript

setTimeout(() => {
    console.log("Esta mensagem será exibida após 2 segundos");
}, 2000);
~~~

Neste exemplo, a mensagem será exibida após um atraso de 2 segundos.

Exemplo de Utilização do setInterval:

~~~javascript
// Código JavaScript

let contador = 0;
const intervalo = setInterval(() => {
    console.log("Contador: " + contador);
    contador++;
    if (contador === 5) {
        clearInterval(intervalo);
    }
}, 1000);
~~~

Neste exemplo, a mensagem é exibida a cada segundo, e o contador é incrementado. O intervalo é interrompido quando o contador atinge o valor 5.

Observações:

- É importante considerar o tempo especificado e o comportamento do código dentro da função passada como argumento para evitar atrasos ou problemas de desempenho.
- O uso de `setTimeout` e `setInterval` é comum em tarefas assíncronas, animações, atualizações periódicas e temporizadores em JavaScript.

## Exercício 01 - cálculo de IMC

O pequeno projeto em HTML, CSS e JAVASCRIPT pode ser encontrado em `./3_/Exercicio1_projeto-imc`. Esse projeto tem como foco a utilização de conhecimentos básicos sobre essas tecnológias, integrando funções do javascript para criaçõ de lógica e manipulação de uma página html e css.

## Exercício 02 - lógica de programação

São resolvidas pequenas questôes relacionadas a logica de programação, utilizando recursos do JavaScript. A pasta e documento referente ao exercício pode ser encontrado em `./3_/Exercicio2_logica-de-programacao/exercicios.js`.

## Exercício 03 - Criando um timer com setInterval

O pequeno projeto envolve as tecnologias do HTML, CSS e JAVASCRIPT para desenvolver um projeto em que, através de botões, pode-se controlar um timer, podendo inicia-l, pausa-lo e zerar seu valor. A pasta referente ao mini projeto pode ser encontrado em `./3_/Exercicio3_timer-setInterval`.

## Exercício 04 - Criando uma lista de tarefas

O pequeno projeto envolve tecnologias como o HTML, CSS e o JAVASCRIPT para o desenvolvimento de uma aplicação para criação de tarefas, com funcionalidade de salvamento no localStorage. A pasta referente ao mini projeto pode ser encontrado em `./3_/Exercicio4_lista-de-tarefas`.
