module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user_account', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        timestamps: false,
        freezeTableName: true
    })

    return User
}