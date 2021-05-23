const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let roleSchema = new Schema({
    guest: { type: String },
    registrated: { type: String },
    vip: { type: String },
    admin: { type: String }
    }, {collection: 'roles'}
)

roleSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });
module.exports = mongoose.models.Role || mongoose.model('Role', rentSchema);