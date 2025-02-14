const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((request, response) => {
  if (request.url === "/" || request.url === "/index.html") {
    const indexPage = fs.readFileSync("./index.html", "utf-8");
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(indexPage);
  } 
  else if (request.url === "/images.html") {
    const imagesPage = fs.readFileSync("./images.html", "utf-8");
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(imagesPage);
  }
  else if (request.url === "/image1") {
    const image1 = fs.readFileSync("./images/image1.jpg");
    response.writeHead(200, { "Content-Type": "image/jpeg" });
    response.end(image1);
  }
  else if (request.url === "/image2") {
    const image1 = fs.readFileSync("./images/image2.jpg");
    response.writeHead(200, { "Content-Type": "image/jpeg" });
    response.end(image1);
  }
  else if (request.url === "/image3") {
    const image1 = fs.readFileSync("./images/image3.jpg");
    response.writeHead(200, { "Content-Type": "image/jpeg" });
    response.end(image1);
  }
});

const port = 8080;
server.listen(port, () => {
  console.log("Server running");
});
