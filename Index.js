var fs = require("fs");
var http = require("http");

http
  .createServer(function (req, res) {
    fs.readFile("navbar.html", (err, data) => {
      if (err) throw err;

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
    });
    res.writeHead(200, { "Content-Type": "text/html" });
    var url = req.url;

    if (url === "/") {
      fs.readFile("Home.html", function (err, data) {
        res.end(data);
      });
    } else if (url === "/Profil") {
      fs.readFile("Profil.html", function (err, data) {
        res.end(data);
      });
    } else if (url === "/blog") {
      fs.readFile("blog.html", function (err, data) {
        res.end(data);
      });
    } else if (url === "/perpus") {
      fs.readFile("sample.pdf", function (err, data) {
        res.end(data);
      });
    } else {
      res.write("<center>Welcome to main</center>");
    }
  })
  .listen(3030, function () {
    console.log("server start at http://localhost:3030");
  });
