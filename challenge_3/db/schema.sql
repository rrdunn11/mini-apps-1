DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE userinfo (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    address1 VARCHAR(255),
    address2 VARCHAR(255),
    address3 VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(255),
    zipCode INT,
    phoneNumber VARCHAR(255),
    creditCard VARCHAR(255),
    expiryDate VARCHAR(255),
    ccv INT,
    billingZipCode INT,
);

