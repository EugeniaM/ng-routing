import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { LessonsComponent } from './lessons/lessons.component';
import { UserComponent } from './users/user/user.component';
import { EditLessonComponent } from './lessons/edit-lesson/edit-lesson.component';
import { LessonComponent } from './lessons/lesson/lesson.component';
import { LessonsService } from './lessons/lessons.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    LessonsComponent,
    UserComponent,
    EditLessonComponent,
    LessonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
