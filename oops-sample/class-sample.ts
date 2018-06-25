class Person1 {
    greet(name: string): void {
        console.log('Hello '+name + " !");
    }
}

class SuperHero1 extends Person1 {
    hasCape(flag: boolean): void {
        if(flag){
            console.log('I have a cape!');
        } else {
            console.log('No capes for me...');
        }
    }
}

const spiderman = new SuperHero1();
spiderman.greet('Prem Prakash Rohan');
spiderman.hasCape(false);