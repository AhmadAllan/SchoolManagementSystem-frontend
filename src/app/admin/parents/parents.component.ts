import { Component, OnInit } from '@angular/core';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { Parent } from '../interfaces/parent';
import { ParentService } from '../services/parent.service';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {
  isVisiable: boolean = false; 
  isSubmitted: boolean = true;
  faTrash = faTrash;
  faEdit = faEdit;
  faAdd = faAdd;
  parents: Parent[] = []

  constructor(private parentsService: ParentService) {}

  ngOnInit(): void {

    this.getParentsList();
  }

  getParentsList(): void {
    this.parentsService.getAllParents().subscribe(
      parents => this.parents = parents
    );
  }

  handleBooleanVisiable(visiable: boolean) {
    this.isVisiable = visiable;
  }

  handleBooleanSubmit(submit: boolean) {
    this.isSubmitted = submit;
  }

  onToggle(): void {
  this.isVisiable = !this.isVisiable;
  }

  onClick() {
    this.isSubmitted = true;
    this.isVisiable = false;
  }

  onDelete(parentId: any){
    this.parentsService.deleteParent(parentId).subscribe(() => {
      this.getParentsList();
    });
  }
}
