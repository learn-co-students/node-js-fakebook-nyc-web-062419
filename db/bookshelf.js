const config  = require('../../knexfile.js');
const knex = require('knex')(config[process.env.NODE_ENV]);
const bookshelf = require('bookshelf')(knex);
const User = bookshelf.model('User', {
  tableName: 'users'})
const Friend = bookshelf.model('Friend', {
  tableName: 'users'})
bookshelf.plugin('registry');

module.exports = bookshelf;
