import * as R from 'ramda';
const arr =[1,2,3];
const replace = R.update(1, 15);
console.log(replace(arr));
console.log(R.adjust(R.multiply(10),2,arr));
console.log(R.join('|')(arr));

console.log(R.reverse(arr));
console.log(R.product(arr));

// cloningg,...
const obj1 = {
    name: 'krish',
    age: 4
}

const obj2 = {
    name: 'Ishi',
    age: 1
}

const newClonedObj = R.clone(obj1);
console.log(newClonedObj);
const updateToUpperCase = R.evolve({ name: R.toUpper });
console.log(updateToUpperCase(obj1));

console.log(R.eqProps('name',obj1, obj2));

console.log(R.has('name',obj1));

console.log(R.merge(obj1, obj2));

//console.log(R.mergeAll(obj1, obj2));

console.log(R.mergeDeepLeft(obj1, obj2));

console.log(R.mergeDeepRight(obj1, obj2));
