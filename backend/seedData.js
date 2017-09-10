const db = require('./models');
const seedFunction = require('./seeders');

db.sequelize.sync({ force: true }).then(() => {
  seedFunction();
});
