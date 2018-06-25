class Person2 {
    name: string;
    constructor(name: string) {
        this.name = name;

    }
    greet(): void {
        console.log(this.name + " is my name !");
    }
}

class SuperHero extends Person2 {
    constructor(name: string){
        super(name);
    }
    greet(): void {
        console.log(this.name + " is my other name !");
    }
};

let prem2 = new Person2("Prem");
prem2.greet();
let prem1 = new SuperHero('Rohan');
prem1.greet();