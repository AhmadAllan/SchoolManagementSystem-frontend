import { Component } from '@angular/core';
import { faDiscourse } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  faDiscourse = faDiscourse;
}
