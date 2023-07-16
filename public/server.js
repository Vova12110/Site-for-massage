const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});

app.get('/location', (req, res) => {
  res.sendFile(__dirname + '/location.html');
});

app.get('/booking', (req, res) => {
  res.sendFile(__dirname + '/booking.html');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
