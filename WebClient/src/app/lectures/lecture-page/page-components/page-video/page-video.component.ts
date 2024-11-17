import {Component, Input} from '@angular/core';
import {PageListElement} from '../page-list/page-list-element';
import {PageVideoElement} from './page-video-element';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-page-video',
  standalone: true,
  imports: [],
  templateUrl: './page-video.component.html',
  styleUrl: './page-video.component.scss'
})
export class PageVideoComponent {
  @Input()
  element! : PageVideoElement;
  protected readonly environment = environment;
}
