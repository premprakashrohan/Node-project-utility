class MySingleton{
    private static instance: MySingleton;
    private constructor(){ }
    static getInstance(){
        if (!MySingleton.instance) {
            MySingleton.instance = new MySingleton();
        }
        return MySingleton.instance;
    }
    greet(): string {
        return "Hello from Singleton!"
    }
}
const mySingleton = MySingleton.getInstance();
const mySingleton1 = MySingleton.getInstance();
console.log(mySingleton === mySingleton1);

namespace myNameSpaceSingleton{
    export function greet(): string {
        return "Hello from namespace singleton!";
    }
}

let singlton1 = myNameSpaceSingleton;
let singlton2 = myNameSpaceSingleton;
console.log(singlton1 === singlton2);