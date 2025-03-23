import { Component } from '@angular/core';

@Component({
  selector: 'app-c-skills',
  templateUrl: './c-skills.component.html',
  styleUrls: ['./c-skills.component.scss']
})
export class CSkillsComponent {
  skills: { skillTitle: string, skillLevel: string }[] = [
    { skillTitle: 'HTML', skillLevel: '90%' },
    { skillTitle: 'CSS/SCSS', skillLevel: '85%' },
    { skillTitle: 'RWD', skillLevel: '90%' },
    { skillTitle: 'JavaScript / TypeScript', skillLevel: '70%' },
    { skillTitle: 'Bootstrap', skillLevel: '85%' },
    { skillTitle: 'Angular', skillLevel: '80%' },
    { skillTitle: 'Git / GitHub', skillLevel: '85%' },
    { skillTitle: 'Java', skillLevel: '80%' },
    { skillTitle: 'RESTful API', skillLevel: '50%' },
  ];
  languages: { skillTitle: string, skillLevel: string }[] = [
    { skillTitle: 'Chinese', skillLevel: '99%' },
    { skillTitle: 'English', skillLevel: '83%' },
  ];
}
