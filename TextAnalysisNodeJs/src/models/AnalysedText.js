const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let analysedTextSchema = new Schema({
    repeated: { type: Set },
    archaisms: { type: Set },
    slangs: { type: Set },
    irregulars: { type: Set },
    expressions: { type: Set }
    }, {collection: 'analysedTexts'}
)

analysedTextSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });
module.exports = mongoose.model('analysedText', analysedTextSchema)