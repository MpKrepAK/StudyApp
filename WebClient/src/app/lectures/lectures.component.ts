import { Component } from '@angular/core';
import {LectureGroupComponent} from './lecture-group/lecture-group.component';
import {LectureGroupService} from './lecture-group.service';
import {LectureGroup} from './lecture-group';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-lectures',
  standalone: true,
  imports: [
    LectureGroupComponent,
    NgForOf
  ],
  templateUrl: './lectures.component.html',
  styleUrl: './lectures.component.scss'
})
export class LecturesComponent {
  groups : LectureGroup[] = [];
  constructor(private groupService : LectureGroupService) {
    this.groups = groupService.groups;
  }
}
