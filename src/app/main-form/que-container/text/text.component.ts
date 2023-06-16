import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/Interfaces/Products.interface';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
})
export class TextComponent implements OnInit {
  @Input() ih: string;
  @Input() cat: string;
  @Input() options: any;
  @Input() f: any;
  @Input() index: any;
  event: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.onProductCall();
  }

  onProductCall() {
    this.f.valueChanges.subscribe((res) => {
      this.event = res.survey_response[this.index].res;
      //console.log(res.survey_response[this.index].res)
      this.http
        .get<Products>('https://th.vnnogile.in/server/api/v1/products', {
          params: new HttpParams()
            .set('srcterm', this.event)
            .set('category', this.cat)
            .set('attributes', 'product_name'),
        })
        .subscribe((res) => {
          this.options = res;
          // console.log(res);
        });
    });
  }
}
