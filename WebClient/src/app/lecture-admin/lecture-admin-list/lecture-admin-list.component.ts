import { Component } from '@angular/core';
import {TextAdminData} from '../lecture-admin-text/text-admin-data';
import {ListAdminData} from './list-admin-data';
import {FormsModule} from '@angular/forms';
import {AdminComponent} from '../admin-component';

@Component({
  selector: 'app-lecture-admin-list',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './lecture-admin-list.component.html',
  styleUrl: './lecture-admin-list.component.scss'
})
export class LectureAdminListComponent implements AdminComponent{
  public data: ListAdminData = {
    title:'',
    d1:'',
    d2:'',
    d3:'',
    d4:'',
    d5:'',
    d6:'',
    d7:'',
    d8:'',
    d9:'',
    d10:''
  };
  moveUp!: () => void;
  moveDown!: () => void;
}
