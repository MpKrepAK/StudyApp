import {Component, Input} from '@angular/core';
import {LectureTileComponent} from './lecture-tile/lecture-tile.component';
import {LectureService} from './lecture.service';
import {Lecture} from './lecture';
import {NgForOf, NgIf} from '@angular/common';
import {LectureGroup} from '../lecture-group';

@Component({
  selector: 'app-lecture-group',
  standalone: true,
  imports: [
    LectureTileComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './lecture-group.component.html',
  styleUrl: './lecture-group.component.scss'
})
export class LectureGroupComponent {
  @Input()
  group! : LectureGroup;
  lectures : Lecture[]=[];
  listVisible : boolean = true;
  constructor(private lectureService : LectureService) {
    this.lectures = lectureService.lectures;
  }
  changeListVisibility(){
    this.listVisible = !this.listVisible;
  }

}
