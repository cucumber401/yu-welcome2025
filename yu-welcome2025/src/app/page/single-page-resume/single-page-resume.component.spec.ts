import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageResumeComponent } from './single-page-resume.component';

describe('SinglePageResumeComponent', () => {
  let component: SinglePageResumeComponent;
  let fixture: ComponentFixture<SinglePageResumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglePageResumeComponent]
    });
    fixture = TestBed.createComponent(SinglePageResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
