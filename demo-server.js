let http = require('http'),
    express = require('express'),
    app = express(),
    path = require('path'),
    index = path.resolve(__dirname, './index.html')

app.use('/static', express.static('static'))
app.use('/dist', express.static('build'))

app.get('/', function(req, res) {
    res.sendFile(index)
})

//  启动服务器
let server = http.createServer(app);
server.listen(80, function() {
    console.log("Listening on %j", server.address())
});


