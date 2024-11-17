import {Component, Input, OnInit} from '@angular/core';
import {AbstractPageElement} from './page-components/abstract-page-element';
import {NgForOf, NgIf} from '@angular/common';
import {PageTextComponent} from './page-components/page-text/page-text.component';
import {PageTextElement} from './page-components/page-text/page-text-element';
import {PageListComponent} from './page-components/page-list/page-list.component';
import {PageFilesComponent} from './page-components/page-files/page-files.component';
import {PageImageComponent} from './page-components/page-image/page-image.component';
import {PageListElement} from './page-components/page-list/page-list-element';
import {PageFileElement} from './page-components/page-files/page-file-element';
import {PageImageElement} from './page-components/page-image/page-image-element';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {GroupClasses} from '../lecture-group/groupClasses';
import { environment } from '../../../environments/environment';
import {PageLinkElement} from './page-components/page-link/page-link-element';
import {PageLinkComponent} from './page-components/page-link/page-link.component';
import {PageVideoElement} from './page-components/page-video/page-video-element';
import {PageVideoComponent} from './page-components/page-video/page-video.component';

@Component({
  selector: 'app-lecture-page',
  standalone: true,
  imports: [
    NgForOf,
    PageTextComponent,
    NgIf,
    PageListComponent,
    PageFilesComponent,
    PageImageComponent,
    HttpClientModule,
    PageLinkComponent,
    PageVideoComponent
  ],
  templateUrl: './lecture-page.component.html',
  styleUrl: './lecture-page.component.scss'
})
export class LecturePageComponent implements OnInit{
  groupClass!: GroupClasses;
  groupId: number = 0;
  constructor(private http : HttpClient, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // @ts-ignore
      this.groupId = +params.get('id');
      this.http.get<GroupClasses>(environment.apiUrl+"/api/group-classes?id="+this.groupId).subscribe(x => {
        this.groupClass= x;

        this.groupClass.elements = this.groupClass.elements.sort((a, b) => a.index - b.index);
        console.log(this.groupClass);
      });
    });
  }

  isTextElement(element : AbstractPageElement): element is PageTextElement{
    return element.type==='text';
  }
  isListElement(element: AbstractPageElement):element is PageListElement {
    return element.type==='list';
  }
  isFileElement(element: AbstractPageElement):element is PageFileElement {
    return element.type==='file';
  }
  isImageElement(element: AbstractPageElement):element is PageImageElement {
    return element.type==='image';
  }
  isLinkElement(element: AbstractPageElement):element is PageLinkElement {
    return element.type==='link';
  }
  isVideoElement(element: AbstractPageElement):element is PageVideoElement {
    return element.type==='video';
  }
}
