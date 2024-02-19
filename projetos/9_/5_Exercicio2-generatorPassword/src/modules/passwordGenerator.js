const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const numberGenerate = () => String(random(0, 9));
const uppercaseGenerate = () => String.fromCharCode(random(65, 90));
const lowercaseGenerate = () => String.fromCharCode(random(97, 122));

const symbolGenerate = () => {
    const symbols = '!@#$%&*()_+-=';
    return symbols[random(0, symbols.length)];
};

const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

export default function passwordGenerator(quantity, number, uppercase, lowercase, symbol) {

    let array = [];

    for (let i = 0; i <= quantity; i++) {
        number && array.push(numberGenerate());
        uppercase && array.push(uppercaseGenerate());
        lowercase && array.push(lowercaseGenerate());
        symbol && array.push(symbolGenerate());
    }

    array = shuffleArray(array).join('').slice(0, quantity);

    return array;
};
