import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { DogComponent } from './components/dog/dog.component';

export const routes: Routes = [

    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'

    },
    
{
    path: 'projects',
    component: ProjectComponent
},
{
    path: 'dog',
    component: DogComponent
}

];
