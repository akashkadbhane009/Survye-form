import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mobileno-input',
  templateUrl: './mobileno-input.component.html',
  styleUrls: ['./mobileno-input.component.css'],
})
export class MobilenoInputComponent {
  @Input() inputid = '';
  @Input() form: any;
  @Input() control = new FormControl();
  @Input() errorMessege!: Record<string, string>;
  countStart: boolean = false;
  countdowngap: any = 60;
  countdownTimer: number;
  isOtpSent : boolean = false
  x: any;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.errorMessege = {
      required: 'Mobile Number is required',
      pattern: ' Mobile Number is invalid.',
    };
  }
  startCountdown() {
    this.countdownTimer = this.countdowngap;
    this.x = setInterval(() => {
      if (this.countdownTimer > 0) {
        this.countdownTimer--;
        // console.log(this.countdownTimer)
      } else {
        this.stopCountdown();
      }
    }, 1000);
  }

  stopCountdown() {
    clearInterval(this.x);
    this.countStart = false;
    this.isOtpSent = true;

  }
  getOtp() {
    console.log(this.form.controls.Name.value);
    console.log('1234566');
    let strNo = this.form.controls.mobileNo.value;
    const str = strNo.toString();
    console.log(str);
    this.http
      .post('https://th.vnnogile.in/survey/api/v1/surveyotp', {
        fullname: this.form.controls.Name.value,
        mobile: str,
        accepted_terms_condition: true,
        SurveyId: '0a41b81f-ce9c-4204-aca8-5991d909f735',
        store_location: '',
      })
      .subscribe((res) => {
        //console.log(res);
        this.countStart = true;
        this.isOtpSent = true;
      });

    this.startCountdown();
  }
  getTop() {
    if (
      this.form.get(this.inputid).invalid &&
      this.form.get(this.inputid).touched
    ) {
      return '38%';
    } else {
      return '50%';
    }
  }
  getColor() {
    if (
      this.form.get(this.inputid).invalid &&
      this.form.get(this.inputid).touched
    ) {
      return '#ec3131';
    } else {
      return '#6d6767';
    }
  }
}
