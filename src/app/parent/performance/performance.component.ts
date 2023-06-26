import { Component } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent { 
  grades: { subject: string, grade: string }[] = [
    { subject: 'Math', grade: 'A' },
    { subject: 'English', grade: 'B+' },
    { subject: 'Science', grade: 'A-' }
  ];

  selectedSubject: string | null = null;

  showDetails(subject: string): void {
    this.selectedSubject = subject;
  }

  getGradeDetails(subject: string): string {
    const gradeDetails: { [key: string]: string } = {
      Math: "Your child's performance in math has been consistently excellent. They have demonstrated strong problem-solving skills and a deep understanding of the concepts.",
      English: "Your child is making good progress in English. They actively participate in class discussions and show improvement in their reading and writing abilities.",
      Science: "Your child's performance in science is commendable. They have shown great enthusiasm in conducting experiments and submitting assignments on time."
    };

    return gradeDetails[subject] || '';
  } 
}
