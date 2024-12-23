const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

let books = require('./book.json');

// Route to get all books
app.get('/book', (req, res) => {
  res.json(books);
});

// Route to add a new book
app.post('/book', (req, res) => {
  const book = req.body;
  books.push(book);
  
  // Save the updated books array to books.json
  fs.writeFileSync('./book.json', JSON.stringify(book, null, 2), 'utf-8');

  res.status(201).json(book);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
