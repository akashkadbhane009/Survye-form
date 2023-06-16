import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Questions } from '../Interfaces/Questions.interface';
import { QuestionsService } from '../service/questions.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css'],
})
export class MainFormComponent implements OnInit {
  @Input() value = '';
  @Input() max: any = '';
  date: any;
  from!: any;
  Q! : Questions;
  arr! : any[]

  constructor(private que: QuestionsService) {}
  ngOnInit(): void {
    this.date = new Date().toISOString().substr(0, 10);
    this.value = this.date;
    this.max = parseInt(this.date);

    this.from = new FormGroup({
      Name: new FormControl('', [
        Validators.minLength(2),
        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z]+'),
      ]),
      Email: new FormControl('', [Validators.email]),
      dateOfVisit: new FormControl(this.value, [
        Validators.required,
        Validators.max(this.max),
      ]),
      feedbackDate :new FormControl(this.value),
      city: new FormControl('', [Validators.required]),
      store: new FormControl('', [Validators.required]),
      mobileNo: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$'),
      ]),
      otp: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{4}$'),
      ]),
      offCom : new FormControl('true'),
      survey_response: new FormArray([
        (new FormGroup({
          qId: new FormControl(''),
          data: new FormControl(''),
          type: new FormControl(''),
          res: new FormControl(''),
        })),
        (new FormGroup({
          qId: new FormControl(''),
          data: new FormControl(''),
          type: new FormControl(''),
          res: new FormControl(''),
        })),
        (new FormGroup({
          qId: new FormControl(''),
          data: new FormControl(''),
          type: new FormControl(''),
          res: new FormControl(''),
        })),
        (new FormGroup({
          qId: new FormControl(''),
          data: new FormControl(''),
          type: new FormControl(''),
          res: new FormControl(''),
        })),
        (new FormGroup({
          qId: new FormControl(''),
          data: new FormControl(''),
          type: new FormControl(''),
          res: new FormControl(''),
        })),
        (new FormGroup({
          qId: new FormControl(''),
          data: new FormControl(''),
          type: new FormControl(''),
          res: new FormControl(''),
        })),
        (new FormGroup({
          qId: new FormControl(''),
          data: new FormControl(''),
          type: new FormControl(''),
          res: new FormControl(''),
        })),
        (new FormGroup({
          qId: new FormControl(''),
          data: new FormControl(''),
          type: new FormControl(''),
          res: new FormControl(''),
        })),

      ]),
    });
    this.from.valueChanges.subscribe((res) => {
     // console.log(res.survey_response);
    });

    this.que.getQuestons().subscribe(res=>{
      this.Q = res;
      this.arr = this.Q.data.data.sort((a,b) => a.sequence > b.sequence ? 1 : -1);
     // console.log(this.arr)
    })
  }
}
