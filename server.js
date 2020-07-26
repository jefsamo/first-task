// var http = require("http");
// var querystring = require("querystring");

// var server = http.createServer().listen(3000);

// server.on("request", function (req, res) {
//   if (req.method == "POST") {
//     var body = "";
//   }

//   req.on("data", function (data) {
//     body += data;
//   });

//   req.on("end", function () {
//     var post = querystring.parse(body);
//     console.log(post);
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello World\n");
//   });
// });

// console.log("Listening on port 3000");

var http = require("http");
var querystring = require("querystring");

var postData = querystring.stringify({
  msg: "hello world",
});

var options = {
  hostname: "localhost",
  port: 3000,
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": postData.length,
  },
};

var req = http.request(options, function (res) {
  console.log("STATUS:", res.statusCode);
  console.log("HEADERS:", JSON.stringify(res.headers));

  res.setEncoding("utf8");

  res.on("data", function (chunk) {
    console.log("BODY:", chunk);
  });

  res.on("end", function () {
    console.log("No more data in response.");
  });
});

req.on("error", function (e) {
  console.log("Problem with request:", e.message);
});

req.write(postData);
req.end();
