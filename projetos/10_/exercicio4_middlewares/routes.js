const express = require('express');
const router = express.Router();

const taskController = require('./src/controllers/taksController');

const logRouteMiddleware = require('./src/middlewares/logRoute');

//Rota index
router.get('/', logRouteMiddleware, taskController.index)

// Rota para listar tarefas
router.get('/tasks', taskController.listTasks);

// Rota para adicionar tarefa
router.post('/', taskController.addTask);

module.exports = router;
