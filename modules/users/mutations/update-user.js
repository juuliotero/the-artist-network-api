const models = require('../../../models');

module.exports = async (_root, { id, input }, _context) => {
  const parsedId = parseInt(id);
  const index = models.users.findIndex((item) => item.id === parsedId);
  const item = models.users.splice(index, 1)[0];
  models.users.push({
    ...item,
    ...input,
  });
  return models.users.find((item) => item.id === parsedId);
};