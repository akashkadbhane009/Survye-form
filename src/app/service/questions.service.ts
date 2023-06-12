import { Injectable } from '@angular/core';
import { Questions } from '../Interfaces/Questions.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http : HttpClient) { }

  

  getQuestons(){
    return this.http.get<Questions>('https://th.vnnogile.in/survey/api/v1/Questions');

  }
}
