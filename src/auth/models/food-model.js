"use strict";




const Foods = (db, DataTypes) => db.define('foods',

    {
        foodName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        categoryName: {
            type: DataTypes.STRING,
        }



    }
);


module.exports =Foods;