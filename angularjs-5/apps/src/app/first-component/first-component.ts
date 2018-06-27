import { Component} from '@angular/core';

@Component({
    selector: 'app-first-component',
    template: `<h1>Hello, this is my first template</h1>
    <p>This is cool!</p>`,
    styles: ['h1 {color:red;}']
})
export class FirstComponent {

}
