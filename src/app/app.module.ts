import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { CoursesComponent } from './courses/courses.component';
import { PostsComponent } from './posts/posts.component';

import { PostService } from './services/posts/post.service';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    CoursesComponent,
    PostsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [DataService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
