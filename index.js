const express = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

mongoose.connect('mongodb://devuser:gcsvn123@mongo:27017/?authSource=admin')
    .then(() => console.log("Successfully connected to Mongo"))
    .catch(e => console.log(e.message));

const app = express();

app.get('/', (req, res) => {
    res.json({ data: 'Hello World!!!' });
});

app.listen(port, console.log(`Server is running on Port: ${port}`));
