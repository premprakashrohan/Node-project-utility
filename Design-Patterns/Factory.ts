export class Adult {
    private age: number;
    constructor (age: number){
        this.age = age;
    }
    getStatus(): void {
        console.log('Adult!..');
    }
}

export class Pensioner {
    private age: number;
    constructor(age: number) {
        this.age = age;
    }
    getStatus(): void {
        console.log('Pensioner!..');
    }
}

export class PersonFactory{
    public static createPerson(age: number){
        if(age <65){
            return new Adult(age);
        }else{
            return new Pensioner(age);
        }
    }
}

const person1 = PersonFactory.createPerson(22);




const peoples = [18,44,66,88,99].map(age  => PersonFactory.createPerson(age));
peoples.map(p => p.getStatus());