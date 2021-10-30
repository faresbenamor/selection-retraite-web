import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlertesComponent } from './edit-alertes.component';

describe('EditAlertesComponent', () => {
  let component: EditAlertesComponent;
  let fixture: ComponentFixture<EditAlertesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAlertesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAlertesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
