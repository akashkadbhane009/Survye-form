import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { City } from 'src/app/Interfaces/City.interface';
import { Store } from 'src/app/Interfaces/Store.interface';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.css'],
})
export class CityInputComponent {
  @Input() control = new FormControl();
  @Input() con = new FormControl();
  city!: City;
  store!: Store;
  @Input() errorMessege!: Record<string, string>;
  @Input() form: any;


  // @ViewChild('cityid', { static: false }) cityID: ElementRef;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.cityCall();
    this.onSelectCity('')

    this.errorMessege = {
      required: ' City is required',
    };
  }
  cityCall() {
    this.http
      .get<City>('https://th.vnnogile.in/admin/api/v1/City')
      .subscribe((res) => {
        this.city = res;
        console.log(res.data.data);
      });
  }

  onSelectCity(event :any ) {
    const cityID = event
    //console.log(event)
    this.http
      .get<Store>('https://th.vnnogile.in/server/api/v1/stores?', {
        params: new HttpParams().set('CityId', cityID),
      })
      .subscribe((res) => {
        this.store = res;
        //console.log(res);
      });
  }
  getColor() {
    if (
      this.form.get('city').invalid &&
      this.form.get('city').touched &&
      this.form.get('city').dirty
    ) {
      return '#ec3131';
    } else {
      return '#6d6767';
    }
  }
}
