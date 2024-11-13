import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdminComponent} from '../../admin-component';
import {FileAdminData} from '../file-admin-data';
import {VideoAdminData} from './video-admin-data';

@Component({
  selector: 'app-lecture-admin-video',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './lecture-admin-video.component.html',
  styleUrls: ['./lecture-admin-video.component.scss', '../../admin.scss']
})
export class LectureAdminVideoComponent implements AdminComponent{
  public data: VideoAdminData = {
    title:'',
    video: null,
    type : 'video',
    index : 0
  };
  moveUp!: () => void;
  moveDown!: () => void;
  remove!: () => void;
  onFilesSelected(event: any): void {
    this.data.video = event.target.files;
    console.log(this.data.video)
  }
}
