import { IWarrior, Hero, Warrior} from './classes';

export class HeroAdapter implements IWarrior {
    type: string;
    name: string;
    constructor (type,name){
        this.type = type;
        this.name = name;
    }
    fight() {
        if(this.type === 'Hero'){
            const hero = new Hero();
            hero.combat('sword');
        } else if (this.type === 'Warrior') {
            const warrior = new Warrior();
            warrior.fight('axe');
        }else{
            throw new Error('Please enter Hero or Warrior');
        }
    }
}
const myhero = new HeroAdapter('Hero', ' Prem, the nomed');
myhero.fight(); 
const myWarrior = 
new HeroAdapter('Warrior', ' Rohan , is angry');
myWarrior.fight();