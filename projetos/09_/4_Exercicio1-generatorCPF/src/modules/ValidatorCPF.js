export default class ValidatorCPF {
    constructor(cpf) {
        this.cpf = cpf;
    }

    init() {
        const cleanCPF = ValidatorCPF.cleanCPF(this.cpf);
        const validCPF = ValidatorCPF.validCleanCpf(cleanCPF);
        return validCPF;
    }

    static validCleanCpf(cleanCPF) {
        if (typeof cleanCPF === 'undefined') return false;
        if (cleanCPF.length !== 11) return false;
        if (ValidatorCPF.sequenceCPF(cleanCPF)) return false;

        const sliceCPF = ValidatorCPF.sliceCPF(cleanCPF);
        const digit1 = ValidatorCPF.calcDigit(sliceCPF);
        const digit2 = ValidatorCPF.calcDigit(sliceCPF + digit1);
        const newCpf = sliceCPF + digit1 + digit2;

        return newCpf === cleanCPF;
    };

    static sliceCPF = function (cleanCPF) {
        return cleanCPF.slice(0, -2);
    }

    static cleanCPF(cpf) {
        return cpf.replace(/\D+/g, '');
    }

    static calcDigit(sliceCPF) {
        const arrayCPF = Array.from(sliceCPF);

        const result = arrayCPF.reduce((accumulator, value, index, array) => {
            const lengthArray = (array.length + 1) - index;
            accumulator += value * lengthArray;
            return accumulator;
        }, 0);

        const calculatedDigit = 11 - (result % 11);

        return (calculatedDigit <= 9) ? String(calculatedDigit) : '0';
    };

    static sequenceCPF(cpf) {
        const sequence = cpf[0].repeat(cpf.length);
        return sequence === cpf;
    }
};

// const cpf = '705.484.450-52';
// // const cpf = '111.111.111-11';

// const cpfValidator = new ValidatorCPF(cpf);
// const validCPF = cpfValidator.init();

// console.log(validCPF ? 'CPF Válido' : 'CPF Inválido');
