const { getUser } = require('./sequelize/select')

async function isUserExists(id) {
    const user = await getUser(id)

    return user !== undefined
}

function isUserValid(user) {
    return user?.name !== undefined && user?.age !== undefined
}

module.exports = {
    isUserExists,
    isUserValid
}