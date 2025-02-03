const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory array to store tasks
let tasks = [];

// Home page to view tasks
app.get('/', (req, res) => {
  res.send(`
    <h1>To-Do List</h1>
    <ul>
      ${tasks.map((task, index) => `
        <li>
          ${task.completed ? `<strike>${task.text}</strike>` : task.text}
          <form action="/complete/${index}" method="POST" style="display:inline;">
            <button type="submit">Mark as completed</button>
          </form>
          <form action="/delete/${index}" method="POST" style="display:inline;">
            <button type="submit">Delete</button>
          </form>
        </li>
      `).join('')}
    </ul>
    <form action="/add" method="POST">
      <input type="text" name="task" placeholder="New task" required>
      <button type="submit">Add Task</button>
    </form>
  `);
});

// Route to add a task
app.post('/add', (req, res) => {
  const taskText = req.body.task;
  tasks.push({ text: taskText, completed: false });
  res.redirect('/');
});

// Route to mark a task as completed
app.post('/complete/:id', (req, res) => {
  const taskId = req.params.id;
  tasks[taskId].completed = true;
  res.redirect('/');
});

// Route to delete a task
app.post('/delete/:id', (req, res) => {
  const taskId = req.params.id;
  tasks.splice(taskId, 1);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`To-Do app listening at http://localhost:${port}`);
});
