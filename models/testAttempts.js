const mongoose = require('mongoose');

const testAttemptsSchema = new mongoose.Schema({
test-id : { type:  Number, description: "Required Field", required: true },
email : { type:  String, description: "Required Field", required: true },
score : { type:  Number, description: "Required Field", required: true },
answers : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('testAttempts', testAttemptsSchema);