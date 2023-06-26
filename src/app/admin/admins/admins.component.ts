import { Component, OnInit} from '@angular/core';
import { faTrash, faEdit, faAdd } from '@fortawesome/free-solid-svg-icons';
import { Admin } from '../interfaces/admin';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  isVisiable: boolean = false; 
  isSubmitted: boolean = true;
  faTrash = faTrash;
  faEdit = faEdit;
  faAdd = faAdd;
  admins: Admin[] = []

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {

    this.getAdminsList();
  }

  getAdminsList(): void {
    this.adminService.getAllAdmins().subscribe(
      admins => this.admins = admins
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

  onDelete(adminId: any){
    this.adminService.deleteAdmin(adminId).subscribe(() => {
      this.getAdminsList();
    });
  }
}
