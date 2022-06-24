import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetVentasComponent } from './det-ventas.component';

describe('DetVentasComponent', () => {
  let component: DetVentasComponent;
  let fixture: ComponentFixture<DetVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetVentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
