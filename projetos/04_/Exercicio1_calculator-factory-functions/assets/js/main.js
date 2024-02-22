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
                if (element.classList.contains('btn-number')){
                    this.display.value += element.innerText;
                    this.display.focus();
                }
                if (element.classList.contains('btn-del'))
                    this.display.value = this.delete(this.display.value);
                if (element.classList.contains('btn-clear'))
                    this.clearInput();
                if (element.classList.contains('btn-equal'))
                    this.result(this.display.value);
            });
        },

        result(inputText) {
            console.log(inputText);
            console.log(typeof inputText);
            try {
                const result = eval(inputText);
                console.log('ok');
                if (!result) return this.display.value = 'ERRO';
                this.display.value = String(result);
                this.display.focus();
            } catch (e) {
                console.log(e);
                this.display.value = '';
                this.display.value = 'ERRO';
                this.display.focus();
            }
        },

        delete(inputText) {
            const newText = inputText.slice(0, -1);
            this.display.focus();
            return newText;
        },

        clearInput() {
            this.display.value = '';
            this.display.focus();
        }
    };
};

const calculator = createCalculator();
calculator.init();
