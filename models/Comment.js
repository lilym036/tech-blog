const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
{
    name: {

    },
    comm_text: {

    },
    blogpost_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'blogpost',
          key: 'id',
        },
    },
},
{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment', 
}
);

module.exports = Comment;