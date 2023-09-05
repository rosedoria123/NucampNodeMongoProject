const express = require('express');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Configure CORS options (you can customize this based on your needs)
const corsOptions = {
  origin: 'http://localhost3000', // Replace with the allowed origin(s)
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Set to true if you want to allow credentials (cookies, etc.)
  optionsSuccessStatus: 204, // HTTP status code to send for successful OPTIONS requests
};

// Enable CORS for your routes
app.use('/users', cors(corsOptions));
app.use('/posts', cors(corsOptions));

// Require router modules
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/post');

// Use the routers for specific paths
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

const httpsOptions = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt'),
};

const server = https.createServer(httpsOptions, app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


