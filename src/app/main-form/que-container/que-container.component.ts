import { Component, Input, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Questions } from 'src/app/Interfaces/Questions.interface';


@Component({
  selector: 'app-que-container',
  templateUrl: './que-container.component.html',
  styleUrls: ['./que-container.component.css'],
})
export class QueContainerComponent implements OnInit{
  @Input() form : any
  @Input() control = new FormArray([]);
  Q! : Questions;
  @Input()ar! : any
  @Input()index! : any
  ctr : any
  constructor() {}

  ngOnInit(){
    this.ctr=this.form.get('survey_response').controls[this.index].controls;
    // console.log(this.form.get('survey_response').controls[this.index].controls)

    this.form.get('survey_response').controls[this.index].controls.qId.setValue(this.ar.id)
    this.form.get('survey_response').controls[this.index].controls.type.setValue(this.ar.type)
    this.form.get('survey_response').controls[this.index].controls.data.setValue(this.ar.question_data)
  }
}
