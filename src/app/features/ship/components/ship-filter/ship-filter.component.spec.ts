import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipFilterComponent } from './ship-filter.component';

describe('ShipFilterComponent', () => {
  let component: ShipFilterComponent;
  let fixture: ComponentFixture<ShipFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
