

import * as R from 'ramda';
const greet = R.curry(function(greeting, name){
    return `${greeting} ${name}`;
});
console.log(
    greet('welcome', 'prem')
);