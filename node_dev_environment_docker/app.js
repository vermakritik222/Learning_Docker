const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const universalMiddleware = require('./middlewares/universalMiddleware');
const demoRouter = require('./routes/demoRouter');

const app = express();

// Cookie Parser
app.use(cookieParser());

// cors
const corsOption = {
    credentials: true,
    origin: ['http://localhost:3000'],
};

app.use(cors(corsOption));

// Serving static files
app.use(express.static(`${__dirname}/public`));

// Middleware
app.use(universalMiddleware.sendTimeStamp);

// Routes
app.use('/api/v1/demo', demoRouter);

app.get('/', (req, res) => {
    res.send('Hello Docker');
});

app.all('*', (req, res, next) => {
    console.log('page not found');
    res.status(404).send('404 page not found');
});

module.exports = app;
