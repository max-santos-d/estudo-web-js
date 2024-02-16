// fetch('pessoas.json')
//     .then(response => response.json())
//     .then(json => loadPage(json));

axios('pessoas.json')
    .then(response => loadPage(response.data))
    .catch(error => console.log(error));

function loadPage(json) {
    const content = document.querySelector('.content');
    const table = document.createElement('table');

    for (let person of json) {
        const tr = document.createElement('tr');
        let td = document.createElement('td');

        td.innerHTML = person.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = person.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = person.salario;
        tr.appendChild(td);

        table.appendChild(tr);
    };

    content.appendChild(table);
};  