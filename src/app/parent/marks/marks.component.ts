import { Component } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent {
  assignments: { name: string, score: number }[] = [
    { name: 'Assignment 1', score: 10 },
    { name: 'Assignment 2', score: 10 },
    { name: 'Assignment 3', score: 10 }
  ];

  quizzes: { name: string, score: number }[] = [
    { name: 'Quiz 1', score: 10 },
    { name: 'Quiz 2', score: 10 },
    { name: 'Quiz 3', score: 10 }
  ];

  exams: { name: string, score: number }[] = [
    { name: 'Midterm Exam', score: 30 },
    { name: 'Final Exam', score: 50 }
  ];
}
