const { Schema, model } = require('mongoose');

const RecordSchema = new Schema({
   username: { type: String, required: true },
   time: { type: Number, required: true },
})

module.exports = model('Record', RecordSchema)