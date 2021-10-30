import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAlertesComponent } from './delete-alertes.component';

describe('DeleteAlertesComponent', () => {
  let component: DeleteAlertesComponent;
  let fixture: ComponentFixture<DeleteAlertesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAlertesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAlertesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
