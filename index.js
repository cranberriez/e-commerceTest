var express = require("express")

var app = express()

// Static Files
app.use(express.static('./static'))

// Routing
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

// Listen on port 8080
port = 8080
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

