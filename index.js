const restify = require('restify');
const mongoose = require('mongoose');
const config = require('./config.js');

const server = restify.createServer();

// Middleware

server.use(restify.plugins.bodyParser());

server.listen(config.PORT, () => {
    mongoose.connect(config.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});

const db = mongoose.connection;

db.on('error', (err) => console.log(err));

db.once('open', () => {
    require('./routes/tasks')(server);
    console.log(`Server is running on port ${config.PORT}`);
});

