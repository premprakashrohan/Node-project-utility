import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  form: FormGroup;
  name = new FormControl('', Validators.required);
  price = ['', Validators.required];
  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: this.name,
      price: this.price
    });
   }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.form.value);
  }

}
