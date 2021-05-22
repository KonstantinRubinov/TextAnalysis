const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConfig = require('./database/db');
var HttpStatus = require('http-status-codes');

// Express APIs
const startApi = require('./routes/start.route');
const loginApi = require('./routes/login.route');
const userApi = require('./routes/user.route');
const fullanalyticsApi = require('./routes/fullanalytics.route');
const usersanalyticsApi = require('./routes/usersanalytics.route');
const wordsApi = require('./routes/words.route');

const antonimApi = require('./routes/maindb/antonim.route');
const archaismApi = require('./routes/maindb/archaism.route');
const expressionsApi = require('./routes/maindb/expressions.route');
const irregularsApi = require('./routes/maindb/irregulars.route');
const slangsApi = require('./routes/maindb/slangs.route');
const synonimsApi = require('./routes/maindb/synonims.route');

const tempAntonimApi = require('./routes/temporaldb/temp_antonim.route');
const tempArchaismApi = require('./routes/temporaldb/temp_archaism.route');
const tempExpressionsApi = require('./routes/temporaldb/temp_expressions.route');
const tempIrregularsApi = require('./routes/temporaldb/temp_irregulars.route');
const tempSlangsApi = require('./routes/temporaldb/temp_slangs.route');
const tempSynonimsApi = require('./routes/temporaldb/temp_synonims.route');


// MongoDB conection
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Database connected')
},
    error => {
        console.log("Database can't be connected: " + error)
    }
)

// Remvoe MongoDB warning error
mongoose.set('useCreateIndex', true);


// Express settings
const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());

// Serve static resources
app.use('/src', express.static('src'));
app.use('/assets', express.static('assets'));
app.use('/html', express.static('html'));

app.use(startApi)
app.use(loginApi)
app.use('/api', userApi)
app.use('/api', fullanalyticsApi)
app.use('/api', usersanalyticsApi)
app.use('/api', wordsApi)

app.use('/api', antonimApi)
app.use('/api', archaismApi)
app.use('/api', expressionsApi)
app.use('/api', irregularsApi)
app.use('/api', slangsApi)
app.use('/api', synonimsApi)

app.use('/api', tempAntonimApi)
app.use('/api', tempArchaismApi)
app.use('/api', tempExpressionsApi)
app.use('/api', tempIrregularsApi)
app.use('/api', tempSlangsApi)
app.use('/api', tempSynonimsApi)

// Define PORT
const port = process.env.PORT || dbConfig.PORT;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// Express error handling
app.use((req, res, next) => {
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});

app.use(function (error, req, res, next) {
    console.error(error.message);
    if (!error.statusCode) error.statusCode = HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR;
    res.status(error.statusCode).send(error.message);
});