'use strict';

require('dotenv').config();
const {Sequelize ,DataTypes} =require('sequelize');
const User =require('./user-model')

const POSTGRES_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;


const sequelizeOptions = process.env.NODE_ENV === 'development' ?   {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
}:{};

const db = new Sequelize(POSTGRES_URL,sequelizeOptions);




module.exports ={
    db :db,
    User: User(db, DataTypes)
}