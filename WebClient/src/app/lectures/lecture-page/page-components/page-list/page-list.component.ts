import {Component, Input, OnInit} from '@angular/core';
import {PageTextElement} from '../page-text/page-text-element';
import {PageListElement} from './page-list-element';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-page-list',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.scss'
})
export class PageListComponent implements OnInit{
  ngOnInit(): void {
    this.element.elements=this.element.elements.sort((a, b) => a.id - b.id)
    console.log(this.element)
  }
  @Input()
  element! : PageListElement;
}
