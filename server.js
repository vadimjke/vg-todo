const restify = require('restify');
const mongoose = require('mongoose');
const config = require('./config/development.js');

const server = restify.createServer();

// Middleware

server.use(restify.plugins.bodyParser());

server.listen(config.PORT, () => {
    mongoose.connect(config.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});

// Log requests in console for DEV ENV
if (config.ENV === 'development') {
    server.on('after', function (req, res, route, error) {
        console.log("------------------------")
        console.log(req.route.path)
        console.log(req.body)
    });
}

const db = mongoose.connection;

db.on('error', (err) => console.log(err));

db.once('open', () => {
    require('./routes/api/tasks')(server);
    console.log(`Server in mode "${config.ENV}" is running on port ${config.PORT}`);
});