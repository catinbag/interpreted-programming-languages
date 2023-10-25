const Sequelize = require("sequelize");

const dbInstance = new Sequelize({
    dialect: "sqlite",
    storage: "./sqlite-data/users.sqlite",
});

async function initDb() {
    try {
        await dbInstance.authenticate();
        await dbInstance.sync();
        console.log("db inited");
    } catch (error) {
        console.log("db init has error", error);
    }
};

module.exports = {
    dbInstance,
    initDb
}