import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { Layout1Component } from './layout/layout-1/layout-1.component';
import { HeaderComponent } from './com/header/header.component';
import { FooterComponent } from './com/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Layout1Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
