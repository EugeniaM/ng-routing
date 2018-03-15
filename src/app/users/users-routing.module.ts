import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {UserComponent} from './user/user.component';
import {UsersComponent} from './users.component';

const usersRoutes: Routes = [
  { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [ RouterModule ]
})
export class UsersRoutingModule {}
