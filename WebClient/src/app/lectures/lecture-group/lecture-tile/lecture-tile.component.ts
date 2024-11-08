import {Component, Input} from '@angular/core';
import {GroupClasses} from '../groupClasses';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-lecture-tile',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './lecture-tile.component.html',
  styleUrl: './lecture-tile.component.scss'
})
export class LectureTileComponent {
  @Input()
  lecture! : GroupClasses;
  @Input() subjectId!: number;
}
