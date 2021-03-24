const express = require("express");
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const cors = require('cors');
const app = express();

// Setting up server
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Define PORT address
const PORT = 8080;

// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('The API is working properly');
});

app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
});
