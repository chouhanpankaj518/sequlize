import { DataTypes } from 'sequelize';
// import sequelize from '../database/dataconnect.js';
import sequelize from './dataconnect.js';

const User = sequelize.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: true
});

export default User;
