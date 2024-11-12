import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AdminComponent} from '../admin-component';
import {VideoAdminData} from '../files/lecture-admin-video/video-admin-data';
import {LinkAdminData} from './link-admin-data';

@Component({
  selector: 'app-lecture-admin-link',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './lecture-admin-link.component.html',
  styleUrl: './lecture-admin-link.component.scss'
})
export class LectureAdminLinkComponent implements AdminComponent{
  public data: LinkAdminData = {
    title:'',
    linkText: '',
    link : '',
    index : 0
  };
  moveUp!: () => void;
  moveDown!: () => void;
  remove!: () => void;
}
