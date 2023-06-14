import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
})
export class FormInputComponent {
  @Input() inputid = '';
  @Input() control = new FormControl();
  @Input() placeholder = '';
  @Input() label = '';
  @Input() type = '';
  @Input() form: any;
  @Input() errorMessege!: Record<string, string>;
  ngOnInit() {
    this.errorMessege = {
      required: this.inputid + ' is required',
      minLength : 'Minimum length required 2 characters',
      email : 'Email-ID is invalid',
      pattern: 'Please match the requested format.',
    };

    // console.log(this.form.errors)
  }
  getColor() {
    if (
      this.form.get(this.inputid).invalid &&
      this.form.get(this.inputid).touched &&
      this.form.get(this.inputid).dirty
    ) {
      return '#ec3131';
    } else {
      return '#6d6767';
    }
  }
}
