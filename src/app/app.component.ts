import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Survye-Form';
  form: any;

  ngOnInit(): void {

  }
  formOutHandler(event: any) {
    this.form = event;
    //console.log(this.form)
    this.form.valueChanges.subscribe((res) => {
      console.log(res);
    });
  }
}
