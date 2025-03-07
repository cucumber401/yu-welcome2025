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
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
