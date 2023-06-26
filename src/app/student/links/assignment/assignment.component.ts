import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft, faBook, faQuestion, faNoteSticky } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {
  faArrowLeft = faArrowLeft;
  faBook = faBook;
  faQuestion = faQuestion;
  faNoteSticky = faNoteSticky;

  // uploadedFileName: string = '';
  // filePreview: string | undefined;
  // @ViewChild('fileInput') fileInput!: ElementRef;

  constructor (private router: Router) {}

  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   if (file) {
  //     this.uploadedFileName = file.name;
  //     this.generateFilePreview(file);
  //   }
  // }

  // generateFilePreview(file: File) {
  //   const fileReader = new FileReader();
  //   fileReader.onload = () => {
  //     this.filePreview = fileReader.result as string;
  //   };
  //   fileReader.readAsDataURL(file);
  // }

  // isPdfFile(fileName: string): boolean {
  //   return fileName.toLowerCase().endsWith('.pdf');
  // }

  onClick() {
    this.router.navigate(['student', 'courses','course']);
  }
}
