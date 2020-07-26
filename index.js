const http = require("http");

const server = http.createServer((req, res) => {
  const IT = "WeJapa Internship";
  if (req.method === "GET") {
    res.end(`Hello World, this is ${IT} `);
  } else if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
      // convert Buffer to string
      const name = JSON.stringify(body);
    });
    req.on("end", () => {
      const text = body.split(":")[1].slice(0, 9);
      res.end(`Hello, ${text} this is ${IT}`);
    });
  }
  // console.log(req.method);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("App running on port 8000");
});
