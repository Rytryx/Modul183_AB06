const express = require("express");
const http = require("http");
const { initializeAPI } = require("./api");

const expressPino = require("express-pino-logger");

const rotatingFileStream = require("./.request-log");


const pino = require('pino-http')()

app.use(pino)

app.get('/', function (req, res) {
  req.log.info('something')
  res.send('hello world')
})

app.listen(3000)

const app = express();
const logger = pino(rotatingFileStream); 
app.use(express.json());
app.use(expressPino({ logger }));

app.use(express.static("client"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/index.html");
});

initializeAPI(app);

const serverPort = 3000;
const server = http.createServer(app);
server.listen(serverPort, () => {
  console.log(`Express Server started on port ${serverPort}`);
});
