// 705.484.450-52 070.987.720-03
/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Segundo dígito)
Se o número digito for maior que 9, consideramos 0.
*/

const cpf = '705.484.450-52';
const cpfLimpo = cpf.replace(/\D+/g, ''); // Removendo os caractéres que não forem números
const cpfArray = Array.from(cpfLimpo).slice(0, -2);

const reduce = (cpfArray) => {
    const result = cpfArray.reduce((accumulator, value, index, array) => {
        const lengthArray = (array.length + 1) - index;
        accumulator += value * lengthArray;
        return Number(accumulator);
    }, 0);

    return result;
};

const digitCalc = (result) => {
    const calculatedDigit = 11 - (result % 11);
    return (calculatedDigit <= 9) ? calculatedDigit : 0;
}

const addDigit = (array, digit) => array.push(digit);
const generateCpf = (array) => array.join('');
const confirmCpf = (calcCpf, cpf) => calcCpf !== '11111111' && calcCpf !== '99999999' && calcCpf === cpf;

const calcDigit1 = reduce(cpfArray);
const digit1 = digitCalc(calcDigit1);
addDigit(cpfArray, String(digit1))
const calcDigit2 = reduce(cpfArray);
const digit2 = digitCalc(calcDigit2);
addDigit(cpfArray, String(digit2))
const newCpf = generateCpf(cpfArray);

console.log(confirmCpf(newCpf, cpfLimpo));
