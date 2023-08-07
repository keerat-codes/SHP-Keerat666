const mongoose = require('mongoose');

const hrSchema = new mongoose.Schema({
name : { type:  String, description: "Required Field", required: true },
company : { type:  String, description: "Required Field", required: true },
email : { type:  String, description: "Required Field", required: true },
password : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('hr', hrSchema);