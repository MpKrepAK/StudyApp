import { Routes } from '@angular/router';
import {LecturesComponent} from './lectures/lectures.component';
import {LecturesSubjectsComponent} from './lectures-subjects/lectures-subjects.component';
import {LecturePageComponent} from './lectures/lecture-page/lecture-page.component';

export const routes: Routes = [
  { path: '', component: LecturesSubjectsComponent },
  { path: 'lectures/:id', component: LecturesComponent },
  {path: 'lecture-page/:subjectId/:lectureId', component : LecturePageComponent}
];
