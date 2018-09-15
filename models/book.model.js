var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bookSchema = new Schema({
    name: String,
    year: String,
    author: String,
    isbnNumber: String
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;