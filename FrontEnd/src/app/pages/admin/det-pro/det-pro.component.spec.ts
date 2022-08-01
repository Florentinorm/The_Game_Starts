import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetProComponent } from './det-pro.component';

describe('DetProComponent', () => {
  let component: DetProComponent;
  let fixture: ComponentFixture<DetProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
