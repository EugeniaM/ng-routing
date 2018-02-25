import { Component, OnInit } from '@angular/core';

import { LessonsService } from '../lessons.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  lesson: {id: number, name: string, status: string};

  constructor(private lessonsService: LessonsService) { }

  ngOnInit() {
    this.lesson = this.lessonsService.getLesson(1);
  }

}
