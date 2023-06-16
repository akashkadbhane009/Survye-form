import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { MainFormComponent } from './main-form/main-form.component';
import { HeadingComponent } from './heading/heading.component';
import { SubmitButtonComponent } from './main-form/submit-button/submit-button.component';
import { DatePickerComponent } from './main-form/date-picker/date-picker.component';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { FormInputComponent } from './main-form/form-input/form-input.component';
import { HttpClientModule } from '@angular/common/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ValidationErrorComponent } from './main-form/validation-error/validation-error.component';
import { CityInputComponent } from './main-form/city-input/city-input.component';
import { StoreInputeComponent } from './main-form/city-input/store-inpute/store-inpute.component';
import { QueContainerComponent } from './main-form/que-container/que-container.component';
import { RatingComponent } from './main-form/que-container/rating/rating.component';
import { TextComponent } from './main-form/que-container/text/text.component';
import { TextAreaComponent } from './main-form/que-container/text-area/text-area.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MobilenoInputComponent } from './main-form/mobileno-input/mobileno-input.component';
import { OtpVerificationComponent } from './main-form/mobileno-input/otp-verification/otp-verification.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    MainFormComponent,
    HeadingComponent,
    SubmitButtonComponent,
    DatePickerComponent,
    FormInputComponent,
    ValidationErrorComponent,
    CityInputComponent,
    StoreInputeComponent,
    QueContainerComponent,
    RatingComponent,
    TextComponent,
    TextAreaComponent,
    MobilenoInputComponent,
    OtpVerificationComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
