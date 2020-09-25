const fetch = require('node-fetch');

module.exports = (req, res) => {
  var body = JSON.stringify({"prompt": "hello world", "max_tokens": 9 });

  var requestOptions = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.API_KEY}`
    },
    body: body,
    redirect: 'follow'
  };

  fetch("https://api.openai.com/v1/engines/davinci/completions", requestOptions)
    .then(response => response.json())
    .then(json => {
      res.status(200).json(json);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('An error occurred');
    });
};


