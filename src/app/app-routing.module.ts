import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./components/contact/contact.component";
import { MessageComponent } from "./components/message/message.component";
import { ProfileComponent } from "./components/profile/profile.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "profile", component: ProfileComponent },
  { path: "message", component: MessageComponent },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then((m) => m.AdminModule),
  },
  {
    path: "student",
    loadChildren: () =>
      import("./student/student.module").then((m) => m.StudentModule),
  },
  {
    path: "teacher",
    loadChildren: () =>
      import("./teacher/teacher.module").then((m) => m.TeacherModule),
  },
  {
    path: "parent",
    loadChildren: () =>
      import("./parent/parent.module").then((m) => m.ParentModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginModule),
  },
  { path: "contactUs", component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
