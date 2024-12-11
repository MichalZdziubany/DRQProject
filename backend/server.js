const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@bookapp.zibpr.mongodb.net/?retryWrites=true&w=majority&appName=BookApp');

const bookSchema = new mongoose.Schema({
  title:String,
  author:String,
  cover:String,
  genre:String
});

const bookModel = new mongoose.model('345457',bookSchema);

app.get('/api/books', async (req, res) => {
    const books = await bookModel.find({});
    res.status(200).json({books})
});

app.post('/api/books',async (req, res)=>{
  console.log(req.body.title);
  const {title, author, cover, genre} = req.body;

  const newBook = new bookModel({title, author, cover, genre});
  await newBook.save();

  res.status(201).json({"message":"Book Added!",Book:newBook});
})


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});