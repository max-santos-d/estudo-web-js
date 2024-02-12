const clock = () => {
    const timeDisplay = document.querySelector('.timer');
    const buttonInit = document.querySelector('.init');
    // const buttonPause = document.querySelector('.pause');
    const buttonReset = document.querySelector('.reset');
    let seconds = 0;
    let count;
    let click = false;

    document.addEventListener('click', (event) => {
        if (event.target === buttonInit) { // pode-se usar tbm da forma: event.target.classList.contains('init');
            if (!click) {
                click = true;
                timeDisplay.classList.remove('pause');
                timer();
            }
        }

        if (event.target.classList.contains('pause')) {
            clearInterval(count);
            if (seconds !== 0) timeDisplay.classList.add('pause');
            click = false;
        }

        if (event.target === buttonReset) {
            clearInterval(count);
            seconds = 0
            click = false;
            timeDisplay.innerHTML = formatCount(seconds)
            timeDisplay.classList.remove('pause');
        }
    });

    const timer = () => {
        count = setInterval(() => {
            seconds++;
            timeDisplay.innerHTML = formatCount(seconds);
        }, 1000);
    };


    const formatCount = () => {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    };
};

clock();