
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var candidates = [
  {
    routeName: "mikeff",
    name: "Mike",
    gender: "male",
    occupation: "electrician",
    ethnicity: "native american",
    income: "$60,000",
    zodiac: "virgo"
  },
  {
    routeName: "danaff",
    name: "Dana",
    gender: "female",
    occupation: "receptionist",
    ethnicity: "mexican",
    income: "$35,000",
    zodiac: "gemini"
  },
  {
    routeName: "jennaff",
    name: "Jenna",
    gender: "female",
    occupation: "retail clerk",
    ethnicity: "irish",
    income: "$30,000",
    zodiac: "cancer"
  },
  {
    routeName: "chongff",
    name: "Chong",
    gender: "male",
    occupation: "engineer",
    ethnicity: "chinese",
    income: "$75,000",
    zodiac: "taurus"
  },
  {
    routeName: "isabelff",
    name: "Isabel",
    gender: "female",
    occupation: "veternarian",
    ethnicity: "puerto rican",
    income: "$95,000",
    zodiac: "virgo"
  },
  {
    routeName: "georgeff",
    name: "George",
    gender: "male",
    occupation: "bartender",
    ethnicity: "russian",
    income: "$55,000",
    zodiac: "cancer"
  },
  {
    routeName: "felicityff",
    name: "Felicity",
    gender: "female",
    occupation: "lawyer",
    ethnicity: "german",
    income: "$105,000",
    zodiac: "gemini"
  },
  {
    routeName: "danff",
    name: "Dan",
    gender: "male",
    occupation: "manager",
    ethnicity: "english",
    income: "$65,000",
    zodiac: "pieces"
  },
  {
    routeName: "makenzieff",
    name: "Makenzie",
    gender: "female",
    occupation: "chiripractor",
    ethnicity: "polish",
    income: "$95,000",
    zodiac: "virgo"
  },
  {
    routeName: "mustafaff",
    name: "Mustafa",
    gender: "male",
    occupation: "mechanic",
    ethnicity: "persian",
    income: "$75,000",
    zodiac: "taurus"
  },

];

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/add", function (req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});


app.get("/api/candidates", function (req, res) {
  return res.json(candidates);
});


app.get("/api/candidates/:candidate", function (req, res) {
  var chosen = req.params.candidate;

  console.log(chosen);

  for (var i = 0; i < candidates.length; i++) {
    if (chosen === candidates[i].routeName) {
      return res.json(candidates[i]);
    }
  }

  return res.json(false);
});



app.post("/api/candidates", function (req, res) {
  
  var newcanadiate = req.body;

  
  newcanadiate.routeName = newcanadiate.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcanadiate);

  characters.push(newcanadiate);

  res.json(newcanadiate);
});


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});