export class LessonsService {
  private lessons = [
    {
      id: 1,
      name: 'Handling Forms in Angular Apps',
      status: 'new'
    },
    {
      id: 2,
      name: 'Angular Routing',
      status: 'in progress'
    },
    {
      id: 3,
      name: 'Databinding',
      status: 'done'
    }
  ];

  getLessons() {
    return this.lessons;
  }

  getLesson(id: number) {
    const lesson = this.lessons.find(
      (lessonItem) => {
        return lessonItem.id === id;
      }
    );
    return lesson;
  }

  updateLesson(id: number, lessonInfo: {name: string, status: string}) {
    const lesson = this.lessons.find(
      (lessonItem) => {
        return lessonItem.id === id;
      }
    );
    if (lesson) {
      lesson.name = lessonInfo.name;
      lesson.status = lessonInfo.status;
    }
  }
}
