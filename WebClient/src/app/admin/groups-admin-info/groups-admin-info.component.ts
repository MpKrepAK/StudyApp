import {Component, OnInit} from '@angular/core';
import {AcademicSubject} from '../../lectures-subjects/academicSubject';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SubjectGroup} from '../../lectures/subject-group';

@Component({
  selector: 'app-groups-admin-info',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './groups-admin-info.component.html',
  styleUrl: './groups-admin-info.component.scss'
})
export class GroupsAdminInfoComponent implements OnInit {

  subjectGroup! : SubjectGroup;

  constructor(private http: HttpClient, private route: ActivatedRoute, private r : Router) {}
  id : number=0;
  ngOnInit() {
    const subjectId = +this.route.snapshot.paramMap.get('id')!;
    this.id = subjectId;
    console.log('Received ID:', subjectId);

    this.http.get<SubjectGroup>(`${environment.apiUrl}/api/subject-groups/${subjectId}`)
      .subscribe((response) => {
        this.subjectGroup = response;
        console.log('Received Subject:', this.subjectGroup);
      });
  }

  update(id: number) {
    this.http.put<SubjectGroup>(`${environment.apiUrl}/api/subject-groups/${id}`, this.subjectGroup)
      .subscribe((response) => {

      });
    this.r.navigate(['/admin/subjects']);
  }

  delete(id: number) {
    this.http.delete<SubjectGroup>(`${environment.apiUrl}/api/subject-groups/${id}`)
      .subscribe((response) => {

      });
    this.r.navigate(['/admin/subjects']);
  }
}
