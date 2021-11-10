import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrambsComponent } from './breadcrambs.component';

describe('BreadcrambsComponent', () => {
  let component: BreadcrambsComponent;
  let fixture: ComponentFixture<BreadcrambsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrambsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrambsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
