import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft, faBook, faQuestion, faNoteSticky, faGear, faCaretDown } from '@fortawesome/free-solid-svg-icons';

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
  faGear = faGear;
  faCaretDown = faCaretDown;
  isVisible: boolean = false;
  

  constructor (private router: Router) {}

  onClick() {
    this.router.navigate(['teacher', 'courses']);
  }

  onPress() {
    this.isVisible = !this.isVisible
  }
}
