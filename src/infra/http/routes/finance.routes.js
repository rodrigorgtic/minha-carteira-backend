const { Router } = require('express');
const entryController = require('../../../modules/finance/controllers/entryController');
const authenticated = require('../middlewares/authenticated');

const financeRouter = Router();

financeRouter.post('/moviment', authenticated, entryController.create);

module.exports = financeRouter;
