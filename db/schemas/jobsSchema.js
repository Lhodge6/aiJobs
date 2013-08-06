var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var jobsSchema = new Schema({
    jobTitle: String,
    location: String,
    ExperienceLevel: String,
    Category: String
});

jobsSchema.statics.List = function (callback) {
    this.find({}, callback);
}

jobsSchema.methods.Insert = function (callback) {
    console.log("Attemping to insert to DB...");

    this.save(function (err, job) {
        if (err) {
            return true;
        }
        else {
            return false;
        }
        console.log("Saved: " + job);
    });
}

module.exports = mongoose.model('jobInfo', jobsSchema);