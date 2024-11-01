import {Component, Input} from '@angular/core';
import {Subject} from '../subject';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent {
  @Input()
  subject!: Subject;
}
