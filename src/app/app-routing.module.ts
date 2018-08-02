import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about/:id',
        component: AboutComponent
    },
    {
        path: 'courses',
        component: CoursesComponent
    },
    {
        path: 'posts',
        component: PostsComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
