
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'a.i. Job Listings' });
};

exports.jobListings = function (req, res) {
    res.render('partials/jobListings', { title: 'a.i. Job Listings' });
};