import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CProjectsComponent } from './c-projects.component';

describe('CProjectsComponent', () => {
  let component: CProjectsComponent;
  let fixture: ComponentFixture<CProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CProjectsComponent]
    });
    fixture = TestBed.createComponent(CProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
