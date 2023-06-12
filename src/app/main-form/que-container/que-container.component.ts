import { Component, OnInit } from '@angular/core';
import { Questions } from 'src/app/Interfaces/Questions.interface';
import { QuestionsService } from 'src/app/service/questions.service';

@Component({
  selector: 'app-que-container',
  templateUrl: './que-container.component.html',
  styleUrls: ['./que-container.component.css'],
})
export class QueContainerComponent implements OnInit{
  Q! : Questions;
  arr! : any[]
  constructor(private que: QuestionsService) {}

  ngOnInit(){
    this.que.getQuestons().subscribe(res=>{
      this.Q = res;
      this.arr = this.Q.data.data.sort((a,b) => a.sequence > b.sequence ? 1 : -1);
      console.log(this.arr)
    })
  }
}
