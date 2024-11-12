import { Component } from '@angular/core';
import {AdminComponent} from '../../admin-component';
import {ListAdminData} from '../../lecture-admin-list/list-admin-data';
import {FileAdminData} from '../file-admin-data';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

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
  public data: FileAdminData = {
    title:'',
    files: null,
    isImage : 'image',
    index : 0
  };
  moveUp!: () => void;
  moveDown!: () => void;
  remove!: () => void;

  onFilesSelected(event: any): void {
    this.data.files = event.target.files;
    console.log(this.data.files)
  }
}
