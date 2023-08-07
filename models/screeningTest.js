const mongoose = require('mongoose');

const screeningTestSchema = new mongoose.Schema({
hr-id : { type:  Number, description: "Required Field", required: true },
emails : { type:  String, description: "Required Field", required: true },
questions : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('screeningTest', screeningTestSchema);