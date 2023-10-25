const express = require('express');
const cors = require('cors')

const { getIdFromRequest, getBodyFromRequest } = require('./utils/req')
const { initDb } = require('./sequelize/db')
const { isUserExists, isUserValid } = require('./users')
const { getUsers, getUser } = require('./sequelize/select')
const { createUser } = require('./sequelize/insert')
const { updateUser } = require('./sequelize/update')
const { deleteUser } = require('./sequelize/delete')

const app = express();

app.use(cors()) // https://developer.mozilla.org/ru/docs/Web/HTTP/CORS
app.use(express.json());

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', function (req, res) {
  res.status(200);
  res.send('Hello World');
});

app.get('/users', async (req, res) => {
  const users = await getUsers()

  res.status(200);
  res.send(users);
});

app.get('/users/:id', async (req, res) => {
  const userId = getIdFromRequest(req)

  const userToFind = await getUser(userId)

  if (userToFind === undefined) {
    res.status(404);
    return
  }

  res.status(200);
  res.send(userToFind);
});

app.post('/users', async function (req, res) {
  const newUser = getBodyFromRequest(req)

  if (!isUserValid(newUser)) {
    res.status(400)
    res.send('error: bad request')
  }

  const createdUser = await createUser(newUser)

  res.status(200);
  res.send(createdUser);
});

app.put('/users/:id', async function (req, res) {
  const userId = getIdFromRequest(req)

  if (!isUserExists(userId)) {
    res.status(404)
    res.send('has no user')
    return
  }

  const payload = getBodyFromRequest(req)
  await updateUser(userId, payload)

  res.status(200);
  res.send('success');
});

app.delete('/users/:id', async (req, res) => {
  const userId = getIdFromRequest(req)

  const exists = await isUserExists(userId)

  if (!exists) {
    res.status(404)
    res.send('has no user')
    return
  }

  await deleteUser(userId)

  res.status(200);
  res.send('ok');
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on ${hostname}:${port}`);
});
