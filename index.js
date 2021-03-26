const express = require("express");
const path = require('path');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const homeRoutes = require('./routes/home');
// const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// dotenv.config();

app.set('view engine', 'ejs');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(morgan('combined'));    
app.use(cors());
app.use(express.static(path.join(__dirname, './public/images')));

app.all('/*', function (req, res, next) {
    console.log("API called :", req.url);
    console.log("Request Body :", req.body);
    console.log("Request query parameters :", req.query);
    console.log("Request URL parameters :", req.params);
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', '*');
    
    if (req.method === 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

app.get('/hello', (req, res) => {
    console.log('Requests :', req)
    return res.send('Server is up and running!!!')
});
// For get request: URL, URL parameters, query parameters
// For post request: URL, URL parameters, query parameters, body

// GET, POST, PUT, PATCH, DELETE
app.use('/api', routes);
app.use('/home', homeRoutes);

const server = require('http').createServer(app);
server.setTimeout(3600000); 

try {
    server.listen(3000, function () {
        console.log('Server turned on with port 3000');
    });
} catch (ex) {
    console.log(ex);
} 


// http://localhost:3000/api/user/all
// http://localhost:3000/home/user/all
