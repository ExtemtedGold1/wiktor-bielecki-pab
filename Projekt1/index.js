"use strict";
exports.__esModule = true;
var express = require('express');
var app = express();
app.get('/calcuator', function (req, res) {
    var num1 = req.query.num1;
    var num2 = req.query.num2;
    var operation = req.query.operation;
    switch (operation) {
        case 'dodaj':
            var result = num1 + num2;
            ;
            console.log(result);
            break;
        case 'odejmij':
            var result2 = num1 - num2;
            ;
            console.log(result2);
            break;
        case 'pomnoz':
            var result3 = num1 * num2;
            ;
            console.log(result3);
            break;
        case 'podziel':
            var result4 = num1 / num2;
            ;
            console.log(result4);
            break;
        default:
            console.log("Error");
    }
});
app.listen(3000);
