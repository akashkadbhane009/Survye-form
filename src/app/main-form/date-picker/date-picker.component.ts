import { Component, Input} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
  @Input() control = new FormControl()
  @Input() form:any
  @Input() errorMessege!: Record<string, string>
ngOnInit(){
  this.errorMessege ={
    required:  ' Date is required',
  };

}
}
