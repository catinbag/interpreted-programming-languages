const express = require('express');
const cors = require('cors')
const { users, isUserValid, hasUser } = require('./users.js');
const { myLogger } = require("./logged.js")

const app = express();

app.use(cors()) // https://developer.mozilla.org/ru/docs/Web/HTTP/CORS
app.use(express.json());
app.use(myLogger);

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', function (req, res) {
  res.status(200);
  res.send('Hello World');
});

app.get('/users', async (req, res) => {
  const duration = Date.now() - req.requestTime
  console.log(duration)

  res.status(200);
  res.send(users);
});

app.get('/user-1', (req, res) => {
  const userToFind = users.find((user) => user.id === 1);

  res.status(200);
  res.send(userToFind);
});

app.get('/users/:id', (req, res) => {
  const valueToCompare = Number(req.params.id)
  const userToFind = users.find((user) => user.id === valueToCompare);

  if (userToFind === undefined) {
    res.status(404);
    return
  }

  res.status(200);
  res.send(userToFind);
});

app.post('/users', function (req, res) {
  const newUser = req.body

  if (!isUserValid(newUser)) {
    res.status(400);
    res.send('error')
    return
  }

  if (hasUser(newUser)) {
    res.status(400);
    res.send('error')
    return
  }

  users.push(newUser)
  res.status(200);
  res.send(newUser);
});

app.put('/users/:id', function (req, res) {
  const valueToCompare = Number(req.params.id)
  const userToFind = users.find((user) => user.id === valueToCompare);

  if (userToFind === undefined) {
    res.status(404);
    res.send('Нет такого пользователя')
    return
  }

  if (!isUserValid(newUser)) {
    res.status(400);
    return
  }

  const userToUpdate = req.body

  Object.keys(userToUpdate).forEach((key) => {
    userToFind[key] = userToUpdate[key]
  })

  res.status(200);
  res.send(userToFind);
});

app.delete('/users/:id', (req, res) => {
  const valueToCompare = Number(req.params.id)
  const userIndex = users.findIndex((user) => user.id === valueToCompare);

  if (userIndex === -1) {
    res.status(404);
    return
  }

  users.splice(userIndex, 1)

  res.status(200);
  res.send(users);
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on ${hostname}:${port}`);
});
