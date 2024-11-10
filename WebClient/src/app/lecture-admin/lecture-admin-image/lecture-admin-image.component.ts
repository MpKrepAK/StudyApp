import { Component } from '@angular/core';
import {AdminComponent} from '../admin-component';
import {ListAdminData} from '../lecture-admin-list/list-admin-data';
import {ImageAdminData} from './image-admin-data';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-lecture-admin-image',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './lecture-admin-image.component.html',
  styleUrl: './lecture-admin-image.component.scss'
})
export class LectureAdminImageComponent implements AdminComponent{
  public data: ImageAdminData = {
    title:'',
    images:[]
  };
  moveUp!: () => void;
  moveDown!: () => void;

}
