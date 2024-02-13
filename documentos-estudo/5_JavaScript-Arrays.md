# JavaScript Arrays (avançado)

Índice

- [JavaScript Arrays (avançado)](#javascript-arrays-avançado)
  - [Revisão Arrays em JavaScript](#revisão-arrays-em-javascript)
  - [Construtor para Criação de Arrays em JavaScript](#construtor-para-criação-de-arrays-em-javascript)
  - [Atribuições por Referência de Arrays em JavaScript](#atribuições-por-referência-de-arrays-em-javascript)
  - [Método `slice()` em Arrays em JavaScript](#método-slice-em-arrays-em-javascript)
  - [Método `splice()` em Arrays em JavaScript](#método-splice-em-arrays-em-javascript)
  - [Método `split()` em Strings em JavaScript](#método-split-em-strings-em-javascript)
  - [Método `join()` em Arrays em JavaScript](#método-join-em-arrays-em-javascript)
  - [Método `concat()` em Arrays em JavaScript](#método-concat-em-arrays-em-javascript)
  - [Spread Operator em JavaScript](#spread-operator-em-javascript)
  - [Método `filter()` em Arrays em JavaScript](#método-filter-em-arrays-em-javascript)
    - [Filtrando Objetos em JavaScript usando o Método `filter()`](#filtrando-objetos-em-javascript-usando-o-método-filter)
  - [Método `map()` em JavaScript para Arrays e Objetos](#método-map-em-javascript-para-arrays-e-objetos)
  - [Método `reduce()` em JavaScript](#método-reduce-em-javascript)
  - [Filter + Map + Reducer](#filter--map--reducer)
  - [Método `forEach()` em JavaScript](#método-foreach-em-javascript)

## Revisão Arrays em JavaScript

Os arrays são estruturas de dados fundamentais em JavaScript que permitem armazenar múltiplos valores em uma única variável. Eles são usados para representar coleções de elementos, como números, strings, objetos e até mesmo outras arrays.

Características Principais:

1. **Armazenamento de Dados:** Os arrays permitem armazenar múltiplos valores em uma única variável, organizados em uma sequência ordenada.
2. **Índices Numéricos:** Os elementos de um array são acessados por meio de índices numéricos, começando em 0 para o primeiro elemento.
3. **Tipos de Dados Diversos:** Os arrays podem conter valores de qualquer tipo de dado, incluindo números, strings, booleanos, objetos, funções e até mesmo outras arrays.
4. **Tamanho Dinâmico:** O tamanho de um array pode ser alterado dinamicamente, adicionando ou removendo elementos conforme necessário.

Exemplo de Declaração de Array:

~~~javascript
// Código JavaScript

const numeros = [1, 2, 3, 4, 5];
const nomes = ['Alice', 'Bob', 'Carol'];
const misto = [1, 'dois', true, { chave: 'valor' }];
~~~

Acessando Elementos de um Array:

Os elementos de um array são acessados usando a notação de colchetes (`[]`) seguida pelo índice do elemento desejado.

~~~javascript
// Código JavaScript

const numeros = [10, 20, 30, 40, 50];
console.log(numeros[0]); // Saída: 10
console.log(numeros[2]); // Saída: 30
~~~

Propriedades e Métodos Importantes de Arrays:

- `length`: Propriedade que retorna o número de elementos em um array.
- `push()`: Método que adiciona um ou mais elementos ao final de um array.
- `pop()`: Método que remove o último elemento de um array e o retorna.
- `shift()`: Método que remove o primeiro elemento de um array e retorna esse elemento.
- `unshift()`: Método que adiciona um ou mais elementos ao início de um array.
- `slice()`: Metodo usado para retornar uma cópia de parte de um array, especificada pelos índices de início e fim.
- `splice()`: Método usado para adicionar, remover ou substituir elementos em um array.
- `join()`: Método que criar uma string a partir dos elementos de um array.
- `concat()`: Método que combina dois ou mais arrays em um único array.
- `forEach()`: Método que executa uma função para cada elemento do array.
- `map()`: Método que cria um novo array com os resultados da chamada de uma função para cada elemento do array.
- `reverse()`: Método usado para inverter a ordem dos elementos em um array.

Os arrays são uma parte fundamental da linguagem JavaScript, oferecendo uma maneira poderosa e flexível de armazenar e manipular coleções de dados de forma eficiente.

## Construtor para Criação de Arrays em JavaScript

Em JavaScript, é possível criar arrays e objetos tanto usando a sintaxe literal quanto por meio de construtores embutidos na linguagem. Os construtores são funções pré-definidas que podem ser invocadas com a palavra-chave `new` para criar novas instâncias de arrays ou objetos.

Construtor de Arrays:
O construtor de arrays em JavaScript é a função `Array()`, que pode ser usada para criar um novo array vazio ou preenchido com elementos inicialmente.

Exemplo de Uso do Construtor de Arrays:

~~~javascript
// Código JavaScript

const arrayVazio = new Array(); // Cria um array vazio
const arrayPreenchido = new Array(1, 2, 3); // Cria um array com elementos inicialmente
~~~

Construtor de Objetos:
O construtor de objetos em JavaScript é a função `Object()`, que pode ser usada para criar um novo objeto vazio ou preenchido com propriedades inicialmente.

Exemplo de Uso do Construtor de Objetos:

~~~javascript
// Código JavaScript

const objetoVazio = new Object(); // Cria um objeto vazio
const objetoPreenchido = new Object({ chave1: 'valor1', chave2: 'valor2' }); // Cria um objeto com propriedades inicialmente
~~~

Observações:

- Embora seja possível criar arrays e objetos usando os construtores embutidos, a sintaxe literal (colchetes para arrays e chaves para objetos) é mais comum e preferida na maioria dos casos.
- Os construtores de arrays e objetos são úteis quando se deseja criar instâncias de forma dinâmica ou quando os valores são passados como argumentos.

## Atribuições por Referência de Arrays em JavaScript

Em JavaScript, quando você atribui um array a uma variável, na verdade está atribuindo uma referência ao array, não uma cópia dos valores do array. Isso significa que se você modificar o array através de uma variável, essas modificações serão refletidas em todas as variáveis que compartilham a mesma referência para esse array.

Funcionamento Detalhado:

1. **Atribuição de Referência:** Quando um array é atribuído a uma variável, essa variável recebe uma referência para o array, não uma cópia dos valores do array.
2. **Compartilhamento de Referências:** Se você atribuir o mesmo array a várias variáveis, todas essas variáveis compartilharão a mesma referência para o mesmo array na memória.
3. **Modificações em Local Único:** Quando você modifica o array através de uma variável, as modificações são feitas diretamente no array na memória.
4. **Reflexo das Modificações:** Todas as outras variáveis que compartilham a mesma referência verão as modificações refletidas no array.

Exemplo de Atribuição por Referência:

~~~javascript
// Código JavaScript

let array1 = [1, 2, 3];
let array2 = array1; // Ambas as variáveis compartilham a mesma referência para o mesmo array

array1.push(4); // Modifica array1
console.log(array2); // Saída: [1, 2, 3, 4] - Modificações refletidas em array2
~~~

Precauções e Considerações:

- Ao trabalhar com atribuições por referência, tenha cuidado ao modificar arrays, pois isso pode afetar inesperadamente outras partes do seu código.
- Se precisar criar uma cópia independente de um array, você pode usar métodos como `slice()`, `concat()`, ou a sintaxe de espalhamento (`...`) para criar uma cópia dos valores do array em uma nova referência.

A atribuição por referência de arrays em JavaScript permite compartilhar eficientemente dados entre várias variáveis, mas requer cautela ao modificar arrays para evitar efeitos colaterais indesejados.

## Método `slice()` em Arrays em JavaScript

O método `slice()` é uma função embutida em JavaScript que retorna uma parte de um array original sem modificar o array original. Ele pode ser usado para criar cópias superficiais (shallow copies) de arrays ou para extrair partes específicas de um array sem afetar o array original.

Funcionamento:

- O método `slice()` retorna uma cópia superficial de uma parte do array original, especificada por um intervalo de índices.
- Ele aceita dois parâmetros opcionais: `inicio` e `fim`, que especificam o início e o fim do intervalo a ser retornado. O intervalo inclui o elemento no índice `inicio` e vai até, mas não inclui, o elemento no índice `fim`.
- Se não for fornecido um valor para `fim`, o método retornará os elementos do `inicio` até o final do array.

Sintaxe:

~~~javascript
// Código JavaScript

array.slice([inicio[, fim]])
~~~

Exemplos de Uso:

Extração de uma Parte do Array:

~~~javascript
// Código JavaScript

const array = [1, 2, 3, 4, 5];
const parte = array.slice(1, 4); // Retorna uma cópia dos elementos do índice 1 ao índice 3 (não incluído)
console.log(parte); // Saída: [2, 3, 4]
~~~

Cópia Superficial do Array:

~~~javascript
// Código JavaScript

const array = [1, 2, 3, 4, 5];
const copia = array.slice(); // Retorna uma cópia superficial do array original
console.log(copia); // Saída: [1, 2, 3, 4, 5]
~~~

Índices Negativos:

~~~javascript
// Código JavaScript

const array = [1, 2, 3, 4, 5];
const parte = array.slice(-3); // Retorna os últimos 3 elementos do array original
console.log(parte); // Saída: [3, 4, 5]
~~~

Observações:

- O método `slice()` não modifica o array original, mas retorna uma cópia superficial dos elementos especificados.
- Se `inicio` for maior ou igual ao comprimento do array, o método retornará um array vazio.
- Se `fim` for omitido ou maior que o comprimento do array, o método retornará os elementos até o final do array.

O método `slice()` é uma ferramenta útil em JavaScript para extrair partes específicas de um array sem modificar o array original, permitindo a manipulação segura e flexível dos dados do array.

## Método `splice()` em Arrays em JavaScript

O método `splice()` é uma função embutida em JavaScript que permite alterar o conteúdo de um array, adicionando novos elementos, removendo elementos existentes ou substituindo elementos existentes. Ele modifica o array original e retorna um novo array contendo os elementos removidos, se houver.

Funcionamento:

- O método `splice()` pode ser invocado em um array para realizar operações de inserção, remoção ou substituição de elementos.
- Ele aceita parâmetros opcionais que especificam a posição inicial, o número de elementos a serem removidos e os novos elementos a serem inseridos.

Sintaxe:

~~~javascript
// Código JavaScript

array.splice(inicio, quantidade[, elemento1[, elemento2[, ...]]])
~~~

- inicio: Índice onde começar a alteração no array.
- quantidade: Número de elementos a serem removidos a partir do inicio.
- `elemento1`, elemento2, ...: Elementos a serem inseridos no array (opcional).

Exemplos de Uso:

Remoção de Elementos:

~~~javascript
// Código JavaScript

const array = [1, 2, 3, 4, 5];
const removidos = array.splice(1, 2); // Remove 2 elementos a partir do índice 1
console.log(array); // Saída: [1, 4, 5]
console.log(removidos); // Saída: [2, 3]
~~~

Substituição de Elementos:

~~~javascript
// Código JavaScript

const array = [1, 2, 3, 4, 5];
const substituidos = array.splice(1, 2, 'a', 'b', 'c'); // Remove 2 elementos a partir do índice 1 e insere 'a', 'b', 'c'
console.log(array); // Saída: [1, 'a', 'b', 'c', 4, 5]
console.log(substituidos); // Saída: [2, 3]
~~~

Inserção de Elementos:

~~~javascript
// Código JavaScript

const array = [1, 2, 3, 4, 5];
array.splice(2, 0, 'x', 'y'); // Insere 'x', 'y' a partir do índice 2 sem remover nenhum elemento
console.log(array); // Saída: [1, 2, 'x', 'y', 3, 4, 5]
~~~

Observações:

- O método s`plice()` altera o array original e retorna um novo array contendo os elementos removidos, se houver.
- Se nenhum elemento for removido, o método retornará um array vazio.
- Se o `inicio` for negativo, ele conta a partir do final do array.

O método `splice()` é uma ferramenta poderosa em JavaScript para realizar operações de inserção, remoção e substituição de elementos em arrays de forma eficiente, permitindo a manipulação dinâmica do conteúdo do array.

## Método `split()` em Strings em JavaScript

O método `split()` é uma função embutida em JavaScript que divide uma string em um array de substrings com base em um separador especificado. Ele retorna um novo array contendo as substrings resultantes da divisão da string original.

Funcionamento:

- O método `split()` recebe um argumento, o `separador`, que pode ser uma string, uma expressão regular ou uma string vazia.
- Ele divide a string original em partes, usando o `separador` como ponto de divisão, e retorna um array contendo as partes resultantes.
- Se o `separador` for uma string vazia (`""`), o método dividirá a string em cada caractere individual.

Sintaxe:

~~~javascript
// Código JavaScript

string.split([separador[, limite]])
~~~

Parâmetros:

- `separador`: Opcional. Especifica o caractere ou expressão regular usado para separar a string. Se omitido, a string é dividida em cada caractere.
- `limite`: Opcional. Um número inteiro que especifica o número máximo de divisões a serem feitas. Subsequentemente, as partes adicionais não serão incluídas no array resultante.

Exemplos de Uso:

Divisão por Espaços:

~~~javascript
// Código JavaScript

const frase = "Olá mundo feliz";
const palavras = frase.split(" "); // Divide a frase em palavras usando o espaço como separador
console.log(palavras); // Saída: ["Olá", "mundo", "feliz"]
~~~

Divisão por Vírgulas:

~~~javascript
// Código JavaScript

const lista = "maçã, banana, laranja, morango";
const frutas = lista.split(", "); // Divide a lista de frutas usando a vírgula seguida de espaço como separador
console.log(frutas); // Saída: ["maçã", "banana", "laranja", "morango"]
~~~

Divisão em Caracteres:

~~~javascript
// Código JavaScript

const palavra = "JavaScript";
const caracteres = palavra.split(""); // Divide a palavra em caracteres individuais
console.log(caracteres); // Saída: ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
~~~

Observações:

- O método `split()` é útil para dividir strings em partes menores com base em um padrão específico.
- Se o `separador` for omitido ou não encontrado na string, o método retornará um array contendo a string original como seu único elemento.

O método `split()` é uma ferramenta útil em JavaScript para dividir strings em substrings com base em um separador especificado, permitindo a manipulação flexível e eficiente de dados de texto.

## Método `join()` em Arrays em JavaScript

O método `join()` é uma função embutida em JavaScript que combina os elementos de um array em uma única string. Ele concatena os elementos do array usando um separador especificado e retorna a string resultante.

Funcionamento:

- O método `join()` concatena os elementos de um array em uma única string, separando cada elemento com um separador especificado.
- Se nenhum separador for fornecido, os elementos do array são concatenados sem nenhum caractere entre eles.
- Ele não modifica o array original, apenas retorna a string resultante da concatenação dos elementos.

Sintaxe:

~~~javascript
// Código JavaScript

array.join([separador])
~~~

Parâmetros:

- `separador`: Opcional. Especifica o caractere ou string a ser usado como separador entre os elementos do array ao serem concatenados na string resultante.

Exemplos de Uso:

Concatenação com Espaços:

~~~javascript
// Código JavaScript

const palavras = ["Olá", "mundo", "feliz"];
const frase = palavras.join(" "); // Concatena as palavras com um espaço entre elas
console.log(frase); // Saída: "Olá mundo feliz"
~~~

Concatenação com Vírgulas:

~~~javascript
// Código JavaScript

const frutas = ["maçã", "banana", "laranja", "morango"];
const lista = frutas.join(", "); // Concatena as frutas com uma vírgula e um espaço entre elas
console.log(lista); // Saída: "maçã, banana, laranja, morango"
~~~

Concatenação sem Separador:

~~~javascript
// Código JavaScript

const caracteres = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];
const palavra = caracteres.join(""); // Concatena os caracteres sem nenhum separador entre eles
console.log(palavra); // Saída: "JavaScript"
~~~

Observações:

- O método `join()` é útil para criar strings a partir dos elementos de um array, formatando-os de acordo com um padrão específico.
- Se nenhum separador for fornecido, os elementos do array serão concatenados sem nenhum caractere entre eles.

O método `join()` é uma ferramenta útil em JavaScript para combinar os elementos de um array em uma única string, permitindo a criação flexível de strings formatadas a partir dos elementos do array.

## Método `concat()` em Arrays em JavaScript

O método `concat()` é uma função embutida em JavaScript que combina dois ou mais arrays, criando um novo array que contém os elementos dos arrays originais. Ele não modifica os arrays originais, apenas retorna um novo array contendo os elementos combinados.

Funcionamento:

- O método `concat()` combina os elementos de dois ou mais arrays em um único array, preservando a ordem dos elementos originais.
- Ele não modifica os arrays originais, mas retorna um novo array contendo os elementos combinados.
- Pode ser usado para combinar arrays pré-existentes ou adicionar novos elementos a um array existente.

Sintaxe:

~~~javascript
// Código JavaScript

array.concat(valor1, valor2, ..., valorN)
~~~

Parâmetros:

- `valor1, valor2, ..., valorN`: Opcional. Os valores a serem concatenados com o array original. Podem ser arrays, valores individuais ou ambos.

Exemplos de Uso:

Combinação de Dois Arrays:

~~~javascript
// Código JavaScript

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinado = array1.concat(array2); // Combina os elementos de array1 e array2 em um novo array
console.log(combinado); // Saída: [1, 2, 3, 4, 5, 6]
~~~

Adição de Elementos a um Array Existente:

~~~javascript
// Código JavaScript

const array = [1, 2, 3];
const combinado = array.concat(4, 5, 6); // Adiciona os números 4, 5 e 6 ao final do array original
console.log(combinado); // Saída: [1, 2, 3, 4, 5, 6]
~~~

Concatenação de Arrays Vazios:

~~~javascript
// Código JavaScript

const array1 = [];
const array2 = [4, 5, 6];
const combinado = array1.concat(array2); // Combina um array vazio com array2
console.log(combinado); // Saída: [4, 5, 6]
~~~

Observações:

- O método `concat()` cria e retorna um novo array contendo os elementos combinados dos arrays originais.
- Se os parâmetros fornecidos para o método `concat()` forem arrays, seus elementos serão adicionados individualmente ao novo array resultante.

O método `concat()` é uma ferramenta útil em JavaScript para combinar arrays e adicionar elementos a um array existente de forma flexível, permitindo a criação de novos arrays com base nos arrays originais.

## Spread Operator em JavaScript

O operador de propagação, comumente conhecido como spread operator, é um recurso poderoso introduzido no ECMAScript 6 (ES6) que permite espalhar os elementos de um array ou os caracteres de uma string em outro contexto, como em argumentos de função ou elementos de outro array.

Funcionamento:

- O spread operator é representado pelos três pontos (`...`) e é usado antes de um array, string ou objeto para "espalhar" seus elementos em outro contexto.
- Ele pode ser usado em diversas situações, como na passagem de argumentos de função, na criação de novos arrays, na concatenação de arrays, entre outros.

Exemplos de Uso:

Passagem de Argumentos de Função:

~~~javascript
// Código JavaScript

function soma(a, b, c) {
    return a + b + c;
}

const valores = [1, 2, 3];
console.log(soma(...valores)); // Saída: 6
~~~

Criação de Novos Arrays:

~~~javascript
// Código JavaScript

const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6]; // Cria um novo array com os elementos de array1 mais os elementos adicionais
console.log(array2); // Saída: [1, 2, 3, 4, 5, 6]
~~~

Concatenação de Arrays:

~~~javascript
// Código JavaScript

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2]; // Concatena os elementos de array1 e array2 em um novo array
console.log(array3); // Saída: [1, 2, 3, 4, 5, 6]
~~~

Vantagens do Spread Operator:

- Facilita a manipulação e transformação de arrays e strings em JavaScript.
- Permite uma sintaxe mais concisa e legível em comparação com métodos tradicionais, como `concat()` ou `apply()`.

Observações:

- O spread operator pode ser usado com arrays, strings e objetos em JavaScript.
- Ele cria cópias rasas dos elementos, o que significa que os elementos aninhados são copiados por referência, não por valor.

O spread operator é uma ferramenta versátil em JavaScript para manipular arrays, strings e objetos de forma concisa e eficiente, facilitando operações como passagem de argumentos de função, criação de novos arrays e concatenação de arrays.

## Método `filter()` em Arrays em JavaScript

O método `filter()` é uma função embutida em JavaScript que cria um novo array contendo todos os elementos de um array original que passam por um teste especificado por uma função de retorno de chamada (callback). Ele não modifica o array original, apenas retorna um novo array contendo os elementos filtrados.

Funcionamento:

- O método `filter()` cria um novo array contendo apenas os elementos do array original que satisfazem uma condição especificada por uma função de retorno de chamada.
- A função de retorno de chamada é chamada para cada elemento do array original e retorna `true` se o elemento deve ser incluído no novo array resultante, ou `false` caso contrário.
- O método `filter()` não modifica o array original, mas retorna um novo array contendo os elementos que passaram no teste.

Sintaxe:

~~~javascript
// Código JavaScript

array.filter(callback(elemento[, índice[, array]])[, thisArg])
~~~

Parâmetros:

- `callback`: Uma função que é chamada para cada elemento do array e retorna `true` se o elemento deve ser incluído no novo array, ou `false` caso contrário.
  - `elemento`: O valor do elemento atual sendo processado no array.
  - `índice`: O índice do elemento atual sendo processado no array (opcional).
  - `array`: O array original que está sendo percorrido (opcional).
- `thisArg`: Opcional. Um valor a ser usado como this ao executar a função de retorno de chamada.

Exemplos de Uso:

Filtragem de Números Pares:

~~~javascript
// Código JavaScript

const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter(numero => numero % 2 === 0); // Filtra apenas os números pares
console.log(pares); // Saída: [2, 4, 6]
~~~

Filtragem de Strings com Mais de 5 Caracteres:

~~~javascript
// Código JavaScript

const palavras = ["casa", "carro", "bicicleta", "avião"];
const longas = palavras.filter(palavra => palavra.length > 5); // Filtra apenas as palavras com mais de 5 caracteres
console.log(longas); // Saída: ["bicicleta", "avião"]
~~~

Filtragem de Valores Nulos e Indefinidos:

~~~javascript
// Código JavaScript

const valores = [10, null, 20, undefined, 30, 0];
const filtrados = valores.filter(valor => valor !== null && valor !== undefined); // Filtra os valores nulos e indefinidos
console.log(filtrados); // Saída: [10, 20, 30, 0]
~~~

Observações:

- O método `filter()` é útil para filtrar elementos de um array com base em critérios específicos, como valores, propriedades ou condições de comparação.
- A função de retorno de chamada passada para `filter()` deve retornar um valor booleano (`true` para incluir o elemento, `false` para excluí-lo).
- O novo array resultante contém apenas os elementos do array original que passaram no teste especificado.

O método `filter()` é uma ferramenta poderosa em JavaScript para filtrar elementos de um array com base em critérios específicos, permitindo a criação de novos arrays contendo apenas os elementos desejados.

### Filtrando Objetos em JavaScript usando o Método `filter()`

O método `filter()` em JavaScript pode ser utilizado não apenas para filtrar arrays de valores, mas também para filtrar arrays de objetos com base em critérios específicos. Ele permite criar um novo array contendo apenas os objetos que satisfazem uma determinada condição especificada por uma função de retorno de chamada.

Funcionamento:

- Assim como com arrays de valores, o método `filter()` em arrays de objetos itera sobre cada elemento do array original e aplica uma função de retorno de chamada a cada objeto.
- A função de retorno de chamada é chamada para cada objeto do array e deve retornar `true` se o objeto deve ser incluído no novo array resultante, ou `false` caso contrário.
- O método `filter()` cria e retorna um novo array contendo apenas os objetos que passaram no teste especificado pela função de retorno de chamada.

Exemplo de Uso:

Considere o seguinte array de objetos representando pessoas:

~~~javascript
// Código JavaScript

const pessoas = [
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 40 }
];
~~~

Podemos usar o método filter() para criar um novo array contendo apenas as pessoas com idade superior a 30 anos:

~~~javascript
// Código JavaScript

const pessoasMaisVelhas = pessoas.filter(pessoa => pessoa.idade > 30);
console.log(pessoasMaisVelhas);
// Saída: [
//   { nome: "Pedro", idade: 40 }
// ]
~~~

Assim como a criação de um novo array contendo apenas as pessoas com nome termina com "a":

~~~javascript
// Código JavaScript

const pessoasMaisVelhas = pessoas.filter(pessoa => pessoa.nome.toLowerCase().endsWith('a'));
console.log(pessoasMaisVelhas);
// Saída: [
//   { nome: "Maria", idade: 25 }
// ]
~~~

## Método `map()` em JavaScript para Arrays e Objetos

O método `map()` em JavaScript é uma função versátil que pode ser aplicada tanto a arrays de valores quanto a arrays de objetos. Ele permite iterar sobre os elementos de um array e aplicar uma função de transformação a cada elemento, retornando um novo array contendo os resultados da aplicação da função a cada elemento.

Em Arrays de Valores:

Funcionamento:

- No contexto de arrays de valores, o método `map()` itera sobre cada elemento do array original e aplica uma função de transformação a cada elemento.
- A função de transformação é chamada para cada elemento do array e retorna o valor a ser incluído no novo array resultante.
- O método `map()` cria e retorna um novo array contendo os resultados da aplicação da função a cada elemento do array original.

Exemplo de Uso:
Considere o seguinte array de números:

~~~javascript
// Código JavaScript

const numeros = [1, 2, 3, 4, 5];
~~~

Podemos usar o método map() para criar um novo array contendo os números dobrados:

~~~javascript
// Código JavaScript

const dobrados = numeros.map(numero => numero * 2);
console.log(dobrados);
// Saída: [2, 4, 6, 8, 10]
~~~

Em Arrays de Objetos:

Funcionamento:

- No contexto de arrays de objetos, o método `map()` funciona da mesma forma que em arrays de valores, porém aplicado a cada objeto do array.
- A função de transformação é chamada para cada objeto do array e retorna o objeto resultante da transformação.
- O método `map()` cria e retorna um novo array contendo os objetos transformados.

Exemplo de Uso:

Considere o seguinte array de objetos representando pessoas:

~~~javascript
// Código JavaScript

const pessoas = [
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 40 }
];
~~~

Podemos usar o método map() para criar um novo array contendo apenas os nomes das pessoas:

~~~javascript
// Código JavaScript

const nomes = pessoas.map(pessoa => pessoa.nome);
console.log(nomes);
// Saída: ["João", "Maria", "Pedro"]
~~~

Observações:

- A função de transformação passada para o método map() deve retornar o valor ou objeto a ser incluído no novo array resultante.
- O novo array resultante conterá os resultados da aplicação da função a cada elemento do array original.

O método map() é uma ferramenta poderosa em JavaScript para transformar elementos de arrays de valores ou objetos de forma flexível e eficiente, permitindo a criação de novos arrays com base nos elementos originais.

## Método `reduce()` em JavaScript

O método `reduce()` é uma função embutida em JavaScript que é utilizada para reduzir (ou "agregar") os elementos de um array em um único valor. Ele executa uma função de redução fornecida para cada elemento do array, resultando em um único valor de retorno.

Funcionamento:

- O método `reduce()` itera sobre cada elemento do array e aplica uma função de redução a cada elemento, combinando-os em um único valor.
- A função de redução (também chamada de "reducer") é chamada para cada elemento do array e acumula um valor enquanto percorre o array.
- O método `reduce()` aceita um parâmetro adicional opcional, que representa o valor inicial do acumulador. Se nenhum valor inicial for fornecido, o primeiro elemento do array será utilizado como valor inicial do acumulador.

Sintaxe:

~~~javascript
// Código JavaScript

array.reduce(callback(acumulador, elemento[, índice[, array]])[, valorInicial])
~~~

Parâmetros:

- `callback`: Uma função que é chamada para cada elemento do array e acumula um valor enquanto percorre o array.
  - `acumulador`: O valor acumulado ao longo da iteração, atualizado a cada chamada da função de redução.
  - `elemento`: O valor do elemento atual sendo processado no array.
índice: O índice do elemento atual sendo processado no array (opcional).
  - `array`: O array original que está sendo percorrido (opcional).
- valorInicial: Opcional. Um valor inicial para o acumulador. Se não fornecido, o primeiro elemento do array será utilizado como valor inicial.

Exemplo de Uso:

Considere o seguinte array de números:

~~~javascript
// Código JavaScript

const numeros = [1, 2, 3, 4, 5];
~~~

Podemos usar o método `reduce()` para somar todos os números do array:

~~~javascript
// Código JavaScript

const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(soma); // Saída: 15 (soma de 1 + 2 + 3 + 4 + 5)
~~~

Exemplo de como usar o método `reduce()` para retornar apenas os números pares de um array:

~~~javascript
// Código JavaScript

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.reduce((pares, numero) => {
    if (numero % 2 === 0) {
        pares.push(numero);
    }
    return pares;
}, []);

console.log(numerosPares); // Saída: [2, 4, 6, 8, 10]
~~~

Neste exemplo, estamos usando o `reduce()` para iterar sobre o array de números. A cada iteração, verificamos se o número é par (numero % 2 === 0). Se for par, adicionamos o número ao array pares, que é o acumulador. No final, o `reduce()` retorna o array pares contendo apenas os números pares.

Observações:

- A função de redução passada para o método `reduce()` deve retornar o valor acumulado, que será passado para a próxima iteração como o valor do acumulador.
- O método `reduce()` é útil para realizar operações de agregação em arrays, como soma, multiplicação, concatenação, entre outras.

O método `reduce()` é uma ferramenta poderosa em JavaScript para reduzir os elementos de um array em um único valor, permitindo a realização de operações de agregação de forma eficiente.

## Filter + Map + Reducer

Abaixo está um exemplo de como você pode usar os métodos filter(), map() e reduce() em conjunto para realizar várias operações em um array:

~~~javascript
// Código JavaScript

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrando apenas os números pares
const numerosPares = numeros.filter(numero => numero % 2 === 0);

// Mapeando os números pares para seus quadrados
const quadrados = numerosPares.map(numero => numero ** 2);

// Reduzindo os quadrados para a soma deles
const somaDosQuadrados = quadrados.reduce((acumulador, numero) => acumulador + numero, 0);

console.log("Números pares:", numerosPares); // Saída: [2, 4, 6, 8, 10]
console.log("Quadrados:", quadrados); // Saída: [4, 16, 36, 64, 100]
console.log("Soma dos quadrados:", somaDosQuadrados); // Saída: 220
~~~

Neste exemplo:

- Usamos `filter()` para filtrar apenas os números pares do array original numeros.
- Usamos `map()` para mapear cada número par para seu quadrado.
- Usamos `reduce()` para reduzir os quadrados para a soma deles.

Dessa forma, combinamos os três métodos para realizar diferentes operações em um array de números em JavaScript.

Podemos encadear os métodos `filter()`, `map()` e `reduce()` em sequência para obter o mesmo resultado. Aqui está o código refatorado:

~~~javascript
// Código JavaScript

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const somaDosQuadrados = numeros
  .filter(numero => numero % 2 === 0) // Filtra apenas os números pares
  .map(numero => numero ** 2) // Mapeia os números pares para seus quadrados
  .reduce((acumulador, numero) => acumulador + numero, 0); // Reduz os quadrados para a soma deles

console.log("Soma dos quadrados:", somaDosQuadrados); // Saída: 220
~~~

## Método `forEach()` em JavaScript

O método `forEach()` é uma função embutida em JavaScript que permite iterar sobre os elementos de um array e executar uma função de retorno de chamada para cada elemento. Ele é útil quando você precisa executar uma operação para cada elemento do array, mas não precisa retornar nenhum valor específico.

Funcionamento:

- O método `forEach()` itera sobre cada elemento do array e executa uma função de retorno de chamada para cada elemento.
- A função de retorno de chamada é chamada para cada elemento do array, recebendo o elemento atual como argumento, mas não retorna nenhum valor específico.
- O método `forEach()` não retorna nada (ou retorna `undefined`), pois é utilizado principalmente para efeitos colaterais, como modificar elementos do array ou executar operações secundárias.

Sintaxe:

~~~javascript
// Código JavaScript

array.forEach(callback(elemento[, índice[, array]])[, thisArg])
~~~

Parâmetros:

- `callback`: Uma função que é chamada para cada elemento do array.
  - `elemento`: O valor do elemento atual sendo processado no array.
  - `índice`: O índice do elemento atual sendo processado no array (opcional).
  - `array`: O array original que está sendo percorrido (opcional).
- `thisArg`: Opcional. Um valor a ser usado como `this` ao executar a função de retorno de chamada.

Exemplo de Uso:

~~~javascript
// Código JavaScript

const numeros = [1, 2, 3, 4, 5];

numeros.forEach(numero => {
  console.log(numero * 2); // Saída: 2, 4, 6, 8, 10
});
~~~

Neste exemplo, usamos `forEach()` para iterar sobre cada elemento do array numeros e imprimir o dobro de cada número.

Outro exemplo de Uso:

~~~javascript
// Código JavaScript

const numeros = [1, 2, 3, 4, 5];
let soma = 0;

numeros.forEach(numero => {
  soma += numero;
});

console.log("A soma dos números é:", soma); // Saída: A soma dos números é: 15
~~~

Neste exemplo, usamos `forEach()` para iterar sobre cada elemento do array `numeros`. A cada iteração, adicionamos o número atual à variável `soma`. No final do loop, a variável `soma` conterá a soma de todos os números do array.

Observações:

- O método `forEach()` é útil quando você precisa iterar sobre todos os elementos de um array e executar uma operação para cada um deles.
- É importante observar que o método `forEach()` não retorna nenhum valor específico, ele é principalmente utilizado para efeitos colaterais.
- Se você precisa retornar um novo array com base em transformações dos elementos originais, é mais apropriado usar métodos como `map()` ou `filter()`.

O método `forEach()` é uma ferramenta útil em JavaScript para iterar sobre os elementos de um array e executar uma função de retorno de chamada para cada um deles.
