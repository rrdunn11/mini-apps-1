const express = require('express');
const bodyParser = require('body-parser');
const models = require('./db/models.js');
var port = 3000;

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/', (req, res) => {
    console.log(req.body);
    models.postData1(req.body, (err, result1) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result1);
        models.postData2(req.body, (err, result2) => {
            if (err) {
                console.log(err);
                return
            }
            models.postData3(req.body, (err, result3) => {
                if(err) {
                    console.log(err);
                    return;
                }
                res.send(`Purchase #${result1.insertId} complete!`)
            });
        });
        // res.redirect('/');
    });
});

app.get('/get', () => {
    console.log('request received');
});


app.listen(port, () => {
    console.log('Listening on port: ', port);
});

