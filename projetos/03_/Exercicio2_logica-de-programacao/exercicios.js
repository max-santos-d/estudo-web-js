// Exercício 01 - Escreva uma função que recebe 2 números e retorne o maior deles

const maxNumber = (num1, num2) => num1 > num2 ? num1 : num2;

// Exercício 02
// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

const ePaisagem = (largura, altura) => largura > altura;

// Exercício 03
// Escreva uma função que recebe um número e retorne o seguinte?
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o proprio parâmetro
// Use a função com números de 0 a 100

const fizzBuzz = (num) => {
    if(typeof num !== 'number') return num;
    if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if(num % 3 === 0) return 'Fizz';
    if(num % 5 === 0) return 'Buzz';    
    return num;
}

// Chamando funções
// console.log(maxNumber(7, 5));
// console.log(ePaisagem(1200, 720));
for(let i = 0; i<= 100; i++) console.log(i, fizzBuzz(i));