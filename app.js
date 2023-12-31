const express = require('express');
var cors = require('cors')
const app = express();
const path = require('path');
const PORT = 8009;

require('dotenv').config();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const customQuery  = require('./controllers/customQuery');
app.use('/controller', customQuery);
const email  = require('./controllers/email');
app.use('/controller', email);
const testAttemptsRoute = require('./routes/testAttempts');
app.use('/testAttempts', testAttemptsRoute);
const screeningTestRoute = require('./routes/screeningTest');
app.use('/screeningTest', screeningTestRoute);
const campaignRoute = require('./routes/campaign');
app.use('/campaign', campaignRoute);
const hrRoute = require('./routes/hr');
app.use('/hr', hrRoute);

const conn = require('./middlewares/connection');
console.log("Trying to establish a connection to TiDB...");

if (conn) {
  console.log("Connection to TiDB successful");
} else {
  console.log("Connection to TiDB failed");
}


//Please don't delete this health API
app.use('/api/health', (req, res) => {
    res.send('Hello Autopilot');
  });

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

module.exports = app;