const http = require("http");
const fs = require("fs");
const path = require("path");

const mimeTypes = {
  ".html": "text/html",
  ".jpg": "image/jpg",
};

const filePaths = {
  "/": "index.html",
  "/index.html": "index.html",
  "/images.html": "images.html",
  "/image1.html": "image1.html",
  "/image2.html": "image2.html",
  "/image3.html": "image3.html",
  "/image4.html": "image4.html",
  "/image5.html": "image5.html",
  "/image1.jpg": "images/image1.jpg",
  "/image2.jpg": "images/image2.jpg",
  "/image3.jpg": "images/image3.jpg",
  "/image4.jpg": "images/image4.jpg",
  "/image5.jpg": "images/image5.jpg",
  "/image1_small.jpg": "images/image1_small.jpg",
  "/image2_small.jpg": "images/image2_small.jpg",
  "/image3_small.jpg": "images/image3_small.jpg",
  "/image4_small.jpg": "images/image4_small.jpg",
  "/image5_small.jpg": "images/image5_small.jpg",
};

const server = http.createServer((request, response) => {
  const filePath = filePaths[request.url];

  if (filePath) {
    const fileExtension = path.extname(filePath);
    const contentType = mimeTypes[fileExtension] || "text/html";

    fs.readFile(filePath, (err, data) => {
      if (err) {
        response.writeHead(500, { "Content-Type": "text/html" });
        response.end("<h1>500 Internal Server Error</h1>");
      } else {
        response.writeHead(200, { "Content-Type": contentType });
        response.end(data);
      }
    });
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("<h1>404 Not Found</h1>");
  }
});

const port = 8080;
server.listen(port, () => {
  console.log("Server running");
});