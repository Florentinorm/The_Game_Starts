import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiProductoComponent } from './edi-producto.component';

describe('EdiProductoComponent', () => {
  let component: EdiProductoComponent;
  let fixture: ComponentFixture<EdiProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdiProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdiProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
