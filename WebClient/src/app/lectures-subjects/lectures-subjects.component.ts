import {Component, OnInit} from '@angular/core';
import {SubjectComponent} from './subject/subject.component';
import {NgForOf} from '@angular/common';
import {AcademicSubject} from './academicSubject';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';

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
    this.http.get<AcademicSubject[]>("http://localhost:8080/api/academic-subjects").subscribe(x => {
      this.subjects = x;
    });
  }
}
