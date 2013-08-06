var models = ['./schemas/jobsSchema.js'];

exports.initialize = function () {
    var modelLength = models.length;
    for (var i = 0; i < modelLength; i++) {
        require(models[i])();
        console.log('Initializing: ' + models.toString());
    }
};