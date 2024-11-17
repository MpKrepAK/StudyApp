import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AcademicSubject} from '../../lectures-subjects/academicSubject';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-subject-admin-add',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './subject-admin-add.component.html',
  styleUrl: './subject-admin-add.component.scss'
})
export class SubjectAdminAddComponent {
  subject : AcademicSubject = {
    id : 0,
    name : '',
    subjectGroups : []
  };

  constructor(private http: HttpClient, private route: ActivatedRoute, private r : Router) {}


  add() {
    this.http.post<AcademicSubject>(`${environment.apiUrl}/api/academic-subjects`, this.subject)
      .subscribe((response) => {

      });
    this.r.navigate(['/admin/subjects']);
  }
}
