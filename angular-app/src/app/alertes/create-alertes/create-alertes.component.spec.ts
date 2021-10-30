import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAlertesComponent } from './create-alertes.component';

describe('CreateAlertesComponent', () => {
  let component: CreateAlertesComponent;
  let fixture: ComponentFixture<CreateAlertesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAlertesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAlertesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
