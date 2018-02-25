import { Component, OnInit } from '@angular/core';
import { LessonsService } from './lessons.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  public lessons: {id: number, name: string, status: string}[] = [];

  constructor(private lessonsService: LessonsService) { }

  ngOnInit() {
    this.lessons = this.lessonsService.getLessons();
  }

}
