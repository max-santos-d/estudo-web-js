const form = document.querySelector('#form');

// Capturando eventos do formulário
form.addEventListener('submit', function (event) {
    const weight = Number(event.target.querySelector('#weight').value);
    const height = Number(event.target.querySelector('#height').value);

    event.preventDefault();

    if (!weight) return setResult('Peso Inválido', false);
    if (!height) return setResult('Altura Inválida', false);

    const resultCalculation = calculation(weight, height);
    const resultIMC = getIMC(resultCalculation);

    setResult(resultIMC, true, resultCalculation);
});

// Função para calculo IMC
function calculation(weight, height) {
    return (weight / (height ** 2)).toFixed(2);
}

//Função para designar os níveis de acordo com o valor obtido no calculo IMC
function getIMC(value) {
    if (value < 18.5) return 'Abaixo do peso';
    if (value <= 24.9) return 'Peso normal'
    if (value <= 29.9) return 'Sobrepeso'
    if (value <= 34.9) return 'Obesidade grau 1'
    if (value <= 39.9) return 'Obesidade grau 2'
    if (value > 40) return 'Obesidade grau 3';
}

// Função para apresentação do resultado na div result
function setResult(msg, classTipe, imcValue) {
    const result = document.querySelector('.result');
    const className = (classTipe) ? 'paragraph-result-suc' : 'paragraph-result-err';
    const p = createParagraph(className);

    if(imcValue) {
        p.innerHTML = `Seu IMC: ${imcValue} - ${msg}`;
    }else {
        p.innerHTML = msg;
    }
    
    result.innerHTML = '';
    result.appendChild(p);
}

// Função para criação do elemento paragrafo em html
function createParagraph(className) {
    const p = document.createElement('p');
    p.classList.add(className);
    return p;
}
