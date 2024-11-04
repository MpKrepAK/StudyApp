import {Component, Input} from '@angular/core';
import {PageElementsService} from './page-elements.service';
import {AbstractPageElement} from './page-components/abstract-page-element';
import {NgForOf, NgIf} from '@angular/common';
import {PageTextComponent} from './page-components/page-text/page-text.component';
import {PageTextElement} from './page-components/page-text/page-text-element';
import {PageListComponent} from './page-components/page-list/page-list.component';
import {PageFilesComponent} from './page-components/page-files/page-files.component';
import {PageImageComponent} from './page-components/page-image/page-image.component';

@Component({
  selector: 'app-lecture-page',
  standalone: true,
  imports: [
    NgForOf,
    PageTextComponent,
    NgIf,
    PageListComponent,
    PageFilesComponent,
    PageImageComponent
  ],
  templateUrl: './lecture-page.component.html',
  styleUrl: './lecture-page.component.scss'
})
export class LecturePageComponent {
  elements : AbstractPageElement[] = [];
  constructor(protected elementsService : PageElementsService) {
    this.elements = elementsService.pageComponents;
  }

}
