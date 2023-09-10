const models = require('../../../models');

module.exports = async (_root, { id }, _context) => {
  const parsedId = parseInt(id);
  return models.users.find((item) => item.id === parsedId);
};