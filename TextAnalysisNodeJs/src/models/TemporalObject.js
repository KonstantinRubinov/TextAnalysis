const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let temporalObjectSchema = new Schema({
    mongoId: { type: String },
    action: { type: String },
    connectionWord: { type: String },
    inputedWord: { type: String },
    type: { type: String }
    }, {collection: 'temporalObjects'}
)

temporalObjectSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });
module.exports = mongoose.models.TemporalObject || mongoose.model('TemporalObject', temporalObjectSchema);