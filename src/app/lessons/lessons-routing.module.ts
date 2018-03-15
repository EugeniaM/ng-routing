import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from '../auth-guard.service';
import {LessonResolverService} from './lesson-resolver.service';
import {LessonsComponent} from './lessons.component';
import {LessonComponent} from './lesson/lesson.component';
import {EditLessonComponent} from './edit-lesson/edit-lesson.component';

const lessonsRoutes: Routes = [
  { path: '', component: LessonsComponent,
    // canActivate: [ AuthGuard ],
    canActivateChild: [ AuthGuard ],
    children: [
      { path: ':id', component: LessonComponent, resolve: { lesson: LessonResolverService } },
      { path: ':id/edit', component: EditLessonComponent }
    ]
  },
]

@NgModule({
  imports: [ RouterModule.forChild(lessonsRoutes) ],
  exports: [ RouterModule ],
  providers: [ AuthGuard, LessonResolverService ]
})
export class LessonsRoutingModule {}
