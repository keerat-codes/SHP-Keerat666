
// Auto-generated by AutoPilot on 07-08-2023 at 20:40:36

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');  // importing nodemailer to send emails

// POST request to send an email
router.post('/email', async (req, res) => {
    try {
        // creating an object of nodemailer 
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: '<email>',
                pass: '<password>'
            }
        });

        // setting the options for the email
        let mailOptions = {
            from: '<email>',
            to: req.query.email,
            subject: 'Hi',
            html: '<h5>Hi</h5>'
        };

        // sending the email
        let info = await transporter.sendMail(mailOptions);

        return res.status(200).json({
            result: 'email sent'
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: 'Encountered an error'
        });
    }
});

module.exports = router;