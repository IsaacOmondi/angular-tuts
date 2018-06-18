import { CoursesComponent } from './courses/courses.component';
import { NgModule } from '@angular/core';
import { FavoriteComponent } from './favorite/favorite.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'favorite',
        component: FavoriteComponent
    },
    {
        path: 'form',
        component: FormComponent
    },
    {
        path: 'courses',
        component: CoursesComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }