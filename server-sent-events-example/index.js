const express = require("express");

const app = express();
app.use(express.static("public"));

var subscribers = [];

app.get("/timer", function (req, res) {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });
  subscribers.push(res);
});

function timer(count) {
  subscribers.forEach((sub) => {
    sub.write("data: " + count + "\n\n");
  });
  if (count) setTimeout(() => timer(count - 1), 1000);
}

timer(100);

app.listen(3000, () => console.log("Listening to port 3000"));
