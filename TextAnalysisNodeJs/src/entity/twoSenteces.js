const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let twoSentecesSchema = new Schema({
    firstSentence: { type: String },
    secondSentence: { type: String }
    }, {collection: 'twoSentecess'}
)

twoSentecesSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });
module.exports = mongoose.models.TwoSenteces || mongoose.model('TwoSenteces', twoSentecesSchema);