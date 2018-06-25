class Person {
    greet(name: string): void {
        console.log('Hello '+name + " !");
    }
}

class SuperHero extends Person {
    hasCape(flag: boolean): void {
        if(flag){
            console.log('I have a cape!');
        } else {
            console.log('No capes for me...');
        }
    }
}

const spiderman = new SuperHero();
spiderman.greet('Prem Prakash Rohan');
spiderman.hasCape(false);