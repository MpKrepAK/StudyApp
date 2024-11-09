import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {AcademicSubject} from '../lectures-subjects/academicSubject';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-lecture-admin',
  standalone: true,
  imports: [
    NgForOf,
    HttpClientModule,
    FormsModule
  ],
  templateUrl: './lecture-admin.component.html',
  styleUrl: './lecture-admin.component.scss'
})
export class LectureAdminComponent implements OnInit{
  components : Component[] = [];
  subjects : AcademicSubject[] = [];
  selectedSubject: AcademicSubject = {
    id:0,
    name:"",
    subjectGroups:[]
  };
  constructor(private http : HttpClient) {
  }

  ngOnInit(){
    this.http.get<AcademicSubject[]>("http://localhost:8080/api/academic-subjects").subscribe(x => {
      this.subjects = x;
    });
  }
}
