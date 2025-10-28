import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoSeccion2 } from './producto-seccion2';

describe('ProductoSeccion2', () => {
  let component: ProductoSeccion2;
  let fixture: ComponentFixture<ProductoSeccion2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoSeccion2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoSeccion2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
