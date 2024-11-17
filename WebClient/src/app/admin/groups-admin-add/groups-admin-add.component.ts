import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AcademicSubject} from '../../lectures-subjects/academicSubject';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {GroupClasses} from '../../lectures/lecture-group/groupClasses';
import {SubjectGroup} from '../../lectures/subject-group';

@Component({
  selector: 'app-groups-admin-add',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './groups-admin-add.component.html',
  styleUrl: './groups-admin-add.component.scss'
})
export class GroupsAdminAddComponent {
  groupClasses : SubjectGroup = {
    id : 0,
    name : '',
    index : 0,
    groupClasses : []
  };

  constructor(private http: HttpClient, private route: ActivatedRoute, private r : Router) {}


  add() {
    const subjectId = +this.route.snapshot.paramMap.get('id')!;
    this.http.post<SubjectGroup>(environment.apiUrl+'/api/subject-groups/' +subjectId, this.groupClasses)
      .subscribe((response) => {

      });
    this.r.navigate(['/admin/groups', subjectId]);
  }
}
