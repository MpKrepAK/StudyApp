import { Injectable } from '@angular/core';
import {LectureGroup} from './lecture-group';

@Injectable({
  providedIn: 'root'
})
export class LectureGroupService {
  groups : LectureGroup[] = [];
  constructor() {
    this.groups.push({
      id: 1,
      name:"Основы",
      index: 1
    });

    this.groups.push({
      id: 2,
      name:"Запросы",
      index: 1
    });
  }
}
