const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');
// const Favorite = require('./Favorite');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// User.hasMany(Favorite, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Favorite.belongsTo(User, {
//     foreignKey: 'user_id'
// });

// Favorite.hasMany(Post, {
//     foreignKey: 'post_id'
// });

// Post.belongsTo(Favorite, {
//     foreignKey: 'post_id'
// });

module.exports = { User, Post, Comment};