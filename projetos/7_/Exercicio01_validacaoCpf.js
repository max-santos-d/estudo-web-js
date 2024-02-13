class CPFValidator {
    constructor(cpf) {
        this.cpf = cpf;
    }

    init = () => {
        const cleanCPF = this.cleanCPF(this.cpf);
        const validCPF = this.validCleanCpf(cleanCPF);

        console.log(validCPF ? 'CPF Válido' : 'CPF Inválido');
    }

    validCleanCpf (cleanCPF) {
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

    sliceCPF = function(cleanCPF) {
        return cleanCPF.slice(0, -2);
    }

    cleanCPF = function (cpf) {
        return cpf.replace(/\D+/g, '');
    }

    calcCPF = function (sliceCPF) {
        const arrayCPF = Array.from(sliceCPF);
        
        const result = arrayCPF.reduce((accumulator, value, index, array) => {
            const lengthArray = (array.length + 1) - index;
            accumulator += value * lengthArray;
            return accumulator;
        }, 0);
    
        return result;
    };

    digitCalc = function (result) {
        const calculatedDigit = 11 - (result % 11);
        return (calculatedDigit <= 9) ? String(calculatedDigit) : '0';
    };

    sequenceCPF = function (cpf) {
        const sequence = cpf[0].repeat(cpf.length);
        return sequence === cpf;
    }
};


const cpf = '705.484.450-52';
// const cpf = '111.111.111-11';

const cpfValidator = new CPFValidator(cpf);
cpfValidator.init();
