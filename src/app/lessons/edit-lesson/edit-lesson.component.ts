import { Component, OnInit } from '@angular/core';

import { LessonsService } from '../lessons.service';

@Component({
  selector: 'app-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.css']
})
export class EditLessonComponent implements OnInit {
  lesson: {id: number, name: string, status: string};
  lessonName = '';
  lessonStatus = '';

  constructor(private lessonsService: LessonsService) { }

  ngOnInit() {
    this.lesson = this.lessonsService.getLesson(1);
    this.lessonName = this.lesson.name;
    this.lessonStatus = this.lesson.status;
  }

  onUpdateLesson() {
    this.lessonsService.updateLesson(this.lesson.id, {name: this.lessonName, status: this.lessonStatus});
  }

}
