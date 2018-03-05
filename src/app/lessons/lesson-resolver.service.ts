import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {LessonsService} from './lessons.service';

interface Lesson {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class LessonResolverService implements Resolve<Lesson> {
  constructor(
    private lessonsService: LessonsService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<Lesson> | Promise<Lesson> | Lesson {
    return this.lessonsService.getLesson(+route.params['id']);
  }
}
