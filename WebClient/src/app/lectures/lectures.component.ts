import {Component, OnInit} from '@angular/core';
import {LectureGroupComponent} from './lecture-group/lecture-group.component';
import {SubjectGroup} from './subject-group';
import {NgForOf} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {AcademicSubject} from '../lectures-subjects/academicSubject';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-lectures',
  standalone: true,
  imports: [
    LectureGroupComponent,
    NgForOf,
    HttpClientModule
  ],
  templateUrl: './lectures.component.html',
  styleUrl: './lectures.component.scss'
})
export class LecturesComponent implements OnInit{
  groups : SubjectGroup[] = [];
  subjectId: number = 0;
  constructor(private http : HttpClient, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // @ts-ignore
      this.subjectId = +params.get('id');
      this.http.get<SubjectGroup[]>("http://localhost:8080/api/subject-groups?subjectId="+this.subjectId).subscribe(x => {
        this.groups = x;
      });
    });
  }
}
