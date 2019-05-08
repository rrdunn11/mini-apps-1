const express = require('express');
const bodyParser = require('body-parser');
var port = 3000;

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Purchase Complete!')
});


app.listen(port, () => {
    console.log('Listening on port: ', port);
});

