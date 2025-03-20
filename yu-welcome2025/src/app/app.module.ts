import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Layout1Component } from './layout/layout-1/layout-1.component';
import { HeaderComponent } from './com/header/header.component';
import { FooterComponent } from './com/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { ExperienceComponent } from './page/experience/experience.component';
import { SkillsComponent } from './page/skills/skills.component';
import { ContactComponent } from './page/contact/contact.component';
import { ProjectsComponent } from './page/projects/projects.component';
import { SinglePageResumeComponent } from './page/single-page-resume/single-page-resume.component';
import { CExperienceComponent } from './com/c-experience/c-experience.component';
import { CHomeComponent } from './com/c-home/c-home.component';
import { CProjectsComponent } from './com/c-projects/c-projects.component';
import { CSkillsComponent } from './com/c-skills/c-skills.component';
import { CContactComponent } from './com/c-contact/c-contact.component';
import { BarChartAnimateDirective } from './directives/bar-chart-animate.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Layout1Component,
    HeaderComponent,
    FooterComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactComponent,
    ProjectsComponent,
    SinglePageResumeComponent,
    CExperienceComponent,
    CHomeComponent,
    CProjectsComponent,
    CSkillsComponent,
    CContactComponent,
    BarChartAnimateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
