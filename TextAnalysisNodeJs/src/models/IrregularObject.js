const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let irregularObjectSchema = new Schema({
    mongoId: { type: String },
    first: { type: String },
    second: { type: String },
    third: { type: String }
    }, {collection: 'irregularObjects'}
)

irregularObjectSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });
module.exports = mongoose.model('irregularObject', irregularObjectSchema)