var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var coords = [];

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);

io.on('connection', function (socket) {
   for(var i in coords) {
     io.sockets.emit("show drawing", coords[i]);
   }
   socket.on("send drawing", function (data) {
       coords.push(data);
       io.sockets.emit("show drawing", data);
   });
});
