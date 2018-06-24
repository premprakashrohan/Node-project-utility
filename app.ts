interface IPerson {
    name: string;
    age: number;
    hobby: string[];
}

const prem: IPerson = {
    age: 37,
    hobby: ["Hardware", "Software"],
    name: "Prem",
};
let cons = Console;
cons.prototype.log(prem);
