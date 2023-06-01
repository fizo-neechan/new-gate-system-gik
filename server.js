const http = require('http');
const api = require('./api/api');
const app = require("./app");

const port = process.env.PORT || 3000;
// const server = http.createServer(api);


// server.listen(port, () => {
//     console.log("api running");
// });

app.listen(port, () => {
    console.log(`app also running on port=${port}`);
})