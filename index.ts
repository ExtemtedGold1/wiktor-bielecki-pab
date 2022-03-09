import { request } from "http";

const express = require('express')  
const app = express()  
app.get('/calcuator', function (req, res) {  
  const num1 = req.query.num1;
  const num2 = req.query.num2;
  const operation = req.query.operation;

  switch(operation)
  {
      case 'dodaj':
          const result = num1 + num2;
          console.log(result);
          break
      case 'odejmij':
        const result2 = num1 - num2;;
        console.log(result2);
        break
      case 'pomnoz':
        const result3 = num1 * num2;;
        console.log(result3);
        break
      case 'podziel':
        const result4 = num1 / num2;
        console.log(result4);
        break
      default:
          console.log("Error");
  }
})  
app.listen(3000)  


