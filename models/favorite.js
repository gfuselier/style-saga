// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Favorite extends Model { }

// Favorite.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         favorited: {
//             type: DataTypes.BOOLEAN,
//             allowNull: false,
//             defaultValue: true,
//         },
//         user_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'user',
//                 key: 'id',
//             },
//         },
//         post_id:
//         {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'post',
//                 key: 'id',
//             },
//         }
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'favorite',
//     }
// );

// module.exports = Favorite;
