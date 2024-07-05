const express = require('express');
const homeController = require('../controllers/home-controller');

const router = express.Router();

const initWebRoutes = (app) => {
  router.get('/', homeController.getHomePage);
  return app.use('/', router);
};

module.exports = initWebRoutes;
