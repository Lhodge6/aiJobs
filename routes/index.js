
/*
 * GET home page.
 */
var mongoose = require("mongoose");

exports.index = function(req, res){
  res.render('index', { title: 'a.i. Job Listings' });
};

exports.jobListings = function (req, res) {
    res.render('partials/jobListings', { title: 'a.i. Job Listings' });
};

exports.jobAdmin = function (req, res) {
    res.render('partials/jobAdmin', { title: 'a.i. Job Administration' });
};

exports.getAllJobs = function (req, res) {
    var jobInfo = mongoose.model('jobInfo');

    jobInfo.List(function (error, obj) {
        console.log(obj);

        var responseObject = { data: obj, err: error };

        res.send(responseObject);
    });

};

exports.addNewJobs = function (req, res) {
    var jobInfo = mongoose.model('jobInfo');

    var jobsToAdd = req.body.newJob;

    for (i = 0; i < jobsToAdd.length; i++) {

        var jobToAdd = jobsToAdd[i];

        var newJob = new jobInfo({
            jobTitle: jobToAdd.jobTitle,
            location: jobToAdd.location,
            ExperienceLevel: jobToAdd.ExperienceLevel,
            Category: jobToAdd.Category
        });

        newJob.Insert(function (insertedSucessfully) {
            if (insertedSucessfully) {
                console.log('saved new job: ' + jobToAdd.jobTitle);
            }
        });
    }
    res.send(true);
};

exports.addNewJob = function (req, res) {
    var jobInfo = mongoose.model('jobInfo');

    var jobToAdd = req.body.newJob;

    var newJob = new jobInfo({
        jobTitle: jobToAdd.jobTitle,
        location: jobToAdd.location,
        ExperienceLevel: jobToAdd.ExperienceLevel,
        Category: jobToAdd.Category
    });

    newJob.Insert(function (insertedSucessfully) {
        if (insertedSucessfully) {
            console.log('saved new job: ' + jobToAdd.jobTitle);
            res.send(insertedSucessfully);
        }
        else {
            res.send(insertedSucessfully);
        }
    });
};