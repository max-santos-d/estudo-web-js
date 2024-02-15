class FormValidation {
    constructor() {
        this.form = document.querySelector('.form');
        this.submit;
        this.handleSubmit();
    };

    handleSubmit() {
        this.form.addEventListener('submit', event => {
            event.preventDefault();

            this.submit = true;
            this.removeErrors(this.form.querySelectorAll('.error-message'));
            this.fieldValidation(this.form.querySelectorAll('.validate'));
            this.passwordValidation(
                this.form.querySelector('.password'),
                this.form.querySelector('.repeat-password')
            );

            console.log(`Form submit: ${this.submit}`);
            if (this.submit) alert('enviado');
        });
    };

    removeErrors(elements) {
        for (let divError of elements) {
            divError.remove();
        };
    };

    fieldValidation(elements) {
        for (let field of elements) {
            const fieldLabel = field.previousElementSibling.innerText;


            if (!field.value) this.blankFields(field, fieldLabel);
            if (field.classList.contains('cpf')) this.cpfValidate(field, fieldLabel);
            if (field.classList.contains('user')) this.userValidate(field, fieldLabel)
        };
    };
    
    passwordValidation(password, passwordRep) {
        if(password.value !== passwordRep.value) {
            this.submit = false;
            this.error(password, `Campos "Senha" e "Repetir Senha" precisam ser iguais.`);
            this.error(passwordRep, `Campos "Senha" e "Repetir Senha" precisam ser iguais.`);
        }

        if(password.value.length < 6 || password.value.length > 12){
            this.submit = false;
            this.error(password, `Campos "Senha" precisa conter entre 06 e 12 caractéres.`);
        }
    }

    blankFields(field, fieldLabel) {
        this.submit = false;
        this.error(field, `Campo ${fieldLabel} não pode estar vazio.`);
    };

    cpfValidate(field, fieldLabel) {
        const validateCpf = new CPFValidator(field.value).init();

        if (!validateCpf) {
            this.submit = false;
            this.error(field, `Campo ${fieldLabel} inválido.`);
        }
    }

    userValidate(field, fieldLabel) {

        if (!field.value.match(/^[a-zA-Z0-9]+$/g)) {
            this.submit = false;
            this.error(field, `Campo ${fieldLabel} precisa conter apenas numeros e/ou letras.`);
        }
        if (field.value.length < 3 || field.value.length > 12) {
            this.submit = false;
            this.error(field, `Campo ${fieldLabel} precisa conter entre 3 e 12 caractéres.`);
        }
    }

    error(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-message');
        field.insertAdjacentElement('afterend', div);
    }
};

const formValidation = new FormValidation();