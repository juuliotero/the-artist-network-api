const models = require('../../../models');

module.exports = async (_root, { id }, _context) => {
  const parsedId = parseInt(id);
  const index = models.users.findIndex((item) => item.id === parsedId);
  let deletedUser = null;
  if(index !== -1){
    deletedUser = models.users.splice(index, 1)[0];
  }
  return deletedUser;
};