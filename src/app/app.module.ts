import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KomentarzComponent } from './components/komentarz/komentarz.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import { OfertaComponent } from './components/oferta/oferta.component';
import { HeroBirthdayComponent } from './components/blog/czas.component';
import { HeroBirthday2Component } from './components/blog/pipe.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactFormComponent,
    ContactComponent,
    KomentarzComponent,
    FooterComponent,
    ServicesComponent,
    HomeComponent,
    BlogComponent,
    OfertaComponent,
    HeroBirthdayComponent,
    HeroBirthday2Component,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }