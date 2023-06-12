import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  @Input() value ='';
  @Input() max : any = '';
  date: any
  from! : any
  ngOnInit(): void {
    this.date =new Date().toISOString().substr(0, 10);
    this.value = this.date;
    this.max = parseInt(this.date) ;

    this.from = new FormGroup({
      Name : new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      email: new FormControl('',[Validators.email]),
      dateOfVisit : new FormControl(this.value, [Validators.required,Validators.max(this.max)]),
      city : new FormControl('',[Validators.required]),
      store : new FormControl('',[Validators.required])
    })
    console.log(this.from.controls)
  }
  // constructor(){
  //   // this.from.controls.subscribe((res: FormGroup)=>{
  //   //   console.log(res)
  //   })
  // }






}
