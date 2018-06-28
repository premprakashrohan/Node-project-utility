// public, private, protected, readonly

class AAA{
    name: string;
    public x: string;
    protected y: string;
    private z: string;
    readonly a: string;
    constructor(name: string, x: string,y: string, z: string,a: string ){
        this.name = name;
        this.x = x;
        this.y = y;
        this.z = z;
        this.a = a;
    }
    greet(): void {
        console.log('Hello ' + this.name + " x->" + this.x + " y->" + this.y + " z->" + this.z + ' a-> '+this.a);
        this.name = 'Prem1';
        this.x =  'public2';
        this.y = 'protected2';
        this.z =  'private2';
        //Not Permitted 
        //this.a =  'readonly2';
        console.log('Try to update props from same class........');
        console.log('Hello ' + this.name + " x->" + this.x + " y->" + this.y + " z->" + this.z + ' a-> ' + this.a);
    }
}
const pv = new AAA('Prem','public','protected','private','readonly');
pv.greet();
pv.name = 'Rohan';
pv.x='public1';
//Not Permited
//pv.y ='protected'; 
//pv.z ='private';
//pv.a = 'readonly';
console.log('Try to update props from instance of class........');
pv.greet();

class SuperHeroX extends AAA {
    constructor(name: string, x: string, y: string, z: string, a: string ) {
        super(name, x, y, z, a);
    }
    greet(): void {
        console.log('Try to Access from derived class......');
        console.log('Hello ' + this.name + " x->" + this.x + " y->" + this.y + 
        //" z->" + this.z 
         + ' a-> ' + this.a);
    }
};

const pv1 = new SuperHeroX('Prem', 'public', 'protected', 'private', 'readonly');
pv.greet();
pv.name = 'Prakash';
pv.x = 'public3';
//Not Permited
//pv.y ='protected'; 
//pv.z ='private';
//pv.a = 'readonly';
console.log('Try to update props from instance of class........');
pv.greet();