import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  officalCom: boolean = false;
  isClicked: boolean = true;

  OnChangeClassTrigger() {
    this.isClicked = true;
    this.officalCom = true;
  }
  OnChangeClassTriggerno() {
    this.isClicked = false;
    this.officalCom = false;
  }
}
