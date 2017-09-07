const http = require('http');
const path = require('path');
const Express = require('express');

const app = Express();

app.get('/', function (req, res, next) {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

const server = http.createServer(app);

server.listen(8081, function () {
  console.log(`Server listening on 8081`);
});
