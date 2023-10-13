const users = [
  { id: 1, name: 'alex' },
  { id: 2, name: 'ivan' },
  { id: 3, name: 'maria' }
]

function isUserValid(user) {
  return user.name !== undefined
}

function hasUser(userId) {
  return users.find((user) => user.id === userId) !== undefined
}

module.exports = {
  users,
  isUserValid,
  hasUser
}