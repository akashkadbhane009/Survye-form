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
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.onProductCall();
  }

  onProductCall() {
    let event = ''
    // set event from form in put after form array binding to que conatiner
    this.http
      .get<Products>('https://th.vnnogile.in/server/api/v1/products', {
        params: new HttpParams()
          .set('srcterm', event)
          .set('category', this.cat)
          .set('attributes', 'product_name'),
      })
      .subscribe((res) => {
        this.options = res;
        // console.log(res);
      });

  }
}
