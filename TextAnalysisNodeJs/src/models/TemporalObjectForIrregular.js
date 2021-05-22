const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const IrregularObject = require('../models/IrregularObject');

let temporalObjectForIrregularSchema = new Schema({
    mongoId: { type: String },
    action: { type: String },
    connectionWord: { type: String },
    inputedWord: { type: IrregularObject },
    type: { type: String }
    }, {collection: 'temporalObjectForIrregulars'}
)

temporalObjectForIrregularSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });
module.exports = mongoose.model('temporalObjectForIrregular', temporalObjectForIrregularSchema)