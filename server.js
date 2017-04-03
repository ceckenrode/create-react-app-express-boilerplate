var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var sequelizeRouter = require('sequelize-router');
var db = require('./models');
var PORT = process.env.PORT || 3001;
var app = express();

app.use(express.static('client/build'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Sequelize Router automatically creates REST API routes for the Todo model
// See https://github.com/ceckenrode/sequelize-router
app.use('/api', sequelizeRouter(db.Todo));

// Anything that isn't a request for an API just gets sent to the React App
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(
      '🌎 ==> Now listening on PORT %s! Visit http://localhost:%s in your browser!',
      PORT,
      PORT
    );
  });
});
