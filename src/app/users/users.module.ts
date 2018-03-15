import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersComponent} from './users.component';
import {UserComponent} from './user/user.component';
import { UsersRoutingModule } from './users-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule {}
