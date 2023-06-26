import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { faArrowLeft, faBook, faQuestion, faNoteSticky } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  faArrowLeft = faArrowLeft;
  faBook = faBook;
  faQuestion = faQuestion;
  faNoteSticky = faNoteSticky;

  constructor (private router: Router) {}

  onClick() {
    this.router.navigate(['student', 'courses']);
  }
}
