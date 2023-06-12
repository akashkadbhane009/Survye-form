import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from 'src/app/Interfaces/Store.interface';

@Component({
  selector: 'app-store-inpute',
  templateUrl: './store-inpute.component.html',
  styleUrls: ['./store-inpute.component.css']
})
export class StoreInputeComponent {
@Input() control = new FormControl()
@Input() F! :any;
@Input() Store! : Store
@Input() errorMessege!: Record<string, string>;

  ngOnInit(){
    this.errorMessege = {
      required: ' Store is required',
    };
  }

}
