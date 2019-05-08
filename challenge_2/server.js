const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('./client'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    let flattenedData = flattenObj(JSON.parse(req.body.input));
    res.setHeader('Content-disposition', 'attachment; filename=flattenedData.csv');
    res.set('Content-Type', 'text/csv');
    res.status(200).send(flattenedData);
});


var flattenObj = (body) => {
    var output = "";
    var keys = Object.keys(body);
    keys.pop();
    output += keys.join(",") +'\n';
    var traverseChildren = (parent) => {
        if (parent === null) {
            return;
        }
        var person = [parent.firstName, parent.lastName, parent.county, parent.city, parent.role, parent.sales];
        output += person.join(",") + '\n';
        for (let i = 0; i < parent.children.length; i++) {
            let child = parent.children[i];
            traverseChildren(child);
        }
    };
    traverseChildren(body);
    return output;
};

app.listen(port, () => console.log(`App listening on port ${port}!`))