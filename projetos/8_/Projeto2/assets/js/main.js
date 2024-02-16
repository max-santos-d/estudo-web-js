document.addEventListener('click', event => {
    const element = event.target;
    const tag = element.tagName.toLowerCase();

    if (tag === 'a') {
        event.preventDefault();
        loadPage(element);
    }
});

async function loadPage(element) {
    const href = element.getAttribute('href');

    try {
        const response = await fetch(href);
        if (response.status !== 200) throw new Error('ERRO 404!');
        const html = await response.text();

        loadResponse(html);
    } catch (error) {
        console.log(error);
    }

    // // Fetch + then/catch
    // fetch(href)
    //     .then(response => {
    //         if (response.status !== 200) throw new Error('ERRO 404!');
    //         return response.text();
    //     })
    //     .then(html => loadResponse(html))
    //     .catch(error => console.log(error));
};

function loadResponse(response) {
    const content = document.querySelector('.content');

    if (response) {
        content.innerHTML = response;
    };
};
