export interface ISubject {
    subscribe: Function;
    unsubscribe: Function;
    notify: Function;
}

export class Subject implements ISubject {
    subscribers = [];
    subscribe(observer) {
        this.subscribers.push(observer);
    }
    unsubscribe(observer){
        this.subscribers = this.subscribers.filter(subscriber => subscriber != observer);
    }
    notify (data){
        this.subscribers.map(subscriber => new subscriber(data));
    }
}

export class Observer {
    constructor(data) {
        console.log(`Observer -- Data recived from subject: ${data}`);
    }
}
export class Observer1 {
    constructor(data) {
        console.log(`Observer1 -- Data recived from subject: ${data}`);
    }
}
export class Observer2 {
    constructor(data) {
        console.log(`Observer2 -- Data recived from subject: ${data}`);
    }
}

//Use
const mySubject = new Subject();
mySubject.subscribe(Observer);
mySubject.subscribe(Observer1);
mySubject.subscribe(Observer2);
mySubject.notify('Hello');
mySubject.unsubscribe(Observer);
mySubject.notify('Re Hi');

