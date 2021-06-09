import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent}  from './home/home.component';
import {PostsComponent} from './posts/posts.component';
import {ProfileComponent} from './profile/profile.component';
import {BusinessComponent} from './business/business.component';
import {NeighbourhoodComponent} from './neighbourhood/neighbourhood.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"posts", component:PostsComponent},
  {path:"profile", component:ProfileComponent},
  {path:"neighbourhood", component:NeighbourhoodComponent},
  {path:"business", component:BusinessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
