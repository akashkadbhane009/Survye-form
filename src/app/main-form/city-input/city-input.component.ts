import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input } from '@angular/core';
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
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get<City>('https://th.vnnogile.in/admin/api/v1/City')
      .subscribe((res) => {
        this.city = res;
        // console.log(res.data.data);
      });

    this.errorMessege = {
      required: ' City is required',
    };
  }

  onSelectCity() {
    const cityID = this.form.controls.city.value;
    this.http
      .get<Store>('https://th.vnnogile.in/server/api/v1/stores?', {
        params: new HttpParams().set('CityId', cityID),
      })
      .subscribe((res) => {
        this.store = res;
        // console.log(res.data);
      });
  }
}
