import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserComponent} from './users/user/user.component';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {NotFoundComponent} from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lessons', loadChildren: './lessons/lessons.module#LessonsModule' },
  { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
