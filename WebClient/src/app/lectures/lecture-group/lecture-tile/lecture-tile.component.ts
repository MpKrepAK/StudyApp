import {Component, Input} from '@angular/core';
import {Lecture} from '../lecture';

@Component({
  selector: 'app-lecture-tile',
  standalone: true,
  imports: [],
  templateUrl: './lecture-tile.component.html',
  styleUrl: './lecture-tile.component.scss'
})
export class LectureTileComponent {
  @Input()
  lecture! : Lecture;
}
