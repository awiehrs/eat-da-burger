// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
  
  all(cb) {
    orm.all('burgers', (res) => cb(res));
    console.log("burger all console")
  },
  // The variables cols and vals are arrays.
  create(cols, vals, cb) {
    orm.create('burgers', cols, vals, (res) => cb(res));
    console.log("burger being made")
  },
  update(objColVals, condition, cb) {
    orm.update('burgers', objColVals, condition, (res) => cb(res));
  },
  delete(condition, cb) {
   orm.delete('burgers', condition, (res) => cb(res));
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;