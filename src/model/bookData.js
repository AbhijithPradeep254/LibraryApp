const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user1:user1@ictakfiles.9kgyw.mongodb.net/library?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

const bookSchema = new Schema(
    {
        title: String,
        author: String,
        genre: String,
        img: String
    }
);

var bookData = mongoose.model('bookdatas',bookSchema);

module.exports = bookData;