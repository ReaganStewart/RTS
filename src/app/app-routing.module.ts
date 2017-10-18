import {NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { MyservicesComponent } from './myservices/myservices.component';
import { ProjectsComponent } from './projects/projects.component';


const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'about', component: AboutComponent },
    {path: 'blog', component: BlogComponent },
    {path: 'home', component: HomeComponent },
    {path: 'services', component: MyservicesComponent },
    {path: 'projects', component: ProjectsComponent }
]

@NgModule({
 imports: [RouterModule.forRoot(appRoutes,
 { enableTracing: true } )],
 exports: [RouterModule]
})
export class AppRoutingModule {

}
