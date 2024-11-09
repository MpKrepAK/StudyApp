import { Routes } from '@angular/router';
import {LecturesComponent} from './lectures/lectures.component';
import {LecturesSubjectsComponent} from './lectures-subjects/lectures-subjects.component';
import {LecturePageComponent} from './lectures/lecture-page/lecture-page.component';
import {LectureAdminComponent} from './lecture-admin/lecture-admin.component';

export const routes: Routes = [
  { path: '', component: LecturesSubjectsComponent },
  { path: 'lectures/:id', component: LecturesComponent },
  {path: 'lecture-page/:id', component : LecturePageComponent},
  {path: 'admin/lecture-add', component : LectureAdminComponent},
];
