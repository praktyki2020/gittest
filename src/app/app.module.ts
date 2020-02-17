import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroHeaderComponent } from './components/intro-header/intro-header.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { PostsComponent } from './components/posts/posts.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    // test test test
    IntroHeaderComponent,
    PostCardComponent,
    FooterComponent,
    // komentarz bla bla
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: '', component: ServicesComponent },
      { path: '', component: PostsComponent },
      { path: '', component: ContactComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }