const { User } = require('./model')

async function updateUser(id, userToUpdate) {
    const result = await User.update(userToUpdate, {
        where: {
            id: id
        }
    });

    return result
}

module.exports = {
    updateUser
}