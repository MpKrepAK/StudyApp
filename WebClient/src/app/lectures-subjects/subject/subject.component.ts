import {Component, Input} from '@angular/core';
import {AcademicSubject} from '../academicSubject';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent {
  @Input()
  subject!: AcademicSubject;
}
