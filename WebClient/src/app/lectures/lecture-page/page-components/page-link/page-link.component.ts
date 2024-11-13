import {Component, Input} from '@angular/core';
import {PageTextElement} from '../page-text/page-text-element';
import {PageLinkElement} from './page-link-element';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-page-link',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './page-link.component.html',
  styleUrl: './page-link.component.scss'
})
export class PageLinkComponent {
  @Input()
  element! : PageLinkElement;
}
