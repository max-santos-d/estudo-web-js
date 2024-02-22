class CPFValidator {
    constructor(cpf) {
        this.cpf = cpf;
    }

    init() {
        const cleanCPF = CPFValidator.cleanCPF(this.cpf);
        const validCPF = CPFValidator.validCleanCpf(cleanCPF);
        return validCPF;
    }

    static validCleanCpf(cleanCPF) {
        if (typeof cleanCPF === 'undefined') return false;
        if (cleanCPF.length !== 11) return false;
        if (CPFValidator.sequenceCPF(cleanCPF)) return false;

        const sliceCPF = CPFValidator.sliceCPF(cleanCPF);
        const calcDigit1 = CPFValidator.calcCPF(sliceCPF);
        const digit1 = CPFValidator.digitCalc(calcDigit1);
        const calcDigit2 = CPFValidator.calcCPF(sliceCPF + digit1);
        const digit2 = CPFValidator.digitCalc(calcDigit2);
        const newCpf = sliceCPF + digit1 + digit2;

        return newCpf === cleanCPF;
    };

    static sliceCPF = function (cleanCPF) {
        return cleanCPF.slice(0, -2);
    }

    static cleanCPF(cpf) {
        return cpf.replace(/\D+/g, '');
    }

    static calcCPF(sliceCPF) {
        const arrayCPF = Array.from(sliceCPF);

        const result = arrayCPF.reduce((accumulator, value, index, array) => {
            const lengthArray = (array.length + 1) - index;
            accumulator += value * lengthArray;
            return accumulator;
        }, 0);

        return result;
    };

    static digitCalc(result) {
        const calculatedDigit = 11 - (result % 11);
        return (calculatedDigit <= 9) ? String(calculatedDigit) : '0';
    };

    static sequenceCPF(cpf) {
        const sequence = cpf[0].repeat(cpf.length);
        return sequence === cpf;
    }
};

const cpf = '705.484.450-52';
// const cpf = '111.111.111-11';

const cpfValidator = new CPFValidator(cpf);
const validCPF = cpfValidator.init();

console.log(validCPF ? 'CPF Válido' : 'CPF Inválido');
