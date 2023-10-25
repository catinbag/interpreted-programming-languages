const { DataTypes, Model } = require('sequelize');
const { dbInstance } = require('./db');

class User extends Model { }

User.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
}, {
    // Other model options go here
    sequelize: dbInstance, // We need to pass the connection instance
    modelName: 'user' // We need to choose the model name
});

module.exports = {
    User
}