import { Injectable } from '@angular/core';
import {GroupClasses} from './groupClasses';

@Injectable({
  providedIn: 'root'
})
export class LectureService {
  lectures : GroupClasses[] = [];
  constructor() {
    this.lectures.push({
      id:1,
      name:"Основы БД",
      index:1
    });
    this.lectures.push({
      id:2,
      name:"Insert запросы",
      index:3
    });
    this.lectures.push({
      id:3,
      name:"Select запросы",
      index:2
    });
    this.lectures.push({
      id:4,
      name:"Delete запросы",
      index:4
    });
  }
}
