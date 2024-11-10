import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TextAdminData} from './text-admin-data';
import {AdminComponent} from '../admin-component';

@Component({
  selector: 'app-lecture-admin-text',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './lecture-admin-text.component.html',
  styleUrl: './lecture-admin-text.component.scss'
})
export class LectureAdminTextComponent implements AdminComponent {
  public data: TextAdminData = {
    title:'',
    text:''
  };
  moveUp!: () => void;
  moveDown!: () => void;
}
