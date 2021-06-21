const express = require('express');
const mongoose = require('mongoose');

const { PORT, MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require('./config');

const postRouter = require('./routes/postRoutes');
const userRouter = require('./routes/userRoutes');

const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectWithRetry = () => {
    mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
        .then(() => console.log("Successfully connected to Mongo"))
        .catch(e => {
            console.log(e);
            setTimeout(connectWithRetry, 5000);
        });
};

connectWithRetry();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ data: 'Hello World!!!' });
});

app.use('/api/v1/posts', postRouter);
app.use('/api/v1/users', userRouter);

app.listen(PORT, console.log(`Server is running on Port: ${PORT}`));
