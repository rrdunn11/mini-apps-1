DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;

USE checkout;

-- CREATE TABLE userinfo (
--     ID INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(255),
--     email VARCHAR(255),
--     password VARCHAR(255),
--     address1 VARCHAR(255),
--     address2 VARCHAR(255),
--     address3 VARCHAR(255),
--     city VARCHAR(255),
--     state VARCHAR(255),
--     zipCode VARCHAR(255),
--     phoneNumber VARCHAR(255),
--     creditCard VARCHAR(255),
--     expiryDate VARCHAR(255),
--     ccv VARCHAR(255),
--     billingZipCode VARCHAR(255)
-- );



CREATE TABLE user (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE address (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    address1 VARCHAR(255),
    address2 VARCHAR(255),
    address3 VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(255),
    zipCode VARCHAR(255),
    phoneNumber VARCHAR(255)
);


CREATE TABLE payment (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    creditCard VARCHAR(255),
    expiryDate VARCHAR(255),
    ccv VARCHAR(255),
    billingZipCode VARCHAR(255)
)