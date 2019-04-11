var express = require('express')
// var cors = require('cors')
var app = express()

app.get('/', (req, res) => {
    res.send({ test01: 'test'});
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('server listen on port: ' + PORT);
});