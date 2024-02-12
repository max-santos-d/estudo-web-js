function CreateCalculator() {
    this.display = document.querySelector('.display');

    this.init = () => {
        this.buttonClick();
        this.enterPress();
    };

    this.buttonClick = () => {
        document.addEventListener('click', event => {
            const element = event.target;

            if(element.classList.contains('btn-number'))
                this.pressButton(this.display, element.innerText);
            if(element.classList.contains('btn-clear'))
                this.clearInput(this.display);
            if(element.classList.contains('btn-del'))
                this.delete(this.display);
            if(element.classList.contains('btn-equal'))
                this.calc(this.display);

            this.display.focus();
        })
    };

    this.enterPress = () => {
        document.addEventListener('keypress', event => {
            if(event.key === 'Enter') this.calc(this.display);
        });
    };

    this.pressButton = (display, textButton) => display.value += textButton;

    this.clearInput = display => display.value = '';

    this.delete = input => input.value = input.value.slice(0, -1);

    this.calc = display => {
        try{
            const calculation = eval(display.value);
            if(!calculation) display.value = 'ERRO';
            display.value = calculation;
        } catch {
            display.value = 'ERRO';
        }
    };
};

const calculator = new CreateCalculator();
calculator.init();
