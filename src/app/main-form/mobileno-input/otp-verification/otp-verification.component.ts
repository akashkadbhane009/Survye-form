import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css'],
})
export class OtpVerificationComponent {
  @Input() inputid = '';
  @Input() form: any;
  @Input() control = new FormControl();
  @Input() errorMessege!: Record<string, string>;
  @Input() start: boolean;
  @Input() otpSent : boolean = false
  @Input() Timer: any;


  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.errorMessege = {
      required: 'OTP Number is required',
      minlength: ' Enter 4 Digit OTP is invalid.',
      maxlength: ' Enter 4 Digit OTP is invalid.',
      pattern: 'Please match the requested format.',
    };
    this.form.valueChanges.subscribe((res) => {
      let otp = res.otp.toString();



      if (otp.length === 4) {
        this.http
          .post('https://th.vnnogile.in/auth/api/v1/login', {
            app_name: 'THWEBAPP',
            username: res.Name,
            mobile: res.mobileNo.toString(),
            otp: res.otp,
            tenant_id: 1,
          })
          .subscribe();
      }
    });
  }
  getOtp() {
    console.log(this.form.controls.Name.value);
    //console.log('1234566');
    let strNo = this.form.controls.mobileNo.value;
    const str = strNo.toString();
    //console.log(str);
    this.http
      .post('https://th.vnnogile.in/survey/api/v1/surveyotp', {
        fullname: this.form.controls.Name.value,
        mobile: str,
        accepted_terms_condition: true,
        SurveyId: '0a41b81f-ce9c-4204-aca8-5991d909f735',
        store_location: '',
      })
      .subscribe((res) => {
        console.log(res);
      });
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
