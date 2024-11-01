import { Injectable } from '@angular/core';
import {Subject} from './subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  subjects : Subject[] = [];
  constructor() {
    this.subjects.push(
      {
        id:1,
        name:"Математика"
      }
    );

    this.subjects.push(
      {
        id:2,
        name:"Физика"
      }
    );

    this.subjects.push(
      {
        id:3,
        name:"Химия"
      }
    );
    this.subjects.push(
      {
        id:4,
        name:"Физическая культура и здоровье"
      }
    );
  }
}
