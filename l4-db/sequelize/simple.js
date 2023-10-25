const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelizeInstance = new Sequelize('sqlite::memory:');

class User extends Model { }

User.init({
    name: DataTypes.STRING,
    age: DataTypes.NUMBER
}, { sequelize: sequelizeInstance, modelName: 'user' });

(async () => {
    await sequelizeInstance.sync();
    const jane = await User.create({
        name: 'janedoe',
        age: 12
    });
    console.log(jane.toJSON());
})();