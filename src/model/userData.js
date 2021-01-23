const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect('mongodb+srv://user1:user1@ictakfiles.9kgyw.mongodb.net/library?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: String,
        email: String,
        password: String
    }
);

userSchema.plugin(passportLocalMongoose);
var userData = mongoose.model('userdatas', userSchema, 'userdatas');

module.exports = userData;