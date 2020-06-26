import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Key } from 'protractor';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  profileForm = new FormGroup({
    name:new FormControl(''),
    age :new FormControl(''),
  })

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  
  constructor() { }

  ngOnInit() {
  }
  setDetails() {
    this.profileForm.setValue({name:'kavindu', age:'27'})
  }

}
