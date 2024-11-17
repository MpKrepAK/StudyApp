import {Component, OnInit} from '@angular/core';
import {SubjectComponent} from './subject/subject.component';
import {NgForOf} from '@angular/common';
import {AcademicSubject} from './academicSubject';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-lectures-subjects',
  standalone: true,
  imports: [
    SubjectComponent,
    NgForOf,
    HttpClientModule
  ],
  templateUrl: './lectures-subjects.component.html',
  styleUrl: './lectures-subjects.component.scss'
})
export class LecturesSubjectsComponent implements OnInit {

  subjects: AcademicSubject[] = [];

  constructor(private http : HttpClient) {}

  ngOnInit() {
    this.http.get<AcademicSubject[]>(environment.apiUrl+"/api/academic-subjects").subscribe(x => {
      this.subjects = x;
    });
  }
}
