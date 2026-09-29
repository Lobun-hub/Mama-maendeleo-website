const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve index.html and other static files from this folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});
app.use(express.static(__dirname));

// Booking form submission
app.post('/book', (req, res) => {
  console.log("Booking received:");
  console.log(req.body);
  res.send("Booking received successfully!");
});

app.listen(PORT, () => {
  console.log(`SERVER IS LIVE ON PORT ${PORT}`);
});