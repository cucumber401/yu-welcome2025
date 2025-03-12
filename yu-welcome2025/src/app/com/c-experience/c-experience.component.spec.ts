import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CExperienceComponent } from './c-experience.component';

describe('CExperienceComponent', () => {
  let component: CExperienceComponent;
  let fixture: ComponentFixture<CExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CExperienceComponent]
    });
    fixture = TestBed.createComponent(CExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
