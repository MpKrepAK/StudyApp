import { Routes } from '@angular/router';
import {LecturesComponent} from './lectures/lectures.component';
import {LecturesSubjectsComponent} from './lectures-subjects/lectures-subjects.component';
import {LecturePageComponent} from './lectures/lecture-page/lecture-page.component';
import {LectureAdminComponent} from './lecture-admin/lecture-admin.component';
import {AuthGuard} from './auth/AuthGuard';
import {SubjectsAdminComponent} from './admin/subjects-admin/subjects-admin.component';
import {SubjectAdminInfoComponent} from './admin/subject-admin-info/subject-admin-info.component';
import {SubjectAdminAddComponent} from './admin/subject-admin-add/subject-admin-add.component';
import {GroupsAdminComponent} from './admin/groups-admin/groups-admin.component';
import {GroupsAdminAddComponent} from './admin/groups-admin-add/groups-admin-add.component';
import {GroupsAdminInfoComponent} from './admin/groups-admin-info/groups-admin-info.component';
import {ClassesAdminComponent} from './admin/classes-admin/classes-admin.component';
import {ClassesAdminInfoComponent} from './admin/classes-admin-info/classes-admin-info.component';
import {TestsComponent} from './tests/tests.component';

export const routes: Routes = [
  { path: '', component: LecturesSubjectsComponent },
  { path: 'tests', component: TestsComponent },
  { path: 'lectures/:id', component: LecturesComponent },
  {path: 'lecture-page/:id', component : LecturePageComponent},
  { path: 'admin/lecture-add', component: LectureAdminComponent, canActivate: [AuthGuard] },
  { path: 'admin/subjects', component: SubjectsAdminComponent, canActivate: [AuthGuard] },
  { path: 'admin/classes/:id', component: ClassesAdminComponent, canActivate: [AuthGuard] },
  { path: 'admin/classes/info/:id', component: ClassesAdminInfoComponent, canActivate: [AuthGuard] },
  { path: 'admin/groups/add/:id', component: GroupsAdminAddComponent, canActivate: [AuthGuard] },
  { path: 'admin/groups/:id', component: GroupsAdminComponent, canActivate: [AuthGuard] },
  { path: 'admin/subjects/add', component: SubjectAdminAddComponent, canActivate: [AuthGuard] },
  { path: 'admin/groups/info/:id', component: GroupsAdminInfoComponent, canActivate: [AuthGuard] },
  { path: 'admin/subjects/:id', component: SubjectAdminInfoComponent, canActivate: [AuthGuard] },
];
