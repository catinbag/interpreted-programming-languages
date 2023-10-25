const { User } = require('./model')

async function createUser(userToSave) {
    const user = await User.create(userToSave);

    return user.toJSON()
}

module.exports = {
    createUser
}