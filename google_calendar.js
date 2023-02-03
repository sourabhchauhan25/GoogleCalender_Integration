const express = require('express');
const request = require('request');
const app = express();

app.get('/rest/v1/calendar/init', function(req, res) {
  const code = req.query.code;

  const options = {
    method: 'POST',
    url: 'https://oauth2.googleapis.com/token',
    form: {
      code: code,
      client_id: 'your-client-id',
      client_secret: 'your-client-secret',
      redirect_uri: 'your-redirect-uri',
      grant_type: 'authorization_code'
    }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    const accessToken = JSON.parse(body).access_token;

    res.send(`Access Token: ${accessToken}`);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});
