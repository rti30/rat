const Router = require('express');
const recordController = require('../controllers/record-controller.js');
const router = new Router();

router.get('/record', recordController.getRecords);
router.post('/record', recordController.setRecord);

module.exports = router;