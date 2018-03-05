import { Component, OnInit } from '@angular/core';

import { LessonsService } from '../lessons.service';
import {ActivatedRoute, Params} from '@angular/router';
import {extractStyleParams} from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.css']
})
export class EditLessonComponent implements OnInit {
  lesson: {id: number, name: string, status: string};
  lessonName = '';
  lessonStatus = '';
  allowEdit = false;

  constructor(
    private lessonsService: LessonsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.lesson = this.lessonsService.getLesson(+params['id']);
          this.lessonName = this.lesson.name;
          this.lessonStatus = this.lesson.status;
        }
      );
    // console.log(this.route.snapshot.queryParams);
    this.route.queryParams
      .subscribe(
        (queryParams: Params) => {
          if (queryParams.allowEdit === '1') {
            this.allowEdit = true;
          } else {
            this.allowEdit = false;
          }
        }
      );
  }

  onUpdateLesson() {
    this.lessonsService.updateLesson(this.lesson.id, {name: this.lessonName, status: this.lessonStatus});
  }

}
