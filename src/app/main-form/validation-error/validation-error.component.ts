import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.css'],
})
export class ValidationErrorComponent implements OnInit {
  @Input() inputId!: string;
  @Input() form :any
  @Input() errorMessege!: Record<string, string>
  ngOnInit(){
    this.errorMessege ={
      required: this.inputId + ' is required',
      email: this.inputId + ' is invalid',
    };
  }
}
