const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let userForStatisticsSchema = new Schema({
    userID: { type: String },
    userRegistrationDate: { type: Date },
    userLoginDate: { type: Date },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    }, {collection: 'usersForStatistics'}
)

userForStatisticsSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });
module.exports = mongoose.models.UserForStatistics || mongoose.model('UserForStatistics', userForStatisticsSchema);