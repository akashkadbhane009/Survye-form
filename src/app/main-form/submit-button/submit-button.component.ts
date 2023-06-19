import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Feedback } from 'src/app/Interfaces/Feedback.interface';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css'],
})
export class SubmitButtonComponent {
  @Input() form: any;
  isFormInvalid = false;
  constructor(private http: HttpClient) {}
  onClick() {
    console.log(this.form.value);
    console.log(this.form.status);

    if (this.form.status === 'INVALID') {
      this.isFormInvalid = true;
      if (this.isFormInvalid) {
        setTimeout(() => {
          this.isFormInvalid = false; // Set errorFlag to false after 3 seconds
        }, 3000);
      }
    } else {
      this.http.post<Feedback>(
        'https://th.vnnogile.in/survey/api/v1/Response',
        {
          SurveyId: '0a41b81f-ce9c-4204-aca8-5991d909f735',
          Feedback_date: this.form.value.feedbackDate,
          Date_of_visit: this.form.value.dateOfVisit,
          store_location: this.form.value.store,
          city: this.form.value.city,
          survey_response: [
            {
              QuestionId: this.form.value.survey_response[0].qId ,
              data: this.form.value.survey_response[0].data,
              type: this.form.value.survey_response[0].type,
              Response: this.form.value.survey_response[0].res,
            },
            {
              QuestionId: this.form.value.survey_response[1].qId ,
              data: this.form.value.survey_response[1].data,
              type: this.form.value.survey_response[1].type,
              Response: this.form.value.survey_response[1].res,
            },
            {
              QuestionId: this.form.value.survey_response[2].qId ,
              data: this.form.value.survey_response[2].data,
              type: this.form.value.survey_response[2].type,
              Response: this.form.value.survey_response[2].res,
            },
            {
              QuestionId: this.form.value.survey_response[3].qId ,
              data: this.form.value.survey_response[3].data,
              type: this.form.value.survey_response[3].type,
              Response: this.form.value.survey_response[3].res,
            },
            {
              QuestionId: this.form.value.survey_response[4].qId ,
              data: this.form.value.survey_response[4].data,
              type: this.form.value.survey_response[4].type,
              Response: this.form.value.survey_response[4].res,
            },
            {
              QuestionId: this.form.value.survey_response[5].qId ,
              data: this.form.value.survey_response[5].data,
              type: this.form.value.survey_response[5].type,
              Response: this.form.value.survey_response[5].res,
            },
            {
              QuestionId: this.form.value.survey_response[6].qId ,
              data: this.form.value.survey_response[6].data,
              type: this.form.value.survey_response[6].type,
              Response: this.form.value.survey_response[6].res,
            },
            {
              QuestionId: this.form.value.survey_response[7].qId ,
              data: this.form.value.survey_response[7].data,
              type: this.form.value.survey_response[7].type,
              Response: this.form.value.survey_response[7].res,
            },
          ],
          Offer_Communication: this.form.value.offCom,
          email: this.form.value.Email,
          fullname: this.form.value.Name,
        }
      ).subscribe();
    }
  }
}
