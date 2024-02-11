function createCalculator() {
    return {
        display: document.querySelector('.display'),

        init() {
            this.buttonClick();
            this.keyPress();
        },

        keyPress() {
            document.addEventListener('keypress', event => {
                if(event.key === 'Enter') this.result(this.display.value);
            });
        },

        buttonClick() {
            document.addEventListener('click', event => {
                const element = event.target;
                if (element.classList.contains('btn-number'))
                    this.display.value += element.innerText;
                if (element.classList.contains('btn-del'))
                    this.display.value = this.delete(this.display.value);
                if (element.classList.contains('btn-clear'))
                    this.clearInput();
                if (element.classList.contains('btn-equal'))
                    this.result(this.display.value);
            });
        },

        result(inputText) {
            try {
                let result = eval(inputText);
                if (!result) return this.display.value = 'ERRO';
                this.display.value = String(result);
                this.display.focus();
            } catch {
                this.display.value = 'ERRO';
            }
        },

        delete(inputText) {
            const newText = inputText.slice(0, -1);
            return newText;
        },

        clearInput() {
            this.display.focus();
            this.display.value = '';
        }
    };
};

const calculator = createCalculator();
calculator.init();
