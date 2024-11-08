import {Component, Input, OnInit} from '@angular/core';
import {LectureTileComponent} from './lecture-tile/lecture-tile.component';
import {LectureService} from './lecture.service';
import {GroupClasses} from './groupClasses';
import {NgForOf, NgIf} from '@angular/common';
import {SubjectGroup} from '../subject-group';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AcademicSubject} from '../../lectures-subjects/academicSubject';

@Component({
  selector: 'app-lecture-group',
  standalone: true,
  imports: [
    LectureTileComponent,
    NgForOf,
    NgIf,
    HttpClientModule
  ],
  templateUrl: './lecture-group.component.html',
  styleUrl: './lecture-group.component.scss'
})
export class LectureGroupComponent implements OnInit{
  @Input()
  group! : SubjectGroup;
  listVisible : boolean = true;
  @Input()
  subjectId!: number;
  constructor(private http : HttpClient) {
  }
  changeListVisibility(){
    this.listVisible = !this.listVisible;
  }

  ngOnInit() {
  }

}
