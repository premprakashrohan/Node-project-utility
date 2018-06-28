interface ImyFn {
    (n: number, m: number): number;
}
let myCalculator: ImyFn;
myCalculator = function(n: number, m: number) {
    return n + m;
};

type ImyFn1 = (n: number, m: number) => number;

let myCalculator1: ImyFn1;
myCalculator1 = function(n: number, m: number) {
    return n + m;
};

