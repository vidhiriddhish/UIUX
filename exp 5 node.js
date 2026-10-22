npm init -y
npm install express 


const express = require("express");
const app = express();

// Callback
setTimeout(() => {
    console.log("Callback executed");
}, 1000);

// Event loop demonstration
console.log("Start");
setTimeout(() => console.log("Timer"), 0);
console.log("End");

// Express app
app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});



node exp5.js
