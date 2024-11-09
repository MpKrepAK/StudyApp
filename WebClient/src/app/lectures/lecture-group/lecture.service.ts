import { Injectable } from '@angular/core';
import {GroupClasses} from './groupClasses';

@Injectable({
  providedIn: 'root'
})
export class LectureService {
  lectures : GroupClasses[] = [];
  constructor() {

  }
}
