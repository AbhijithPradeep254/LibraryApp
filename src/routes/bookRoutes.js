const express = require('express');
const fs = require('fs');
const booksRouter = express.Router();
const bookData = require('../model/bookData');

router = postNav =>
{
    // var books = JSON.parse(fs.readFileSync('./public/books.json'));

    
    booksRouter.get('/', (req, res) =>
    {
        bookData.find().then(books =>
            {
                res.render("books", {postNav, books});
            });
    });
    
    booksRouter.get('/:id', (req,res) =>
    {
        const id = req.params.id;
        bookData.findOne({_id: id}).then(book =>
            {
                res.render("singleBook", {postNav, book});
            });
    });

    return booksRouter;
}

module.exports = router;


