import {Component, Input, OnInit} from '@angular/core';
import {PageFileElement} from './page-file-element';
import {NgForOf} from '@angular/common';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-page-files',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './page-files.component.html',
  styleUrl: './page-files.component.scss'
})
export class PageFilesComponent implements OnInit{
  ngOnInit(): void {
    this.element.elements=this.element.elements.sort((a, b) => a.id - b.id)
  }
  @Input()
  element! : PageFileElement;
  protected readonly environment = environment;
}
