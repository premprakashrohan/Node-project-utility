interface IPerson {
    name: string;
}
interface IStudent extends IPerson {
    class: string;
}
let user = <IStudent>{};
user.name = "Prem";
user.class = "maths";
