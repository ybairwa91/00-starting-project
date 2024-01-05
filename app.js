const path = require('path');

const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.send('<h1>Hello world</h1>');
});

app.get('/restaurents', function (req, res) {
  const htmlFilePath = path.join(__dirname, 'views', 'restaurents.html');
  res.sendFile(htmlFilePath);
});
    
app.listen(3000);
