const models = require('../../../models');
module.exports = async (_root, _args, _context) => {
  return models.users;
};