// CPF válidos: 705.484.450-52 - 070.987.720-03

function CPFValidator(cpf) {
    this.cpf = cpf;

    this.init = () => {
        const cleanCPF = this.cleanCPF(cpf);
        const validCPF = this.validCleanCpf(cleanCPF);

        console.log(validCPF ? 'CPF Válido' : 'CPF Inválido');
    }
};

CPFValidator.prototype.validCleanCpf = function (cleanCPF) {
    if(typeof cleanCPF === 'undefined') return false;
    if(cleanCPF.length !== 11) return false;
    if(this.sequenceCPF(cleanCPF)) return false;

    const sliceCPF = this.sliceCPF(cleanCPF);

    const calcDigit1 = this.calcCPF(sliceCPF);
    const digit1 = this.digitCalc(calcDigit1);
    const calcDigit2 = this.calcCPF(sliceCPF + digit1);
    const digit2 = this.digitCalc(calcDigit2);

    const newCpf = sliceCPF + digit1 + digit2;

    return newCpf === cleanCPF;
};

CPFValidator.prototype.sliceCPF = function(cleanCPF) {
    return cleanCPF.slice(0, -2);
}

CPFValidator.prototype.cleanCPF = function (cpf) {
    return cpf.replace(/\D+/g, '');
}

CPFValidator.prototype.calcCPF = function (sliceCPF) {
    const arrayCPF = Array.from(sliceCPF);
    
    const result = arrayCPF.reduce((accumulator, value, index, array) => {
        const lengthArray = (array.length + 1) - index;
        accumulator += value * lengthArray;
        return accumulator;
    }, 0);

    return result;
};

CPFValidator.prototype.digitCalc = function (result) {
    const calculatedDigit = 11 - (result % 11);
    return (calculatedDigit <= 9) ? String(calculatedDigit) : '0';
};

CPFValidator.prototype.sequenceCPF = function (cpf) {
    const sequence = cpf[0].repeat(cpf.length);
    return sequence === cpf;
}


const cpf = '705.484.450-52';
// const cpf = '111.111.111-11';

const cpfValidator = new CPFValidator(cpf);
cpfValidator.init();
