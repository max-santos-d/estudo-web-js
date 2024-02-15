# JavaScript Classes - Programação Orientada a Objetos (POO)

Índice

- [JavaScript Classes - Programação Orientada a Objetos (POO)](#javascript-classes---programação-orientada-a-objetos-poo)
  - [Criando Classes](#criando-classes)
    - [Declaração de Classe](#declaração-de-classe)
    - [Constructor](#constructor)
    - [Métodos da Classe](#métodos-da-classe)
    - [Instanciando a Classe](#instanciando-a-classe)
  - [Getters e Setters](#getters-e-setters)
    - [Declaração de Getters e Setters](#declaração-de-getters-e-setters)
    - [Uso de Getters e Setters](#uso-de-getters-e-setters)
  - [Herança com Classes](#herança-com-classes)
    - [Definição da Classe Pai](#definição-da-classe-pai)
    - [Definição da Classe Filha com Herança](#definição-da-classe-filha-com-herança)
    - [Uso das Classes](#uso-das-classes)
  - [Métodos de instâncias e estáticos](#métodos-de-instâncias-e-estáticos)
    - [Métodos de Instância](#métodos-de-instância)
  - [Exercício 01 - Validação de CPF (Classes)](#exercício-01---validação-de-cpf-classes)
  - [Exercicio 02 - Validação de formulário utilizando Classes](#exercicio-02---validação-de-formulário-utilizando-classes)

## Criando Classes

Em JavaScript, a introdução das classes na linguagem (a partir do ECMAScript 2015, também conhecido como ES6) trouxe uma sintaxe mais familiar para a programação orientada a objetos. As classes permitem aos desenvolvedores organizar e estruturar seu código de forma mais clara e intuitiva. Aqui está uma explicação detalhada sobre a criação de classes em JavaScript:

### Declaração de Classe

A criação de uma classe em JavaScript começa com a declaração da mesma usando a palavra-chave `class`, seguida pelo nome da classe. Aqui está um exemplo básico:

~~~javascript
// Código JavaScript

class Pessoa {
  // Corpo da classe
}
~~~

### Constructor

O construtor é um método especial que é chamado automaticamente quando uma instância da classe é criada. Ele é usado para inicializar as propriedades do objeto. Aqui está um exemplo de como declarar um construtor dentro de uma classe:

~~~javascript
// Código JavaScript

class Pessoa {
  // Constructor para inicializar as propriedades
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}
~~~

### Métodos da Classe

Dentro do corpo da classe, você pode definir os métodos que a classe irá conter. Métodos são funções associadas à classe que descrevem seu comportamento. Aqui está um exemplo de declaração de método dentro de uma classe:

~~~javascript
// Código JavaScript

class Pessoa {
  // ...

  // Método para apresentar a pessoa
  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}
~~~

### Instanciando a Classe

Para criar um objeto (ou instância) de uma classe, você usa a palavra-chave new seguida do nome da classe, com os argumentos necessários para o construtor, se houver. Aqui está um exemplo de como instanciar a classe Pessoa:

~~~javascript
// Código JavaScript

// Instanciando um objeto da classe Pessoa
const pessoa1 = new Pessoa('João', 30);

// Chamando o método da classe
pessoa1.apresentar(); // Saída: Olá, meu nome é João e tenho 30 anos.
~~~

## Getters e Setters

Em JavaScript, os getters e setters são métodos especiais que permitem acessar e modificar propriedades de um objeto de forma controlada. Eles são usados para garantir a encapsulação e a segurança dos dados em uma classe. Aqui está como eles são declarados e usados em classes:

### Declaração de Getters e Setters

~~~javascript
// Código JavaScript

class Pessoa {
  constructor(nome, idade) {
    this._nome = nome;
    this._idade = idade;
  }

  // Getter para obter o nome
  get nome() {
    return this._nome;
  }

  // Setter para definir o nome
  set nome(novoNome) {
    this._nome = novoNome;
  }

  // Getter para obter a idade
  get idade() {
    return this._idade;
  }

  // Setter para definir a idade
  set idade(novaIdade) {
    if (novaIdade > 0) {
      this._idade = novaIdade;
    } else {
      console.error('Idade inválida');
    }
  }
}
~~~

### Uso de Getters e Setters

~~~javascript
// Código JavaScript

// Instanciando um objeto da classe Pessoa
const pessoa1 = new Pessoa('Maria', 25);

// Obtendo o nome usando o getter
console.log(pessoa1.nome); // Saída: Maria

// Definindo um novo nome usando o setter
pessoa1.nome = 'Ana';

// Obtendo a idade usando o getter
console.log(pessoa1.idade); // Saída: 25

// Definindo uma nova idade usando o setter
pessoa1.idade = 30;
console.log(pessoa1.idade); // Saída: 30

// Tentando definir uma idade inválida
pessoa1.idade = -5; // Saída: Idade inválida
~~~

Os getters são métodos que permitem acessar o valor de uma propriedade, enquanto os setters são métodos que permitem modificar o valor de uma propriedade. Eles são usados para controlar o acesso aos dados e garantir a consistência dos valores armazenados em um objeto.

Os getters são declarados usando a palavra-chave `get` seguida pelo nome da propriedade que desejamos acessar. Os setters são declarados usando a palavra-chave `set` seguida pelo nome da propriedade que desejamos modificar, seguido de um parâmetro que representa o novo valor a ser atribuído à propriedade.

No exemplo acima, usamos getters e setters para acessar e modificar as propriedades `nome` e `idade` de um objeto da classe `Pessoa`. Isso nos permite garantir que os valores atribuídos às propriedades sejam válidos e consistentes.

## Herança com Classes

A herança é um conceito fundamental na programação orientada a objetos que permite que uma classe herde propriedades e métodos de outra classe. Em JavaScript, podemos implementar herança usando classes. Aqui está como fazer isso:

### Definição da Classe Pai

Vamos começar definindo uma classe pai, também conhecida como classe base ou superclasse.

~~~javascript
// Código JavaScript

class Animal {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }

    mostrarRaca() {
        console.log(`${this.nome} é da raça ${this.raca}.`);
    }
}
~~~

### Definição da Classe Filha com Herança

Em seguida, podemos definir uma classe filha, também conhecida como classe derivada ou subclasse. Para herdar da classe pai, usamos a palavra-chave `extends`.

~~~javascript
// Código JavaScript

class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome, raca); // Chama o constructor da classe pai com o parâmetro 'nome'
    }

    falar() {
        console.log(`${this.nome} faz au au.`);
    }
}

class Gato extends Animal {
    constructor(nome, raca) {
        super(nome, raca); // Chama o constructor da classe pai com o parâmetro 'nome'
    }

    falar() {
        console.log(`${this.nome} faz miau.`);
    }
}
~~~

### Uso das Classes

Agora podemos criar uma instância da classe filha e acessar tanto os métodos da classe pai quanto os métodos adicionais da classe filha.

~~~javascript
// Código JavaScript

// Criando uma instância da classe filha Cachorro
const cachorro = new Cachorro('Bobby', 'Labrador');
const gato = new Gato('Milk', 'Siamês');

// Chamando um método exclusivo da classe filha Cachorro
cachorro.falar(); // Saída: Bobby faz au au.

// Chamando o método da classe filha Cachorro
cachorro.mostrarRaca(); // Saída: Bobby é da raça Labrador.

// Chamando um método exclusivo da classe filha Gato
gato.falar(); // Saída: Milk faz miau.

// Chamando o método da classe filha Gato
gato.mostrarRaca(); // Saída: Bobby é da raça Labrador.
~~~

Os códigos acima implementa um sistema de herança em classes JavaScript, onde temos uma classe `Animal` pai e duas classes filhas `Cachorro` e `Gato`. A classe `Animal` possui um construtor que recebe o nome e a raça do animal e um método `mostrarRaca()` que exibe o nome e a raça do animal. As classes `Cachorro` e `Gato` estendem a classe `Animal`. Ambas têm um construtor que chama o construtor da classe pai usando `super(nome, raca)` para inicializar o nome e a raça do animal. Além disso, cada classe filha possui um método `falar()` que exibe um som característico do animal.

Após a definição das classes, duas instâncias são criadas, uma para cada tipo de animal, um cachorro chamado "Bobby" e um gato chamado "Milk". Em seguida, métodos exclusivos das classes filhas e métodos herdados da classe pai são chamados para cada instância:

- Para o cachorro, o método `falar()` exibe "Bobby faz au au." e o método `mostrarRaca()` exibe "Bobby é da raça Labrador."
- Para o gato, o método `falar()` exibe "Milk faz miau." e o método `mostrarRaca()` exibe "Milk é da raça Siamês."

Notas sobre Herança com Classes em JavaScript

- A classe filha herda automaticamente todos os métodos e propriedades da classe pai.
- Podemos adicionar métodos adicionais à classe filha.
- Podemos substituir (sobrescrever) métodos da classe pai na classe filha, se necessário.

A herança com classes em JavaScript oferece uma maneira conveniente e legível de organizar e reutilizar código. Ela permite criar uma hierarquia de classes onde as classes filhas herdam comportamentos e características da classe pai, enquanto ainda têm a flexibilidade de adicionar ou modificar comportamentos conforme necessário.

## Métodos de instâncias e estáticos

Em JavaScript, as classes podem conter dois tipos de métodos: métodos de instância e métodos estáticos.

### Métodos de Instância

Métodos de instância em uma classe JavaScript são aqueles que são acessíveis apenas através de instâncias da classe. Isso significa que eles operam em dados específicos de uma instância e têm acesso aos membros da instância por meio da palavra-chave `this`.

Por outro lado, métodos estáticos são métodos que pertencem à própria classe, e não às instâncias dessa classe. Eles são acessados diretamente na classe em si, e não em instâncias individuais. Métodos estáticos geralmente são usados para operações que não dependem de instâncias específicas da classe.

Aqui está um exemplo de uma classe `MathUtils` que contém um método de instância chamado `adicionar`, que adiciona dois números, e um método estático chamado `multiplicar`, que multiplica dois números:

~~~javascript
// Código JavaScript

class MathUtils {
    constructor(numero1, numero2) {
        this.numero1 = numero1,
            this.numero2 = numero2
    }

    // Método de instância
    adicionar() {
        return this.numero1 + this.numero2;
    }

    // Método estático
    static multiplicar(numero1, numero2) {
        return numero1 * numero2;
    }
}

// Usando o método de instância
const math = new MathUtils(3, 5);
console.log(math.adicionar()); // Saída: 8

// Usando o método estático
console.log(MathUtils.multiplicar(2, 4)); // Saída: 8
~~~

No exemplo acima, `adicionar` é um método de instância, o que significa que precisamos criar uma instância da classe `MathUtils` para acessá-lo. Por outro lado, `multiplicar` é um método estático, então podemos chamá-lo diretamente na classe `MathUtils` sem precisar criar uma instância.

Os métodos de instância são úteis para operações que dependem de dados específicos de uma instância, enquanto os métodos estáticos são úteis para operações que não dependem de instâncias específicas da classe.

## Exercício 01 - Validação de CPF (Classes)

Exercício para fixação de conteúdo com o desenvolvimetno de um algorítimo para validação de CPF utilizando Classes disponível no caminho `projetos/7_/Exercicio1_validacaoCpf.js` ou [clicando aqui](https://github.com/max-santos-d/estudo-web-js/blob/main/projetos/7_/Exercicio01_validacaoCpf.js).

## Exercicio 02 - Validação de formulário utilizando Classes

Exercício para fixação de conteúdo com o desenvolvimetno de um projeto para validação de um formulário utilizando Classes, disponível no caminho `projetos/7_/Exercicio2_validacaoForm` ou [clicando aqui](https://github.com/max-santos-d/estudo-web-js/tree/main/projetos/7_/Exercicio2_validacaoForm).
