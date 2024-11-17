import {Component, OnInit} from '@angular/core';
import {AcademicSubject} from '../../lectures-subjects/academicSubject';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {CommonModule, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-subject-admin-info',
  standalone: true,
  imports: [
    NgIf,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './subject-admin-info.component.html',
  styleUrl: './subject-admin-info.component.scss'
})
export class SubjectAdminInfoComponent implements OnInit {

  subject! : AcademicSubject;

  constructor(private http: HttpClient, private route: ActivatedRoute, private r : Router) {}

  ngOnInit() {
    const subjectId = +this.route.snapshot.paramMap.get('id')!;
    console.log('Received ID:', subjectId);

    this.http.get<AcademicSubject>(`${environment.apiUrl}/api/academic-subjects/${subjectId}`)
      .subscribe((response) => {
        this.subject = response;
        console.log('Received Subject:', this.subject);
      });
  }

  update(id: number) {
    this.http.put<AcademicSubject>(`${environment.apiUrl}/api/academic-subjects/${id}`, this.subject)
      .subscribe((response) => {

      });
    this.r.navigate(['/admin/subjects']);
  }

  delete(id: number) {
    this.http.delete<AcademicSubject>(`${environment.apiUrl}/api/academic-subjects/${id}`)
      .subscribe((response) => {

      });
    this.r.navigate(['/admin/subjects']);
  }
}
