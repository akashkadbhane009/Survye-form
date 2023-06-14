import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilenoInputComponent } from './mobileno-input.component';

describe('MobilenoInputComponent', () => {
  let component: MobilenoInputComponent;
  let fixture: ComponentFixture<MobilenoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilenoInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilenoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
