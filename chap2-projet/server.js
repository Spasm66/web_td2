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
  else if (request.url === "/image1.html") {
    const image1 = fs.readFileSync("./image1.html");
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(image1);
  }
  else if (request.url === "/image2.html") {
    const image2 = fs.readFileSync("./image2.html");
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(image2);
  }
  else if (request.url === "/image3.html") {
    const image3 = fs.readFileSync("./image3.html");
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(image3);
  }
  else if (request.url === "/image4.html") {
    const image4 = fs.readFileSync("./image4.html");
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(image4);
  }
  else if (request.url === "/image5.html") {
    const image5 = fs.readFileSync("./image5.html");
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(image5);
  }
  else if (request.url === "/image1.jpg") {
    const image1 = fs.readFileSync("./images/image1.jpg");
    response.writeHead(200, { "Content-Type": "image/jpg" });
    response.end(image1);
  }
  else if (request.url === "/image2.jpg") {
    const image2 = fs.readFileSync("./images/image2.jpg");
    response.writeHead(200, { "Content-Type": "image/jpg" });
    response.end(image2);
  }
  else if (request.url === "/image3.jpg") {
    const image3 = fs.readFileSync("./images/image3.jpg");
    response.writeHead(200, { "Content-Type": "image/jpg" });
    response.end(image3);
  }
  else if (request.url === "/image4.jpg") {
    const image4 = fs.readFileSync("./images/image4.jpg");
    response.writeHead(200, { "Content-Type": "image/jpg" });
    response.end(image4);
  }
  else if (request.url === "/image5.jpg") {
    const image5 = fs.readFileSync("./images/image5.jpg");
    response.writeHead(200, { "Content-Type": "image/jpg" });
    response.end(image5);
  }
  else if (request.url === "/image1_small.jpg") {
    const image1 = fs.readFileSync("./images/image1_small.jpg");
    response.writeHead(200, { "Content-Type": "image/jpg" });
    response.end(image1);
  }
  else if (request.url === "/image2_small.jpg") {
    const image2 = fs.readFileSync("./images/image2_small.jpg");
    response.writeHead(200, { "Content-Type": "image/jpg" });
    response.end(image2);
  }
  else if (request.url === "/image3_small.jpg") {
    const image3 = fs.readFileSync("./images/image3_small.jpg");
    response.writeHead(200, { "Content-Type": "image/jpg" });
    response.end(image3);
  }
  else if (request.url === "/image4_small.jpg") {
    const image4 = fs.readFileSync("./images/image4_small.jpg");
    response.writeHead(200, { "Content-Type": "image/jpg" });
    response.end(image4);
  }
  else if (request.url === "/image5_small.jpg") {
    const image5 = fs.readFileSync("./images/image5_small.jpg");
    response.writeHead(200, { "Content-Type": "image/jpg" });
    response.end(image5);
  }
  else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("<h1>404 Not Found</h1>");
  }
});

const port = 8080;
server.listen(port, () => {
  console.log("Server running");
});
