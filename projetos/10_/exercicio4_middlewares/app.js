const express = require('express');
const app = express();
const routes = require('./routes');

const loggerMiddleware = require('./src/middlewares/logger');
const authMiddleware = require('./src/middlewares/authenticator');
const errorHandlerMiddleware = require('./src/middlewares/errorHandler');

app.use(express.urlencoded({ exetended: true }));

// Middlewares globais
app.use(loggerMiddleware);
app.use(authMiddleware);

// Rotas
app.use(routes);

// Middleware de tratamento de erros
app.use(errorHandlerMiddleware);

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor Express está rodando em http://localhost:${port}`);
});