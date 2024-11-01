import { Component } from '@angular/core';
import {SubjectComponent} from './subject/subject.component';
import {NgForOf} from '@angular/common';
import {SubjectService} from './subject.service';
import {Subject} from './subject';

@Component({
  selector: 'app-lectures-subjects',
  standalone: true,
  imports: [
    SubjectComponent,
    NgForOf
  ],
  templateUrl: './lectures-subjects.component.html',
  styleUrl: './lectures-subjects.component.scss'
})
export class LecturesSubjectsComponent {
  subjects : Subject[] = [];
  constructor(private subjectService : SubjectService) {
    this.subjects = subjectService.subjects;
  }
}
