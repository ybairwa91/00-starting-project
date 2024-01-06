const fs = require('fs');

const path = require('path');

const express = require('express');

const app = express();
app.set('views', path.join(__dirname, 'views')); //place where find the template file
app.set('view engine', 'ejs'); //set method set some express features basically(first argument==tell to view the engine,second tell the name of the engine)

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/restaurants', function (req, res) {
  res.render('/restaurants');
});

app.get('/about', function (req, res) {
  res.render('/about');
});

app.get('/recommend', function (req, res) {
  res.render('/recommend');
});

app.post('/recommend', function (req, res) {
  const restaurant = req.body;
  const filePath = path.join(__dirname, 'data', 'restaurants.json');
  const fileData = fs.readFileSync(filePath);
  const storedRestaurant = JSON.parse(fileData);
  storedRestaurant.push(restaurant);
  fs.writeFileSync(filePath, JSON.stringify(storedRestaurant));
  res.redirect('/confirm');
});

app.get('/confirm', function (req, res) {
  res.render('confirm');
});

app.listen(3000);
