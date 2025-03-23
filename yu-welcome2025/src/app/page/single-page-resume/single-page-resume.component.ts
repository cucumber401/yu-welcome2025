import { Component } from '@angular/core';

@Component({
  selector: 'app-single-page-resume',
  templateUrl: './single-page-resume.component.html',
  styleUrls: ['./single-page-resume.component.scss']
})
export class SinglePageResumeComponent {
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
