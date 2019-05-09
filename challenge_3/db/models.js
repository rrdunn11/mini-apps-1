const conn = require('./db.js');
const mysql = require('mysql');

var postData1 = (data, callback) => {
    // var sql = 'INSERT INTO userinfo (name, email, password, address1, address2, address3, city, state, zipCode, phoneNumber, creditCard, expiryDate, ccv, billingZipCode) VALUES (?)';
    // var formattedData = [[data.name, data.email, data.password, data.address1, data.address2, data.address3, data.city, data.state, data.zipCode, data.phoneNumber, data.creditCard, data.expiryDate, data.ccv, data.billingZipCode]];
    // var colNames = ['name', 'email', 'password', 'address1', 'address2', 'address3', 'city', 'state', 'zipCode', 'phoneNumber', 'creditCard', 'expiryDate', 'ccv', 'billingZipCode'];
    // var appCol = [];
    // var formattedData = [];
    // colNames.forEach((val) => {
    //     if (data[val]) {
    //         appCol.push(val);
    //         formattedData.push(data[val]);
    //     }
    // });
    // appCol = appCol.join(", ");
    // console.log(appCol, formattedData);
    var sql = 'INSERT INTO user (name, email, password) VALUES (?)';
    var formattedData = [[data.name, data.email, data.password]];
    conn.query(sql, formattedData, (err, result) => {
        if (err) {
            console.log(err);
            callback(err);
            return;
        }
        callback(null, result);
    })

}

var postData2 = (data, callback) => {
    var sql = 'INSERT INTO address (address1, address2, address3, city, state, zipCode, phoneNumber) VALUES (?)';
    var formattedData = [[data.address1, data.address2, data.address3, data.city, data.state, data.zipCode, data.phoneNumber]];
    conn.query(sql, formattedData, (err, result) => {
        if (err) {
            console.log(err);
            callback(err);
            return;
        }
        callback(null, result);
    })
}

var postData3 = (data, callback) => {
    var sql = 'INSERT INTO payment (creditCard, expiryDate, ccv, billingZipCode) VALUES (?)';
    var formattedData = [[data.creditCard, data.expiryDate, data.ccv, data.billingZipCode]];
    conn.query(sql, formattedData, (err, result) => {
        if (err) {
            console.log(err);
            callback(err);
            return;
        }
        callback(null, result);
    })
}


module.exports = {
    postData1,
    postData2,
    postData3
};