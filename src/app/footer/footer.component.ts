import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Input() form : any
  officalCom: boolean = false;
  isClicked: boolean = true;

  OnChangeClassTrigger() {
    this.isClicked = true;
    this.officalCom = true;
    this.form.get('offCom').setValue(this.officalCom);
  }
  OnChangeClassTriggerno() {
    this.isClicked = false;
    this.officalCom = false;
    this.form.get('offCom').setValue(this.officalCom);
  }
}
