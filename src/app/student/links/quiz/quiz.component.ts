import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  faArrowLeft = faArrowLeft;


  constructor (private router: Router) {}

  onClick() {
    this.router.navigate(['student', 'courses']);
  }
}
