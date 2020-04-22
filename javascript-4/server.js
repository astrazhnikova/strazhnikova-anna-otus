// сервер отвечающий на запросы каждые 100ms
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

const util = require('util');
const mysleep = util.promisify(setTimeout);


const server = http.createServer(async (req, res) => {

	// делаем задержку вначале
	// 1000ms, чтоб было заметнее при тестировании
    await mysleep(1000);
	console.log (req.method + " " + req.url);
	
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
	res.end(req.method + " " + req.url);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// const requestHandler = async (req, res) => {

  // await new Promise (resolve => {
    // setTimeout(() => {
      // resolve();
    // }, 10000);
  // });

  // res.statusCode = 200;
  // res.end(req.method + " " + req.url);
  // // console.log (req.method + " " + req.url);

// }

// const server = http.createServer(requestHandler);

// server.listen(port, hostname, () => {
	// console.log(`Server running at http://${hostname}:${port}/`);
// });