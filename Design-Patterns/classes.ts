export interface IWarrior {
    fight: Function;
}

export class Warrior implements IWarrior {
    fight(weopon) {
        console.log(`This warrior fight with ${weopon}`);
    }
}

export interface IHero {
    combat: Function;
}

export class Hero implements IHero {
    combat(weopon) {
        console.log(`This hero uses ${weopon} in combat`);
    }
}