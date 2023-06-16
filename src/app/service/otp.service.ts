import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  isOtpSent: boolean = false;
  isOtpVerified: boolean = false;
  countdownTimer: number = 300; // 5 minutes (in seconds)
  countdownInterval: any;
  formData:any

  constructor() {

  }
  

  sendOtp() {
    if (this.formData.get('mobileNo')?.valid) {
      // Send OTP logic goes here (e.g., API call)

      // Simulating OTP sending
      console.log('OTP Sent');
      this.isOtpSent = true;
      this.startCountdown();
    }
  }

  verifyOtp() {
    if (this.formData.valid) {
      // Verify OTP logic goes here (e.g., API call)

      // Simulating OTP verification
      console.log('OTP Verified');
      this.isOtpVerified = true;
      this.stopCountdown();
    }
  }

  startCountdown() {
    this.countdownInterval = setInterval(() => {
      if (this.countdownTimer > 0) {
        this.countdownTimer--;
      } else {
        this.stopCountdown();
      }
    }, 1000);
  }

  stopCountdown() {
    clearInterval(this.countdownInterval);
  }
}

