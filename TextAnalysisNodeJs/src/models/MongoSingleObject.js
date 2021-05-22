const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let mongoSingleObjectSchema = new Schema({
    mongoId: { type: String },
    word: { type: String }
    }, {collection: 'mongoSingleObjects'}
)

mongoSingleObjectSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });
module.exports = mongoose.model('mongoSingleObject', mongoSingleObjectSchema)