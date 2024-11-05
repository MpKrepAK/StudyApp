import { Routes } from '@angular/router';
import {LecturesComponent} from './lectures/lectures.component';
import {LecturesSubjectsComponent} from './lectures-subjects/lectures-subjects.component';

export const routes: Routes = [
  { path: '', component: LecturesSubjectsComponent },
  { path: 'lectures/:id', component: LecturesComponent }
];
