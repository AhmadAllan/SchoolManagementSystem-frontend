import { Component } from '@angular/core';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent {
  faFolder = faFolder;

  subject: string = '';

  onSelect(){
    console.log(this.subject);
  }
}
