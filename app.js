const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html')
});
app.get('/registro', function (req, res) {
    res.sendFile(__dirname + '/views/formulario.html')
});
app.get('/login', function (req, res) {
    res.sendFile(__dirname + '/views/login.html')
});

app.listen(3000, function () {
    console.log('Para ver el sitio ingresa a http://localhost:3000')
});

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/' + req.url)
});