
var candidate = require("../app/data/friends.js");



module.exports = function(app) {

  
  app.get("/api/all", function(req, res) {


    candidate.findAll({}).then(function(results) {
      
      res.json(results);
    });

  });

  
  app.post("/api/new", function(req, res) {

    console.log("candidate Data:");
    console.log(req.body);

    candidate.create({
      name: req.body.name,
      gender: req.body.gender,
      occupation: req.body.occupation,
      ethnicity: req.body.ethnicity,
      income: req.body.income,
      zodiac: req.body.zodiac,
      created_at: req.body.created_at
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  });

};