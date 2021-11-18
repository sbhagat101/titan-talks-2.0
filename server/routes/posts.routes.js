'use strict';
module.exports = function(app) {
  const controller = require('../controllers/posts.controller');

  app.route('/posts')
    .get(controller.findAll)
    .post(controller.create);
  
  app.route('/posts/:id')
    .get(controller.findOne)
    .delete(controller.delete);
};