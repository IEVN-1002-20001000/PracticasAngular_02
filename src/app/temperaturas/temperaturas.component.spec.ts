import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturasComponent } from './temperaturas.component';

describe('TemperaturasComponent', () => {
  let component: TemperaturasComponent;
  let fixture: ComponentFixture<TemperaturasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemperaturasComponent]
    });
    fixture = TestBed.createComponent(TemperaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
