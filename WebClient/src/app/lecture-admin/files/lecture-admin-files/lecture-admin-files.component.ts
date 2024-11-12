import { Component } from '@angular/core';
import {AdminComponent} from '../../admin-component';
import {FileAdminData} from '../file-admin-data';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-lecture-admin-files',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './lecture-admin-files.component.html',
  styleUrl: './lecture-admin-files.component.scss'
})
export class LectureAdminFilesComponent implements AdminComponent{
  public data: FileAdminData = {
    title:'',
    files: null,
    isImage : 'file',
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
