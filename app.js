const path = require('path');

const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  const htmlIndexPath = path.join(__dirname, 'views', 'index.html');
  res.sendFile(htmlIndexPath);
});

app.get('/restaurants', function (req, res) {
  const htmlRestaurantPath = path.join(__dirname, 'views', 'restaurants.html');
  res.sendFile(htmlRestaurantPath);
});

app.get('/about', function (req, res) {
  const htmlAboutPath = path.join(__dirname, 'views', 'about.html');
  res.sendFile(htmlAboutPath);
});

app.get('/recommend', function (req, res) {
  const htmlRecommendPath = path.join(__dirname, 'views', 'recommend.html');
  res.sendFile(htmlRecommendPath);
});

app.get('/confirm', function (req, res) {
  const htmlConfirmPath = path.join(__dirname, 'views', 'confirm.html');
  res.sendFile(htmlConfirmPath);
});

app.listen(3000);
