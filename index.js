const crypto = require('crypto');

let operation = process.argv[2];

let num1 = Number(process.argv[3]);

let num2 = Number(process.argv[4]);
let result;
if(operation === 'add'){
    result = num1 + num2;
}
else if(operation === 'sub'){
    result = num1 - num2;
}
else if(operation === 'mult'){
    result = num1 * num2;
}
else if(operation === 'divide'){
    result = num1/num2;
}
else if(operation === 'sin'){
    result = Math.sin(num1);
}
else if(operation === 'cos'){
    result = Math.cos(num1);
}
else if(operation === 'tan'){
    result = Math.tan(num1);
}
else if(operation === 'random'){
    let length =  num1;
    result = crypto.randomBytes(length).toString('heresult');

}
else if(operation !== 'add' || operation !== 'sub' || operation !== 'mult' || operation !== 'divide' || operation !== 'sin' || operation !== 'cos' || operation !== 'tan' || operation !== 'random'){
    result = 'Invalid operation !'
}


console.log(result);