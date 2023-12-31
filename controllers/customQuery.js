
// Auto-generated by AutoPilot on 07-08-2023 at 20:47:03

const express = require('express');
const router = express.Router();
const connection = require('middleware'); //import the middleware

//POST route to execute custom SQL
router.post('/execute', (req, res) => {
    let query = 'select * from hr'; //query to execute
    connection.query(query, (err, results) => {
        if (err) {
            //if error is encountered, respond with status 500 and error message
            return res.status(500).json({ error: 'Encountered an error' });
        }
        //if no error, respond with status 200 and the fetched results
        res.status(200).json({ result: results });
    });
});

module.exports = router;