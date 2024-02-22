import GeneratorCPF from './modules/GeneratorCPF';

import './assets/css/style.css';

const result = document.querySelector('.result');
const generateBtn = document.querySelector('.generate');
const generatorCPF = new GeneratorCPF();

generateBtn.addEventListener('click', event => {
    
    result.innerHTML = generatorCPF.newCpf();
    
});

