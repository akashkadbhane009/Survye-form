import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent {
@Input() inputid = '';
@Input() control = new FormControl();
@Input() placeholder= '';
@Input() label='';
@Input() type='';
@Input() form :any;
@Input() errorMessege!: Record<string, string>
ngOnInit(){
  this.errorMessege ={
    required: this.inputid + ' is required',
    minlength : 'Minimum length required 2 characters',
    email:'Email-ID is invalid',
  };


  // console.log(this.form.errors)
}
}
