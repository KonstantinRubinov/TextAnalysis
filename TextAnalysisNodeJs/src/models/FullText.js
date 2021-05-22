const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let fullTextSchema = new Schema({
    textToCheck: { type: String }
    }, {collection: 'fullTextTexts'}
)

fullTextSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });
module.exports = mongoose.model('fullText', fullTextSchema)