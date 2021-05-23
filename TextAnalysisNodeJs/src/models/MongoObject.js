const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let mongoObjectSchema = new Schema({
    mongoId: { type: String },
    mongoIdForAntonim: { type: String },
    strings: { type: Array }
    }, {collection: 'mongoObjects'}
)

mongoObjectSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });
module.exports = mongoose.models.MongoObject || mongoose.model('MongoObject', mongoObjectSchema);