const express = require("express");

const Book = require("../models/book.model");

const router = express.Router();

router.post("", (req, res, next) => {
  const book = new Book({
    name: req.body.name,
    year: req.body.year,
    author: req.body.author,
    isbnNumber: req.body.isbnNumber
  });
  book.save().then(createdBook => {
    res.status(201).json({
      message: "Book added successfully",
      bookId: createdBook._id
    });
  });
});

router.put("/:id", (req, res, next) => {
  const book = new Book({
    _id: req.body.id,
    name: req.body.title,
    year: req.body.content,
    author: req.body.author,
    isbnNumber: req.body.isbnNumber
  });
  Book.updateOne({ _id: req.params.id }, book).then(result => {
    res.status(200).json({ message: "Update successful!" });
  });
});

router.get("", (req, res, next) => {
  Book.find().then(result => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      books: result
    });
  });
});

router.get("/:id", (req, res, next) => {
  Book.findById(req.params.id).then(book => {
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: "Book not found!" });
    }
  });
});

router.delete("/:id", (req, res, next) => {
  Book.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Book deleted!" });
  });
});


module.exports = router;
