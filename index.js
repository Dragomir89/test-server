var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors());


app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send({ test01: 'test'});
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('server listen on port: ' + PORT);
});