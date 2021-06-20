const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.json({ data: 'Hello World!' });
});

app.listen(port, console.log(`Server is running on Port: ${port}`));
