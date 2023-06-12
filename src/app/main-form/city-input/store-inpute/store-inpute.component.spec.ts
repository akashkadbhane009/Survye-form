import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreInputeComponent } from './store-inpute.component';

describe('StoreInputeComponent', () => {
  let component: StoreInputeComponent;
  let fixture: ComponentFixture<StoreInputeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreInputeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreInputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
