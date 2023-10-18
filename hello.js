//console.log("hello pavan");
// Import the 'http' module, which provides functionality for creating HTTP servers.
const http = require('http');

// Define the host and port where the server will listen.
const hostname = '127.0.0.1'; // This means it will only listen on the localhost.
const port = 3000; // You can choose any available port.

// Create an HTTP server instance.
const server = http.createServer((req, res) => {
  // Set the response header with a status code of 200 (OK) and content type of plain text.
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write a response to the client.
  res.end('Hello, World!\n');
});

// Start the server and make it listen on the specified host and port.
server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
