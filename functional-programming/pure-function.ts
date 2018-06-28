function myFunction (n: number, m: number): number {
    return n*m;
}
console.log(myFunction(2,3));

const people: Array<{ name: string, age: number }> = [
    { name: 'prem', age: 37 },
    { name: 'manisha', age: 24 },
    { name: 'krish', age: 4 },
    { name: 'ishi', age: 1.5 },
    { name: 'sahil', age: 35 },
    { name: 'kanta', age: 57 },
    { name: 'Binoy', age: 67 },
];
const names: string[] = people.map(p => p.name);
console.log(names);

const pentioners: string[] = people.filter(p => p.age>65).map(p => p.name);
console.log(pentioners);

//new copy
const data ={
    name: 'prem',
    age: 37
}
//Wrong way to assign directly to that variable
//data.name = 'Rohan';
//console.log(data);
// make a copy and assign data 
const newData = Object.assign({}, data, { name: 'Rohan' });
console.log(newData);

console.log(data);
