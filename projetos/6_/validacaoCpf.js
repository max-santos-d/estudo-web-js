// CPF válidos: 705.484.450-52 - 070.987.720-03

function CPFValidator(cpf) {
    this.cpf = cpf;

    this.init = () => {
        const cleanCPF = this.cleanCPF(cpf);
        const validCPF = this.validCpfGenerated(cleanCPF);
        const confirm = this.confirmCPF(validCPF, cleanCPF);

        console.log(confirm ? 'CPF Válido' : 'CPF Inválido');
    }

    this.validCpfGenerated = (cleanCPF) => {
        const arrayCPF = this.transformedArray(cleanCPF);
        const calcDigit1 = this.calcCPF(arrayCPF);
        const digit1 = this.digitCalc(calcDigit1);

        this.addDigit(arrayCPF, String(digit1))

        const calcDigit2 = this.calcCPF(arrayCPF);
        const digit2 = this.digitCalc(calcDigit2);
        this.addDigit(arrayCPF, String(digit2))

        const newCpf = this.generateCPF(arrayCPF);
        return newCpf;
    }

    this.cleanCPF = (cpf) => cpf.replace(/\D+/g, ''); // Removendo os caractéres que não forem números
    this.transformedArray = (cleanCPF) => Array.from(cleanCPF).slice(0, -2);
    this.addDigit = (array, digit) => array.push(digit);
    this.generateCPF = (array) => array.join('');
    this.confirmCPF = (validCPF, cpf) => validCPF !== '11111111' && validCPF !== '99999999' && validCPF === cpf;

    this.digitCalc = (result) => {
        const calculatedDigit = 11 - (result % 11);
        return (calculatedDigit <= 9) ? calculatedDigit : 0;
    }

    this.calcCPF = (cpfArray) => {
        const result = cpfArray.reduce((accumulator, value, index, array) => {
            const lengthArray = (array.length + 1) - index;
            accumulator += value * lengthArray;
            return Number(accumulator);
        }, 0);

        return result;
    };
};

const cpf = '705.484.450-52';

const cpfValidator = new CPFValidator(cpf);
cpfValidator.init();
