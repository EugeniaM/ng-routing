import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {LessonsComponent} from './lessons.component';
import {LessonComponent} from './lesson/lesson.component';
import {EditLessonComponent} from './edit-lesson/edit-lesson.component';
import {LessonsService} from './lessons.service';
import {LessonsRoutingModule} from './lessons-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    LessonsComponent,
    EditLessonComponent,
    LessonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LessonsRoutingModule,
    SharedModule
  ],
  providers: [LessonsService]
})
export class LessonsModule {}
