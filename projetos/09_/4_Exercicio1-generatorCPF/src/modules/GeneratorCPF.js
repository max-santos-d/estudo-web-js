import ValidatorCPF from './ValidatorCPF';

export default class GeneratorCPF {
    nineNumGen(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    };

    newCpf() {
        const noCpfDigit = this.nineNumGen();
        const digit1 = ValidatorCPF.calcDigit(noCpfDigit);
        const digit2 = ValidatorCPF.calcDigit(noCpfDigit + digit1);
        const format = this.formatCpf(noCpfDigit + digit1 + digit2);

        return format;
    };

    formatCpf(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    };
};