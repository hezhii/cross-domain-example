const http = require('http');
const Express = require('express');
const bodyParser = require('body-parser');

const app = Express();

app.use(bodyParser.urlencoded({extended: true}));

app.all('/cross-domain', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8081');

  // 就算不允许 POST 仍然可以 POST 跨域，尚不清楚原因。
  // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE，OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
  }
  else {
    next();
  }
});

app.get('/cross-domain', function (req, res, next) {
  res.send('Cross domain request success! Method is GET.');
});

app.post('/cross-domain', function (req, res, next) {
  console.log(req.body.message);
  res.send('Cross domain request success! Method is POST.');
});

const server = http.createServer(app);

server.listen(8080, function () {
  console.log(`Server listening on 8080`);
});
