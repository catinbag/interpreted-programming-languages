const { User } = require('./model')

async function getUsers() {
    const users = await User.findAll();
    const castedUsers = users.map((user) => user.toJSON())

    return castedUsers
}

async function getUser(id) {
    const users = await User.findAll({
        where: {
            id: id
        }
    });
    const castedUsers = users.map((user) => user.toJSON())

    return castedUsers[0]
}

module.exports = {
    getUsers,
    getUser
}