

//import { resolve, reject } from "q";

// Has three state fullfilled, rejected, or pending
//import { fs }

const promise = new Promise((resolve,reject) => {
    resolve('hello');
});
promise.then(res => console.log(res));



function test(value) {
    return new Promise((resolve, reject) => {
        resolve(value);
    });
}
test(1).then(res => {
    let number = Number(res);
    console.log(number);
});
test(1).then(res => {
    let number = Number(res);
    return test(number+1);
}).then(res => console.log(res));

//tsc promises-example.ts --target es6 && node promises-example.js


const fs = require('fs');
//import * as fs from 'fs';
function readDir(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path,(error, result) => {
            if(error){
                reject(error);
            }else{
                resolve(result);
            }
        });
        // Handeling error
    }).catch((error) => {
        console.error(error, 'Promise error');
        
    });
}

//readDir('/tmp').then(files => console.log(files));

const catchpromise = new Promise((resolve, reject) => {
    reject('failed......');
});
promise.then(res => console.log(res)).catch(error => console.error(error));



