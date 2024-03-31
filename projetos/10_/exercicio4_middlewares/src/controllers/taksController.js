const tasks = [];

exports.index = (req, res) => {
  const formHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Adicionar Tarefa</title>
    </head>
    <body>
      <h1>Adicionar Tarefa</h1>
      <form action="/" method="POST">
        <label for="task">Tarefa:</label>
        <input type="text" id="task" name="task" required>
        <button type="submit">Adicionar</button>
      </form>
    </body>
    </html>
  `;

  res.send(formHtml);
};

// Adiciona uma nova tarefa
exports.addTask = (req, res) => {
  const { task } = req.body;
  tasks.push(task);
  res.status(201).send('Tarefa adicionada com sucesso');
};

// Lista todas as tarefas
exports.listTasks = (req, res) => {
  res.json(tasks);
};
