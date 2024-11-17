import {Component, Input, OnInit} from '@angular/core';
import {PageFileElement} from '../page-files/page-file-element';
import {PageImageElement} from './page-image-element';
import {NgForOf} from '@angular/common';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-page-image',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './page-image.component.html',
  styleUrl: './page-image.component.scss'
})
export class PageImageComponent implements OnInit{
  ngOnInit(): void {
    this.element.elements=this.element.elements.sort((a, b) => a.id - b.id)
  }
  @Input()
  element! : PageImageElement;
  protected readonly environment = environment;
}
