import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTractorsComponent } from './manage-tractors.component';

describe('ManageTractorsComponent', () => {
  let component: ManageTractorsComponent;
  let fixture: ComponentFixture<ManageTractorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageTractorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageTractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
