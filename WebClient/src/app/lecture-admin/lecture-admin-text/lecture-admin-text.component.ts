import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-lecture-admin-text',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './lecture-admin-text.component.html',
  styleUrl: './lecture-admin-text.component.scss'
})
export class LectureAdminTextComponent {
  public title: string = '';
  public text: string ='';
  moveUp!: () => void;
  moveDown!: () => void;
}
