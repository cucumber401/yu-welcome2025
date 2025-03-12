import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import { ExperienceComponent } from './page/experience/experience.component';
import { ProjectsComponent } from './page/projects/projects.component';
import { SkillsComponent } from './page/skills/skills.component';
import { SinglePageResumeComponent } from './page/single-page-resume/single-page-resume.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'resume', component: SinglePageResumeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }