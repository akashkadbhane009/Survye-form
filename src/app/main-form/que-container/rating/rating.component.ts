import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() rating: number;
  @Input() f:any
  @Input() index:any


  onRating(i : number){
    this.rating = ++i;
    this.f.get('survey_response').controls[this.index].controls.res.setValue(this.rating.toString())

  }
}
