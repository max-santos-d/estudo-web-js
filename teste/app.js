const express = require('express');
const app = express();

app.use(express.urlencoded({ exetended: true }));

// Definição da rota para a raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo ao Express!');
});

// Rota de exemplo
app.get('/exemplo', (req, res) => {
    // Layout HTML básico
    const htmlLayout = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Express HTML Layout</title>
        </head>
        <body>
            <h1>Exemplo de Rota Express com Layout HTML</h1>
            <p>Este é um exemplo de rota Express que envia um layout HTML.</p>
        </body>
        </html>
    `;

    res.send(htmlLayout);
});

app.get('/form', (req, res) => {
    // Layout HTML básico com um formulário
    const htmlLayout = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Express HTML Form Layout</title>
        </head>
        <body>
            <h1>Exemplo de Rota Express com Formulário HTML</h1>
            <form action="/submit" method="POST">
                <label for="name">Nome:</label><br>
                <input type="text" id="name" name="name"><br>
                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email"><br><br>
                <button>Enviar</button>
            </form>
        </body>
        </html>
    `;

    // Enviando o layout HTML com formulário como resposta
    res.send(htmlLayout);
});

// Rota para manipular o envio do formulário
app.post('/submit', (req, res) => {

    console.log(req.body);

    const { name, email } = req.body;
    res.send(`
        Formulário enviado com sucesso! <br>
        Nome: ${name}, Email: ${email}`
    );
});

// Iniciando o servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor Express está rodando em http://localhost:${port}`);
});