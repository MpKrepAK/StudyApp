import {Component, Input} from '@angular/core';
import {PageFileElement} from '../page-files/page-file-element';
import {PageImageElement} from './page-image-element';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-page-image',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './page-image.component.html',
  styleUrl: './page-image.component.scss'
})
export class PageImageComponent {
  @Input()
  element! : PageImageElement;
}
