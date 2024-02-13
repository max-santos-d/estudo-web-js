# JavaScript Objetos e prototypes (avançado)

Índice

- [JavaScript Objetos e prototypes (avançado)](#javascript-objetos-e-prototypes-avançado)
  - [Revisando Objetos em JavaScript](#revisando-objetos-em-javascript)
  - [Object.defineProperty() e Object.defineProperties()](#objectdefineproperty-e-objectdefineproperties)
  - [Getters e Setters em JavaScript](#getters-e-setters-em-javascript)
    - [Getters e Setters em JavaScript com Object.defineProperty dentro de uma Factory Function](#getters-e-setters-em-javascript-com-objectdefineproperty-dentro-de-uma-factory-function)
    - [Getters e Setters em JavaScript com Object.defineProperty dentro de uma Função Construtora](#getters-e-setters-em-javascript-com-objectdefineproperty-dentro-de-uma-função-construtora)
  - [Métodos úteis para objetos](#métodos-úteis-para-objetos)
  - [Prototypes em JavaScript](#prototypes-em-javascript)
  - [Manipulando Prototypes](#manipulando-prototypes)
  - [Herança](#herança)
  - [Prototypes + Herança](#prototypes--herança)
  - [Polimorfismo em JavaScript com Constructor Functions](#polimorfismo-em-javascript-com-constructor-functions)
  - [Factory Functions + Prototypes em JavaScript](#factory-functions--prototypes-em-javascript)
  - [Objeto Map()](#objeto-map)
  - [Exercicio - Validação de CPF](#exercicio---validação-de-cpf)

## Revisando Objetos em JavaScript

1. Criando Objeto de Forma Literal
    - Em JavaScript, objetos podem ser criados de forma literal usando chaves `{}`.
    - Exemplo:

        ~~~javascript
        // Código JavaScript

        const pessoa = {
            nome: 'João',
            idade: 30,
            cidade: 'Exemplo'
        };
        ~~~

2. Criando Objeto com Seu Construtor
    - Você também pode criar objetos usando o construtor new `Object()`.
    - Exemplo:

        ~~~javascript
        // Código JavaScript

        const pessoa = new Object();
        pessoa.nome = 'João';
        pessoa.idade = 30;
        pessoa.cidade = 'Exemplo';
        ~~~

3. Apagando uma Chave do Objeto com `delete objeto.chave`
    - Você pode remover uma propriedade de um objeto usando o operador `delete`.
    - Exemplo:

        ~~~javascript
        // Código JavaScript

        delete pessoa.idade; // Remove a propriedade 'idade' do objeto pessoa
        ~~~

4. Object.freeze() em Objetos
    - O método `Object.freeze()` é usado para congelar um objeto, o que significa que suas propriedades existentes não podem ser modificadas, e nenhuma nova propriedade pode ser adicionada.
    - Exemplo:

        ~~~javascript
        // Código JavaScript

        Object.freeze(pessoa); // Congela o objeto pessoa
        ~~~

5. Métodos em Objetos
    - Métodos em objetos são simplesmente funções que estão associadas a propriedades de objetos.
    - Exemplo:

        ~~~javascript
        // Código JavaScript

        const pessoa = {
            nome: 'João',
            idade: 30,
            apresentar: function() {
                console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`);
            }
        };
        ~~~

6. Utilização do `this`
    - `this` é uma palavra-chave que se refere ao objeto atual em que um código está sendo executado.
    - É usado para acessar propriedades e métodos do próprio objeto.
    - Exemplo:

        ~~~javascript
        // Código JavaScript

        const pessoa = {
            nome: 'João',
            idade: 30,
            apresentar: function() {
                console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`);
            }
        };
        ~~~

7. Acessando as Chaves e Valores com `for in` em Objetos
    - A estrutura de repetição `for...in` é usada para iterar sobre todas as propriedades enumeráveis de um objeto.
    - Exemplo:

        ~~~javascript
        // Código JavaScript

        for (let chave in pessoa) {
            console.log(`${chave}: ${pessoa[chave]}`);
        }
        ~~~

8. Factory Functions, Constructor Functions e Classes em Objetos
    - Factory Functions, Constructor Functions e Classes são diferentes maneiras de criar objetos em JavaScript.
    - Elas permitem a criação de múltiplas instâncias de objetos com comportamentos semelhantes.
    - Exemplo de Factory Function:

        ~~~javascript
        // Código JavaScript

        function criarPessoa(nome, idade) {
            return {
                nome: nome,
                idade: idade,
                apresentar: function() {
                    console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`);
                }
            };
        }
        ~~~

    - Exemplo de Constructor Function:

        ~~~javascript
        // Código JavaScript

        function Pessoa(nome, idade) {
            this.nome = nome;
            this.idade = idade;
            this.apresentar = function() {
                console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`);
            };
        }
        ~~~

    - Exemplo de Classe:

        ~~~javascript
        // Código JavaScript

        class Pessoa {
            constructor(nome, idade) {
                this.nome = nome;
                this.idade = idade;
            }

            apresentar() {
                console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`);
            }
        };
        ~~~

Esta revisão cobre os principais tópicos relacionados a objetos em JavaScript, desde a criação até os diferentes métodos de construção e manipulação de objetos.

## Object.defineProperty() e Object.defineProperties()

`Object.defineProperty()`

O método `Object.defineProperty()` é uma função embutida em JavaScript que permite definir uma nova propriedade diretamente em um objeto ou modificar uma propriedade existente em um objeto. Ele fornece controle detalhado sobre as características da propriedade, como valor, enumerabilidade, gravabilidade e configurabilidade.

Sintaxe:

~~~javascript
// Código JavaScript

Object.defineProperty(objeto, nomePropriedade, descritor);
~~~

Parâmetros:

- `objeto`: O objeto no qual a propriedade será definida.
- `chave`: O nome da propriedade que será definida ou modificada.
- `descritor`: Um objeto que define as características da propriedade a ser definida ou modificada.

Exemplo de Uso:

~~~javascript
// Código JavaScript

const pessoa = {};

Object.defineProperty(pessoa, 'nome', {
  value: 'João',        // valor
  writable: true,       // alteração
  enumerable: true,     // visualização
  configurable: true    // acesso as configurações
});
~~~

`Object.defineProperties()`

O método `Object.defineProperties()` é semelhante ao `Object.defineProperty()`, mas permite definir várias propriedades diretamente em um objeto ou modificar várias propriedades existentes em um objeto de uma só vez.

~~~javascript
// Código JavaScript

Object.defineProperties(objeto, descritores);
~~~

Parâmetros:

- `objeto`: O objeto no qual as propriedades serão definidas.
- `descritores`: Um objeto cujas chaves são os nomes das propriedades a serem definidas e cujos valores são os descritores de propriedade correspondentes.

Exemplo de Uso:

~~~javascript
// Código JavaScript

const pessoa = {};

Object.defineProperties(pessoa, {
  nome: {
    value: 'João',
    writable: true,
    enumerable: true,
    configurable: true
  },
  idade: {
    value: 30,
    writable: true,
    enumerable: true,
    configurable: true
  }
});
~~~

Em uma função construtora se utiliza da seguinte forma:

~~~javascript
// Código JavaScript

function Produto(nome, preco, estoque){
    Object.defineProperty(this, 'estoque', {
        value: estoque,
        writable: true,
        enumerable: true,
        configurable: true
    });

    Object.defineProperties(this, {
        nome: {
            value: nome,
            writable: true,
            enumerable: true,
            configurable: true
        },
        preco: {
            value: preco,
            writable: true,
            enumerable: true,
            configurable: true
        }
    });
};

const produto = new Produto('camisa', 35, 3); 
console.log(produto); // Saída: Produto { estoque: 3, nome: 'camisa', preco: 35 }
~~~

Observações:

- `Object.defineProperty()` e `Object.defineProperties()` são úteis para controlar as características das propriedades de um objeto, como se elas podem ser enumeradas, gravadas ou reconfiguradas.
- É possível definir propriedades com diferentes características usando os descritores de propriedade no segundo parâmetro.
- Esses métodos são amplamente utilizados em JavaScript para criar objetos com comportamentos específicos e controlar sua mutabilidade.

Estas são funções essenciais para definir e configurar propriedades de objetos em JavaScript, proporcionando um alto grau de controle sobre suas características e comportamentos.

## Getters e Setters em JavaScript

### Getters e Setters em JavaScript com Object.defineProperty dentro de uma Factory Function

Introdução

Em JavaScript, é possível criar getters e setters para acessar e modificar propriedades de objetos. Isso permite um maior controle sobre como os valores são manipulados e validados. O método `Object.defineProperty()` é comumente utilizado para criar esses getters e setters.

Exemplo de Uso

Considere uma factory function `criarPessoa` que retorna objetos representando pessoas com propriedades `nome` e `idade`. Vamos definir getters e setters para a propriedade `idade`, garantindo que ela não seja negativa.

~~~javascript
// Código JavaScript

function criarPessoa(nome, idade) {
  let _idade = idade;

  return {
    nome,
    get idade() {
      return _idade;
    },
    set idade(novaIdade) {
      if (novaIdade >= 0) {
        _idade = novaIdade;
      } else {
        console.error('A idade não pode ser negativa.');
      }
    }
  };
}

const pessoa1 = criarPessoa('João', 30);
console.log(pessoa1.idade); // Saída: 30

pessoa1.idade = 35;
console.log(pessoa1.idade); // Saída: 35

pessoa1.idade = -5; // Aviso de erro no console
console.log(pessoa1.idade); // Saída: 35 (idade não foi alterada)
~~~

Neste exemplo, usamos a factory function `criarPessoa` para criar objetos representando pessoas. Definimos um getter e um setter para a propriedade `idade`. O getter retorna o valor atual da idade e o setter verifica se a nova idade é não negativa antes de atribuí-la. Se a nova idade for negativa, uma mensagem de erro é exibida no console e a idade não é alterada.

Observações

- Getters e setters são uma maneira poderosa de controlar o acesso e a manipulação de propriedades de objetos em JavaScript.
- Eles permitem definir lógica personalizada para validação, cálculos ou outras operações relacionadas a propriedades de objetos.
- O método `Object.defineProperty()` pode ser usado dentro de uma factory function para criar getters e setters e oferece controle fino sobre as características das propriedades.

Este exemplo demonstra como utilizar getters e setters com `Object.defineProperty()` dentro de uma factory function em JavaScript para obter um maior controle sobre o acesso e a manipulação de propriedades de objetos.

### Getters e Setters em JavaScript com Object.defineProperty dentro de uma Função Construtora

Em JavaScript, é possível definir getters e setters para acessar e modificar propriedades de objetos. Isso permite um maior controle sobre como os valores são manipulados e validados. O método `Object.defineProperty()` é comumente utilizado para criar esses getters e setters.

Exemplo de Uso:

Considere uma função construtora `Pessoa` que cria objetos representando pessoas com propriedades `nome` e `idade`. Vamos definir getters e setters para a propriedade `idade`, garantindo que ela não seja negativa.

~~~javascript
// Código JavaScript

function Pessoa(nome, idade) {
    this.nome = nome;

    Object.defineProperty(this, 'idade', {
        enumerable: true,
        configurable: true,
        get: function() { // Pode ser escrito como arrow function ou diretamente com get(){código}
            return idade;
        },
        set: function(novaIdade) { // Pode ser escrito como arrow function ou diretamente com set(novaIdade){código}
            if (novaIdade >= 0) {
                idade = novaIdade;
            } else {
                console.error('A idade não pode ser negativa.');
            }
        }
    });
}

const pessoa1 = new Pessoa('João', 30);
console.log(pessoa1.idade); // Saída: 30

pessoa1.idade = 35;
console.log(pessoa1.idade); // Saída: 35

pessoa1.idade = -5; // Aviso de erro no console
console.log(pessoa1.idade); // Saída: 35 (idade não foi alterada)
~~~

Neste exemplo, usamos `Object.defineProperty()` dentro da função construtora `Pessoa` para definir um getter e um setter para a propriedade `idade`. O getter retorna o valor atual da idade e o setter verifica se a nova idade é não negativa antes de atribuí-la. Se a nova idade for negativa, uma mensagem de erro é exibida no console e a idade não é alterada.

Observações

- Getters e setters são uma maneira poderosa de controlar o acesso e a manipulação de propriedades de objetos em JavaScript.
- Eles permitem definir lógica personalizada para validação, cálculos ou outras operações relacionadas a propriedades de objetos.
- O método `Object.defineProperty()` é amplamente utilizado para criar getters e setters em objetos e oferece controle fino sobre as características das propriedades.

Este exemplo demonstra como utilizar getters e setters com `Object.defineProperty()` dentro de uma função construtora em JavaScript para obter um maior controle sobre o acesso e a manipulação de propriedades de objetos.

## Métodos úteis para objetos

Object.values

- O método `Object.values()` é uma função embutida em JavaScript que retorna um array contendo os valores das propriedades enumeráveis de um objeto, na mesma ordem que seria obtida ao iterar sobre as propriedades do objeto manualmente.

~~~javascript
// Código JavaScript

const objeto = { a: 1, b: 2, c: 3 };
console.log(Object.values(objeto)); // Saída: [1, 2, 3]
~~~

Object.entries

- O método `Object.entries()` é uma função embutida em JavaScript que retorna um array contendo pares `[chave, valor]` para cada propriedade enumerável de um objeto, na mesma ordem que seria obtida ao iterar sobre as propriedades do objeto manualmente.

~~~javascript
// Código JavaScript

const objeto = { a: 1, b: 2, c: 3 };
console.log(Object.entries(objeto)); // Saída: [['a', 1], ['b', 2], ['c', 3]]
~~~

Object.assign(dest, any)

- O método `Object.assign()` é uma função embutida em JavaScript que é usada para copiar os valores de todas as propriedades enumeráveis de um ou mais objetos de origem (`any`) para um objeto de destino (`dest`). Retorna o objeto de destino.

~~~javascript
// Código JavaScript

const destino = { a: 1 };
const origem = { b: 2, c: 3 };
Object.assign(destino, origem);
console.log(destino); // Saída: { a: 1, b: 2, c: 3 }
~~~

Object.getOwnPropertyDescriptor(o, 'prop')

- O método `Object.getOwnPropertyDescriptor()` é uma função embutida em JavaScript que retorna um descritor de propriedade para uma propriedade específica (`'prop'`) de um objeto (`o`). O descritor de propriedade contém informações sobre a propriedade, como valor, gravabilidade, enumerabilidade e configurabilidade.

~~~javascript
// Código JavaScript

const objeto = { a: 1 };
console.log(Object.getOwnPropertyDescriptor(objeto, 'a'));
// Saída: { value: 1, writable: true, enumerable: true, configurable: true }
~~~

Spread Operator (...)

O operador de propagação, ou spread operator (`...`), é um recurso introduzido no ECMAScript 6 (ES6) que permite expandir uma expressão em locais onde múltiplos argumentos (para chamadas de função) ou múltiplos elementos (para arrays) são esperados. Ele permite copiar elementos de arrays e objetos em novos arrays e objetos ou combinar múltiplos arrays e objetos.

~~~javascript
// Código JavaScript

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayCombinado = [...array1, ...array2];
console.log(arrayCombinado); // Saída: [1, 2, 3, 4, 5, 6]
~~~

Esses são alguns dos recursos importantes disponíveis em JavaScript para trabalhar com objetos e arrays, fornecendo maneiras convenientes de acessar, manipular e combinar dados de diferentes maneiras.

## Prototypes em JavaScript

Introdução

Em JavaScript, os protótipos desempenham um papel fundamental no mecanismo de herança do idioma. Cada objeto em JavaScript tem um protótipo, que é essencialmente um objeto do qual ele herda propriedades e métodos. O uso de protótipos permite a reutilização de código e a criação de hierarquias de herança em JavaScript.

Funcionamento dos Protótipos

- Cada objeto em JavaScript possui um protótipo interno, referenciado pela propriedade `__proto__`.
- Quando uma propriedade ou método é acessado em um objeto e não é encontrado nele, o mecanismo de protótipo procura a propriedade ou método no protótipo do objeto e em seus protótipos ancestrais.
- Isso permite a herança de propriedades e métodos de um objeto para outro, formando uma cadeia de protótipos.

Uso de Protótipos

1. **Herança de Propriedades e Métodos**: Os protótipos são usados para herdar propriedades e métodos de um objeto para outro. Isso permite a reutilização de código e a criação de estruturas hierárquicas de objetos.

2. **Extensão de Funcionalidades**: Os protótipos também podem ser usados para estender as funcionalidades de objetos existentes, adicionando novas propriedades ou métodos aos protótipos dos objetos.

3. **Melhoria de Desempenho**: O uso de protótipos em vez de criar propriedades e métodos diretamente em cada instância de objeto pode ajudar a melhorar o desempenho e a eficiência do código, pois reduz a duplicação de propriedades e métodos em várias instâncias de objetos.

Exemplo de Uso

~~~javascript
// Código JavaScript

// Definindo um construtor de objetos
function Animal(nome) {
  this.nome = nome;
}

// Adicionando um método ao protótipo Animal
Animal.prototype.emitirSom = function() {
  console.log('Som indefinido');
};

// Criando um objeto da classe Animal
const animal1 = new Animal('Leão');

// Chamando o método do protótipo
animal1.emitirSom(); // Saída: Som indefinido
~~~

Neste exemplo, definimos uma função construtora `Animal` e adicionamos um método `emitirSom` ao seu protótipo. Quando criamos um novo objeto `animal1` usando new `Animal()`, ele herda automaticamente o método `emitirSom` do protótipo Animal.prototype.

Esta explicação fornece uma visão geral abrangente dos protótipos em JavaScript, incluindo seu funcionamento e seu uso prático na criação e herança de objetos.

## Manipulando Prototypes

Manipular protótipos em JavaScript é uma prática comum para estender funcionalidades de objetos existentes ou para definir métodos e propriedades compartilhadas entre várias instâncias de objetos. Aqui estão algumas maneiras de manipular protótipos:

Adicionando Propriedades e Métodos ao Protótipo

Você pode adicionar propriedades e métodos ao protótipo de um construtor de objeto usando a propriedade prototype. Isso permite que todas as instâncias desse objeto compartilhem essas propriedades e métodos.

~~~javascript
// Código JavaScript

function Animal(nome) {
  this.nome = nome;
}

// Adicionando método ao protótipo Animal
Animal.prototype.emitirSom = function() {
  console.log('Som indefinido');
};

const animal1 = new Animal('Leão');
animal1.emitirSom(); // Saída: Som indefinido
~~~

Substituindo o Protótipo

Você pode substituir completamente o protótipo de um objeto por outro objeto. Isso afeta todas as instâncias existentes e futuras desse objeto.

~~~javascript
// Código JavaScript

function Animal(nome) {
  this.nome = nome;
}

// Adicionando método ao protótipo Animal
Animal.prototype.emitirSom = function() {
  console.log('Som indefinido');
};

// Novo protótipo para Animal
const novoPrototipo = {
  comer: function() {
    console.log('Comendo...');
  }
};

// Substituindo o protótipo original pelo novo protótipo
Animal.prototype = novoPrototipo;

const animal2 = new Animal('Tigre');
animal2.comer(); // Saída: Comendo...
~~~

Acessando o Protótipo de um Objeto

Você pode acessar o protótipo de um objeto usando a propriedade `__proto__` ou o método `Object.getPrototypeOf()`.

~~~javascript
// Código JavaScript

function Animal(nome) {
  this.nome = nome;
}

const animal3 = new Animal('Elefante');

// Acessando o protótipo usando __proto__
console.log(animal3.__proto__);

// Acessando o protótipo usando Object.getPrototypeOf()
console.log(Object.getPrototypeOf(animal3));
~~~

Verificando a Origem de uma Propriedade

Você pode verificar se uma propriedade é própria (definida diretamente no objeto) ou herdada do protótipo usando o método `hasOwnProperty()`.

~~~javascript
// Código JavaScript

function Animal(nome) {
  this.nome = nome;
}

Animal.prototype.emitirSom = function() {
  console.log('Som indefinido');
};

const animal4 = new Animal('Cachorro');

console.log(animal4.hasOwnProperty('nome')); // Saída: true
console.log(animal4.hasOwnProperty('emitirSom')); // Saída: false
~~~

Object.create()

O método `Object.create()` é uma função embutida em JavaScript que cria um novo objeto com um protótipo especificado. Ele aceita um objeto protótipo como seu primeiro argumento e opcionalmente um objeto que especifica as propriedades a serem adicionadas ao novo objeto.

Exemplo:

~~~javascript
// Código JavaScript

const animalPrototype = {
  emitirSom: function() {
    console.log('Som indefinido');
  }
};

const animal = Object.create(animalPrototype);
animal.emitirSom(); // Saída: Som indefinido
~~~

Object.getPrototypeOf()

O método `Object.getPrototypeOf()` é uma função embutida em JavaScript que retorna o protótipo de um objeto especificado.

Exemplo:

~~~javascript
// Código JavaScript

const animal = {};
const prototipo = Object.getPrototypeOf(animal);
console.log(prototipo === Object.prototype); // Saída: true
~~~

Object.setPrototypeOf()

O método `Object.setPrototypeOf()` é uma função embutida em JavaScript que define o protótipo de um objeto especificado para outro protótipo ou `null`.

Exemplo:

~~~javascript
// Código JavaScript

const animal = {};
const animalPrototype = {
  emitirSom: function() {
    console.log('Som indefinido');
  }
};

Object.setPrototypeOf(animal, animalPrototype);
animal.emitirSom(); // Saída: Som indefinido
~~~

Manipular protótipos é uma técnica poderosa em JavaScript que permite a criação de objetos compartilhados e a extensão dinâmica de funcionalidades. No entanto, é importante usar essa técnica com cuidado para manter a clareza e a integridade do código.

## Herança

Em JavaScript, a herança é implementada usando o mecanismo de protótipos. Isso significa que os objetos podem herdar propriedades e métodos de outros objetos. Aqui está como funciona:

Protótipos e Herança

- Cada objeto em JavaScript tem um protótipo interno, acessado pela propriedade `__proto__`. Esse protótipo é um objeto do qual o objeto atual herda propriedades e métodos.

- Quando uma propriedade ou método é acessado em um objeto e não é encontrado nele, o mecanismo de protótipo procura a propriedade ou método no protótipo do objeto e em seus protótipos ancestrais, formando uma cadeia de protótipos.

Herança com Funções Construtoras

Você pode estabelecer herança em JavaScript usando funções construtoras e o mecanismo de protótipos.

~~~javascript
// Código JavaScript

function Animal(nome) {
  this.nome = nome;
}

// Adicionando método ao protótipo Animal
Animal.prototype.emitirSom = function() {
  console.log('Som indefinido');
};

function Cachorro(nome, raca) {
  Animal.call(this, nome);
  this.raca = raca;
}

// Estabelecendo herança
Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.constructor = Cachorro;

// Adicionando método ao protótipo Cachorro
Cachorro.prototype.latir = function() {
  console.log('Au au!');
};

const rex = new Cachorro('Rex', 'Labrador');
rex.emitirSom(); // Saída: Som indefinido
rex.latir(); // Saída: Au au!
~~~

Neste exemplo, `Cachorro` herda propriedades e métodos de `Animal` usando `Object.create()` para criar um novo objeto cujo protótipo é o protótipo de Animal. Em seguida, definimos o construtor correto para `Cachorro.prototype` e adicionamos métodos específicos de `Cachorro`.

## Prototypes + Herança

O código a seguir cria um carrinho de compras que pode conter vários itens. Ele calcula o preço total do carrinho somando os preços de todos os itens. Além disso, também demonstra uma herança simples, onde um `CarrinhoDeDesconto` herda do `CarrinhoCompras` e adiciona a funcionalidade de aplicar desconto ao preço total do carrinho.

~~~javascript
// Código JavaScript

// Constructor function para o item do carrinho
function ItemCarrinho(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

// Método para calcular o preço total do item
ItemCarrinho.prototype.calcularTotal = function() {
  return this.preco;
};

// Constructor function para o carrinho de compras
function CarrinhoCompras() {
  this.itens = [];
}

// Método para adicionar um item ao carrinho
CarrinhoCompras.prototype.adicionarItem = function(item) {
  this.itens.push(item);
};

// Método para calcular o preço total do carrinho
CarrinhoCompras.prototype.calcularTotal = function() {
  let total = 0;
  this.itens.forEach(function(item) {
    total += item.calcularTotal();
  });
  return total;
};

// Herança: CarrinhoDeDesconto herda de CarrinhoCompras
function CarrinhoDeDesconto() {
  CarrinhoCompras.call(this); // Chamando o construtor da classe pai
  this.desconto = 0;
}

// Estabelecendo a herança
CarrinhoDeDesconto.prototype = Object.create(CarrinhoCompras.prototype);
CarrinhoDeDesconto.prototype.constructor = CarrinhoDeDesconto;

// Método para aplicar desconto ao preço total do carrinho
CarrinhoDeDesconto.prototype.aplicarDesconto = function(desconto) {
  this.desconto = desconto;
};

// Sobrescrevendo o método calcularTotal para aplicar o desconto
CarrinhoDeDesconto.prototype.calcularTotal = function() {
  const totalSemDesconto = CarrinhoCompras.prototype.calcularTotal.call(this);
  return totalSemDesconto - this.desconto;
};

// Exemplo de uso
const item1 = new ItemCarrinho('Camiseta', 25);
const item2 = new ItemCarrinho('Calça', 50);

const carrinho = new CarrinhoCompras();
carrinho.adicionarItem(item1);
carrinho.adicionarItem(item2);
console.log('Total do carrinho: $' + carrinho.calcularTotal());

const carrinhoDesconto = new CarrinhoDeDesconto();
carrinhoDesconto.adicionarItem(item1);
carrinhoDesconto.adicionarItem(item2);
carrinhoDesconto.aplicarDesconto(10);
console.log('Total do carrinho com desconto: $' + carrinhoDesconto.calcularTotal());
~~~

Este código JavaScript implementa um sistema simples de carrinho de compras com suporte a descontos. Vamos explicar cada parte:

1. **Constructor function para o item do carrinho (`ItemCarrinho`)**:
   - Define uma função construtora `ItemCarrinho` que recebe o nome e o preço de um item e os atribui às propriedades `nome` e `preco` do objeto criado.

2. **Método para calcular o preço total do item**:
   - Adiciona um método `calcularTotal()` ao protótipo de `ItemCarrinho`, que simplesmente retorna o preço do item.

3. **Constructor function para o carrinho de compras (`CarrinhoCompras`)**:
   - Define uma função construtora `CarrinhoCompras` que inicializa um array vazio `itens` para armazenar os itens do carrinho.

4. **Método para adicionar um item ao carrinho**:
   - Adiciona um método `adicionarItem(item)` ao protótipo de `CarrinhoCompras`, que adiciona um item ao array `itens`.

5. **Método para calcular o preço total do carrinho**:
   - Adiciona um método `calcularTotal()` ao protótipo de `CarrinhoCompras`, que itera sobre todos os itens no array `itens`, chama o método `calcularTotal()` de cada item e soma os preços para obter o preço total do carrinho.

6. **Herança: `CarrinhoDeDesconto` herda de `CarrinhoCompras`**:
   - Define uma função construtora `CarrinhoDeDesconto` que inicializa um carrinho de compras e adiciona uma propriedade `desconto`.
   - Estabelece a herança fazendo `CarrinhoDeDesconto.prototype` herdar de `CarrinhoCompras.prototype`.
   - Define um novo método `aplicarDesconto(desconto)` para aplicar um desconto ao carrinho.
   - Sobrescreve o método `calcularTotal()` para subtrair o desconto do preço total do carrinho.

7. **Exemplo de uso**:
   - Cria dois itens de carrinho (`item1` e `item2`) com nomes e preços.
   - Cria um carrinho de compras padrão (`carrinho`) e adiciona os itens a ele.
   - Calcula e imprime o preço total do carrinho.
   - Cria um carrinho de compras com desconto (`carrinhoDesconto`), adiciona os mesmos itens a ele, aplica um desconto e imprime o preço total com desconto.

Essencialmente, este código demonstra como usar constructor functions, protótipos e herança em JavaScript para criar um sistema básico de carrinho de compras com suporte a descontos.

O termo "Herança" é muito usado para descrever que as características de um objeto são passadas para outro objeto. Assim como uma filha ou filho pode herdar características da sua mãe ou pai (geneticamente). Por isso estamos usando esse termo para descrever o comportamento desejado. Além disso, a maioria das literaturas, incluindo as documentações (como [MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)) citam a palavra herança.

Vamos continuar usando o termo "Herança" até o final do curso, porém, Javascript não é uma linguagem que apresenta essa característica em específico, portanto não existe "herança" aqui. O que ocorre, na verdade, é "delegação". Esse seria o termo mais correto para descrever "Herança" em JS.

Quando fazemos algo como:

~~~javascript
// Código JavaScript

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
 
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
 
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
~~~

Mais especificamente no trecho:

~~~javascript
// Código JavaScript

Camiseta.prototype = Object.create(Produto.prototype);
~~~

Estamos, claramente, falando que o `Camiseta.prototype` é um novo objeto vazio que tem como protótipo `Produto.prototype`. Dessa forma, estamos adicionando `Camiseta.prototype` na cadeia de protótipos de `Produto`. Por consequência, tudo o que não existir em `Camiseta` nem em `Camiseta.prototype` será delegado para `Produto.prototype` (e assim por diante até chegar no topo da cadeia de protótipos). Por isso vejo o termo delegação como mais adequado para este comportamento.

## Polimorfismo em JavaScript com Constructor Functions

O polimorfismo é um conceito da programação orientada a objetos que permite que objetos de diferentes classes sejam tratados de maneira uniforme, desde que compartilhem uma mesma interface ou supertipo. Em JavaScript, o polimorfismo pode ser implementado usando constructor functions e protótipos.

Funcionamento do Polimorfismo

- Em JavaScript, o polimorfismo é alcançado quando diferentes constructor functions implementam métodos com o mesmo nome e assinatura.
- Esses métodos podem ter comportamentos diferentes em cada constructor function, mas podem ser chamados de forma uniforme em objetos de diferentes classes.
- Quando um método é chamado em um objeto, o mecanismo de protótipos verifica a cadeia de protótipos do objeto em busca da implementação desse método.

Exemplo de Polimorfismo em Constructor Functions

Considere um exemplo com as constructor functions `Animal` e `Cachorro`, onde ambas têm um método `emitirSom()`:

~~~javascript
// Código JavaScript

// Constructor function Animal
function Animal() {}

// Método emitirSom() em Animal
Animal.prototype.emitirSom = function() {
  console.log('Som indefinido');
};

// Constructor function Cachorro
function Cachorro() {}

// Sobrescrevendo o método emitirSom() em Cachorro
Cachorro.prototype.emitirSom = function() {
  console.log('Au au!');
};

// Exemplo de polimorfismo
const animal = new Animal();
const cachorro = new Cachorro();

animal.emitirSom();   // Saída: Som indefinido
cachorro.emitirSom(); // Saída: Au au!
~~~

Neste exemplo, tanto `Animal` quanto `Cachorro` têm um método `emitirSom()`, mas cada um tem um comportamento diferente. Mesmo assim, podemos chamá-los de forma uniforme, demonstrando assim o polimorfismo em JavaScript.

Outro Exemplo de Polimorfismo em JavaScript:

~~~javascript
// Código JavaScript

// Constructor function para a conta bancária
function ContaBancaria(numeroConta, saldoInicial) {
    this.numeroConta = numeroConta;
    this.saldo = saldoInicial;
}

// Método para debitar da conta
ContaBancaria.prototype.debitar = function (valor) {
    if (this.saldo >= valor) {
        this.saldo -= valor;
        console.log(`Débito de $${valor} efetuado com sucesso. Saldo atual: $${this.saldo}`);
    } else {
        console.log("Saldo insuficiente para debitar.");
    }
};

// Método para creditar na conta
ContaBancaria.prototype.creditar = function (valor) {
    this.saldo += valor;
    console.log(`Crédito de $${valor} efetuado com sucesso. Saldo atual: $${this.saldo}`);
};

// Constructor function para a conta corrente, herda de ContaBancaria
function ContaCorrente(numeroConta, saldoInicial, limite) {
    ContaBancaria.call(this, numeroConta, saldoInicial);
    this.limite = limite;
}

// Estabelecendo a herança
ContaCorrente.prototype = Object.create(ContaBancaria.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

// Sobrescrevendo o método debitar para considerar o limite da conta corrente
ContaCorrente.prototype.debitar = function (valor) {
    const total = this.saldo + this.limite;
    if (total >= valor) {
        this.saldo -= valor;
        console.log(`Débito de $${valor} efetuado com sucesso. Saldo atual: $${this.saldo}`);
    } else {
        console.log("Limite de saldo + limite de crédito ultrapassado.");
    }
};

// Exemplo de uso
const contaPoupanca = new ContaBancaria(123, 1000);
contaPoupanca.debitar(500); // Saída: Débito de $500 efetuado com sucesso. Saldo atual: $500
contaPoupanca.creditar(200); // Saída: Crédito de $200 efetuado com sucesso. Saldo atual: $700
contaPoupanca.debitar(701); // Saída: Saldo insuficiente para debitar.

const contaCorrente = new ContaCorrente(456, 2000, 1000);
contaCorrente.debitar(2500); // Saída: Débito de $2500 efetuado com sucesso. Saldo atual: $-500
contaCorrente.debitar(501); // Saída: Limite de saldo + limite de crédito ultrapassado.
~~~

Neste exemplo, temos uma `ContaBancaria` que possui funcionalidades básicas de débito e crédito. Em seguida, criamos uma `ContaCorrente` que herda de `ContaBancaria` e sobrescreve o método `debitar` para considerar um limite de saldo + limite de crédito. Isso demonstra polimorfismo, onde o método debitar é substituído na classe filha para comportamento específico.

## Factory Functions + Prototypes em JavaScript

As factory functions são funções em JavaScript que retornam um novo objeto. Quando combinadas com protótipos, elas oferecem uma maneira eficiente de criar objetos com métodos compartilhados e herdados. Vamos explorar como isso funciona:

Funcionamento das Factory Functions + Prototypes

- As factory functions são usadas para criar objetos em JavaScript.
- Quando combinadas com protótipos, é possível adicionar métodos compartilhados a todos os objetos criados por uma factory function.
- Os métodos compartilhados são definidos no protótipo da factory function e podem ser acessados por todos os objetos criados por ela.

Exemplo de Factory Function + Prototypes

Considere uma factory function `Pessoa` que cria objetos representando pessoas. Vamos adicionar um método `dizerNome()` a todos os objetos criados por essa factory function usando protótipos:

~~~javascript
// Factory function Pessoa
function Pessoa(nome) {
  const pessoa = Object.create(Pessoa.prototype);
  pessoa.nome = nome;
  return pessoa;
}

// Adicionando método dizerNome() ao protótipo de Pessoa
Pessoa.prototype.dizerNome = function() {
  console.log('Meu nome é ' + this.nome);
};

// Criando objetos com a factory function
const pessoa1 = Pessoa('Alice');
const pessoa2 = Pessoa('Bob');

// Usando o método compartilhado
pessoa1.dizerNome(); // Saída: Meu nome é Alice
pessoa2.dizerNome(); // Saída: Meu nome é Bob
~~~

Neste exemplo, a factory function `Pessoa` cria objetos com uma propriedade `nome`. Em seguida, adicionamos um método `dizerNome()` a todos os objetos criados por `Pessoa` usando protótipos. Assim, todos os objetos criados por `Pessoa` têm acesso a esse método.

Outro Exemplo de Factory Function + Prototypes:

~~~javascript
// Código JavaScript

// Factory function para a conta bancária
function criarContaBancaria(numeroConta, saldoInicial) {
    return {
        numeroConta: numeroConta,
        saldo: saldoInicial,
        debitar: function (valor) {
            if (this.saldo >= valor) {
                this.saldo -= valor;
                console.log(`Débito de $${valor} efetuado com sucesso. Saldo atual: $${this.saldo}`);
            } else {
                console.log("Saldo insuficiente para debitar.");
            }
        },
        creditar: function (valor) {
            this.saldo += valor;
            console.log(`Crédito de $${valor} efetuado com sucesso. Saldo atual: $${this.saldo}`);
        }
    };
}

// Factory function para a conta corrente, herda de ContaBancaria
function criarContaCorrente(numeroConta, saldoInicial, limite) {
    const conta = criarContaBancaria(numeroConta, saldoInicial);
    conta.limite = limite;

    // Sobrescrevendo o método debitar para considerar o limite da conta corrente
    conta.debitar = function (valor) {
        const total = this.saldo + this.limite;
        if (total >= valor) {
            this.saldo -= valor;
            console.log(`Débito de $${valor} efetuado com sucesso. Saldo atual: $${this.saldo}`);
        } else {
            console.log("Limite de saldo + limite de crédito ultrapassado.");
        }
    };

    return conta;
}

// Exemplo de uso
const contaPoupanca = criarContaBancaria(123, 1000);
contaPoupanca.debitar(500); // Saída: Débito de $500 efetuado com sucesso. Saldo atual: $500
contaPoupanca.creditar(200); // Saída: Crédito de $200 efetuado com sucesso. Saldo atual: $700
contaPoupanca.debitar(701); // Saída: Saldo insuficiente para debitar.

const contaCorrente = criarContaCorrente(456, 2000, 1000);
contaCorrente.debitar(2500); // Saída: Débito de $2500 efetuado com sucesso. Saldo atual: $-500
contaCorrente.debitar(501); // Saída: Limite de saldo + limite de crédito ultrapassado.
~~~

Neste código, transformamos as constructor functions mostrada em tópico anterior em factory functions. As factory functions `criarContaBancaria` e `criarContaCorrente` retornam objetos que possuem os métodos debitar e creditar, e a herança é simulada na função `criarContaCorrente` adicionando o método `debitar` com comportamento específico para a conta corrente.

A combinação de factory functions com protótipos oferece uma maneira poderosa de criar objetos com métodos compartilhados e herdados em JavaScript.

## Objeto Map()

A estrutura de dados `Map()` em JavaScript é uma coleção de pares chave-valor em que as chaves podem ser de qualquer tipo, incluindo objetos ou valores primitivos, e os valores associados podem ser de qualquer tipo, incluindo funções, objetos ou valores primitivos. Algumas características importantes do `Map()` incluem:

- Chaves Únicas: Cada chave em um `Map()` é única. Se tentarmos adicionar uma chave que já existe no `Map()`, ela será atualizada com o novo valor.
- Iterável: Um `Map()` é iterável, o que significa que podemos percorrer seus elementos usando loops ou métodos como `forEach()`.
- Métodos Úteis: O `Map()` fornece métodos úteis para manipular seus elementos, como `set()` para adicionar um novo par chave-valor, `get()` para obter o valor associado a uma chave, `has()` para verificar se uma chave existe no `Map()`, e `delete()` para remover um par chave-valor.

Aqui está um exemplo de como usar a estrutura de dados `Map()` em JavaScript:

~~~javascript
// Código JavaScript

// Criando um novo Map()
const mapa = new Map();

// Adicionando pares chave-valor ao Map()
mapa.set('chave1', 'valor1');
mapa.set('chave2', 'valor2');
mapa.set(3, 'valor3');

// Obtendo valores do Map()
console.log(mapa.get('chave1')); // Saída: valor1
console.log(mapa.get('chave2')); // Saída: valor2
console.log(mapa.get(3)); // Saída: valor3

// Verificando se uma chave existe no Map()
console.log(mapa.has('chave1')); // Saída: true
console.log(mapa.has('chave3')); // Saída: false

// Removendo um par chave-valor do Map()
mapa.delete('chave2');

// Iterando sobre os elementos do Map()
mapa.forEach((valor, chave) => {
    console.log(`${chave}: ${valor}`);
});

// Saída:
// chave1: valor1
// 3: valor3
~~~

Neste exemplo, criamos um `Map()` chamado `mapa` e adicionamos três pares chave-valor usando o método `set()`. Em seguida, usamos os métodos `get()` e `has()` para obter e verificar a existência de valores no Map(), respectivamente. Depois, removemos um par chave-valor com `delete()`. Por fim, iteramos sobre os elementos do `Map()` usando `forEach()`.

Este código a seguir transforma um array de objetos em um objeto `Map()` em JavaScript, com a intenção de manter a ordem dos valores e usar o campo `id` como chave:

~~~javascript
// Código JavaScript

const pessoas = [
    { id: 3, nome: 'Luiz' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Helena' }
];

const novasPessoas = new Map();

for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa });
}

console.log(novasPessoas);
console.log(novasPessoas.get(2));
~~~

1. **Declaração do array de pessoas `pessoas`**:
   - É um array que contém objetos representando pessoas, onde cada objeto tem as propriedades `id` e `nome`.

2. **Declaração do objeto `novasPessoas` como um `Map()` vazio**:
   - Este objeto `Map()` será usado para armazenar as pessoas, onde a chave será o `id` e o valor será o objeto da pessoa.

3. **Loop `for...of` para iterar sobre cada pessoa no array `pessoas`**:
   - Para cada pessoa no array, desestrutura-se o objeto para extrair o `id`.
   - Em seguida, adiciona-se uma nova entrada ao `Map()` `novasPessoas` usando o `id` como chave e um clone do objeto pessoa (usando o operador spread `{...pessoa}`) como valor.

4. **Impressão do objeto `novasPessoas`**:
   - O `Map()` `novasPessoas` é impresso no console. Este `Map()` terá as pessoas armazenadas com o `id` como chave e o objeto pessoa completo como valor.

5. **Acesso a uma pessoa específica usando `get()`**:
   - É feita uma chamada ao método `get()` do `Map()` `novasPessoas` para obter a pessoa com `id` igual a 2 (Maria).
   - O resultado é impresso no console.

O resultado é um `Map()` chamado `novasPessoas` onde as pessoas são armazenadas com suas respectivas chaves `id`, mantendo a ordem em que foram inseridas.

## Exercicio - Validação de CPF

Exercício para fixação de conteúdo com o desenvolvimetno de um algorítimo para validação de CPF disponível no caminho `projetos/6_/validacaoCpf.js` ou [clicando aqui](link).
