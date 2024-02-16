// XMLHttpRequest utilizando callback
const requestCallback = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);

    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.response);
        } else {
            obj.error({
                code: xhr.status,
                msg: xhr.statusText
            })
        }
    });

    xhr.addEventListener('onerror', () => {
        obj.error(new Error('Erro de rede'));
    })

    xhr.send();
};

// XMLHttpRequest utilizando Promise
const requestPromise = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response)
            } else {
                reject({
                    code: xhr.status,
                    msg: xhr.statusText
                });
            };
        });

        xhr.addEventListener('onerror', () => {
            reject(new Error('Erro de rede'));
        })

        xhr.send();
    });
};

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
        const response = await requestPromise({ method: 'GET', url: href, });
        loadResponse(response);
    } catch (error) {
        console.log(error.code, error.msg);
    }

    // // Utilizando .then/.catch
    // request({
    //     method: 'GET',
    //     url: href,        
    // })
    // .then(response => loadResponse(response))
    // .catch(error => console.log(error));
};

function loadResponse(response) {
    const content = document.querySelector('.content');

    content.innerHTML = response;
};

