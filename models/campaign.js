const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
jd : { type:  String, description: "Required Field", required: true },
position : { type:  String, description: "Required Field", required: true },
candidateInfo : { type:  String, description: "Required Field", required: true },
updatedjd : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('campaign', campaignSchema);