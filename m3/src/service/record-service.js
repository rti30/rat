const RecordModel = require('../models/record-model.js');
class RecordService {
   setRecord = async (username, time) => RecordModel.create({ username, time })
   getRecords = async () => RecordModel.find();
}
module.exports = new RecordService();