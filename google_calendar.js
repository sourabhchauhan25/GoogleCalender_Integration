const express = require('express');
const app = express();

app.get('/rest/v1/calendar/init', function(req, res) {
  res.send('Google Calendar Init View');
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});
