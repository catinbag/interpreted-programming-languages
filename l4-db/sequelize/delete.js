const { User } = require('./model')

async function deleteUser(id) {
    return await User.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    deleteUser
}