import {Component, Input} from '@angular/core';
import {PageTextElement} from './page-text-element';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-page-text',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './page-text.component.html',
  styleUrl: './page-text.component.scss'
})
export class PageTextComponent{
  @Input()
  element! : PageTextElement;
}
