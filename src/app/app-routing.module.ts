import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserComponent} from './users/user/user.component';
import {HomeComponent} from './home/home.component';
import {LessonComponent} from './lessons/lesson/lesson.component';
import {LessonsComponent} from './lessons/lessons.component';
import {UsersComponent} from './users/users.component';
import {EditLessonComponent} from './lessons/edit-lesson/edit-lesson.component';
import {AuthGuard} from './auth-guard.service';
import {LessonResolverService} from './lessons/lesson-resolver.service';
import {NotFoundComponent} from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lessons', component: LessonsComponent,
    // canActivate: [ AuthGuard ],
    canActivateChild: [ AuthGuard ],
    children: [
      { path: ':id', component: LessonComponent, resolve: { lesson: LessonResolverService } },
      { path: ':id/edit', component: EditLessonComponent }
    ]
  },
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
