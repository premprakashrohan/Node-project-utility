const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}
const greeting = greet('Hello');
greeting('Prem');
greeting('Prakash');
greeting('Rohan');

const welcome = greet('Welcome')('Prem');