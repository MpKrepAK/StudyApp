import {Component, Input} from '@angular/core';
import {PageFileElement} from './page-file-element';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-page-files',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './page-files.component.html',
  styleUrl: './page-files.component.scss'
})
export class PageFilesComponent {
  @Input()
  element! : PageFileElement;
}
