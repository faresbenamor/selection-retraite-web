import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRepasComponent } from './delete-repas.component';

describe('DeleteRepasComponent', () => {
  let component: DeleteRepasComponent;
  let fixture: ComponentFixture<DeleteRepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRepasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
