import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { HomeComponent } from './home/home.component';
import { PerformanceComponent } from './performance/performance.component';
import { MarksComponent } from './marks/marks.component';


@NgModule({
  declarations: [
    HomeComponent,
    PerformanceComponent,
    MarksComponent
  ],
  imports: [
    CommonModule,
    ParentRoutingModule
  ]
})
export class ParentModule { }
