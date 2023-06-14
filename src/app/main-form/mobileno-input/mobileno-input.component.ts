import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mobileno-input',
  templateUrl: './mobileno-input.component.html',
  styleUrls: ['./mobileno-input.component.css'],
})
export class MobilenoInputComponent {
  @Input() inputid = '';
  @Input() form: any;
  @Input() control = new FormControl();
  @Input() errorMessege!: Record<string, string>;
  ngOnInit() {
    this.errorMessege = {
      required: 'Mobile Number is required',
      pattern: ' Mobile Number is invalid.',
    };
    console.log(this.form.controls);

    // console.log(this.form.errors)
  }
  getTop() {
    if (
      this.form.get(this.inputid).invalid &&
      this.form.get(this.inputid).touched &&
      this.form.get(this.inputid).dirty
    ) {
      return '38%';
    } else {
      return '50%';
    }
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
