'use strict';
require('dotenv').config();
const JWT = require("jsonwebtoken");
const SECRET = process.env.SECRET || "Manal Secret";

const User = (sequelize, DataTypes) => sequelize.define('users', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('admin', 'user'),
        defaultValue: 'user',
    },
    token: {
        type: DataTypes.VIRTUAL,
      
    },
    actions: {
        type: DataTypes.VIRTUAL,
        get() {
            const acl = {
                user: ['read','create','update'],
                admin: ['read', 'create', 'update', 'delete'],
            }
            return acl[this.role];
        }
    }
})
module.exports = User;