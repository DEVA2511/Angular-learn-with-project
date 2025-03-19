import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TractorRegisterComponent } from './tractor-register.component';

describe('TractorRegisterComponent', () => {
  let component: TractorRegisterComponent;
  let fixture: ComponentFixture<TractorRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TractorRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TractorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
