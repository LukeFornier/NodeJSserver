const http = require("http");
const port = 4001;

const server = http.createServer(function (req, res) {
  res.write("Hello World");
  res.end();
});

server.listen(port, function (error) {
  if (error) {
    console.log(`Something wrong ${error}`);
  } else {
    console.log(`Server is listening at ${port}`);
  }
});
