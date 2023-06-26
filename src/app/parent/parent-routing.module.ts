import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerformanceComponent } from './performance/performance.component';
import { MarksComponent } from './marks/marks.component';

const routes: Routes = [
  {path: '', children: [
    {path: 'home', component: HomeComponent},
    {path: 'performance', component: PerformanceComponent},
    {path: 'marks', component: MarksComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
