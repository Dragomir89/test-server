var express = require('express')
// var cors = require('cors')
var app = express()


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send({ test01: 'test'});
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('server listen on port: ' + PORT);
});