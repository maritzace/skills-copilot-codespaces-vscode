// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// Create web server
const app = express();

// Middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Create route
app.get('/posts/:id/comments', (req, res) => {
    res.send([{title: 'Comment 1'}, {title: 'Comment 2'}]);
});

// Listen port 4001
app.listen(4001, () => {
    console.log('Listening on 4001');
});