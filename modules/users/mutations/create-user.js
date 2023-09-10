const models = require('../../../models');

module.exports = async (_root, { input }, _context) => {
  const newId = models.users.length + 1;
  models.users.push({id: newId, ...input});
  return models.users.find((item) => item.id === newId);
};