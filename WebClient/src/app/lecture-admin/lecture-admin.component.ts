import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-lecture-admin',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './lecture-admin.component.html',
  styleUrl: './lecture-admin.component.scss'
})
export class LectureAdminComponent {
  components : Component[] = [];
}
