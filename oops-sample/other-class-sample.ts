class Person {
    name: string;
    constructor(name: string) {
        this.name = name;

    }
    greet(): void {
        console.log(this.name + " is my name !");
    }
}

class SuperHero extends Person {
    constructor(name: string){
        super(name);
    }
    greet(): void {
        console.log(this.name + " is my other name !");
    }
}

let prem = new Person("Prem");
prem.greet();
prem = new SuperHero('Rohan');
prem.greet();