import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoSeccion1 } from './producto-seccion1';

describe('ProductoSeccion1', () => {
  let component: ProductoSeccion1;
  let fixture: ComponentFixture<ProductoSeccion1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoSeccion1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoSeccion1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
