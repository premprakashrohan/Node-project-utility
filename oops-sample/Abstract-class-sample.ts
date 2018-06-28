abstract class Person3 {
    name;
    constructor(name: string) {
        this.name = name;
    }
    abstract greet(): void;
}
//Below code will not work 
//let p = new Person('Prem');

class SuperHero2 extends Person3{
    constructor(name: string){
        super(name);
    }
    greet(): void {
        console.log("Hello i am "+this.name)
    }
}

let p = new SuperHero2('Prem');
p.greet();