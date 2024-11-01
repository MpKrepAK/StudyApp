import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {LecturesSubjectsComponent} from './lectures-subjects/lectures-subjects.component';
import {LecturesComponent} from './lectures/lectures.component';
import {LecturePageComponent} from './lectures/lecture-page/lecture-page.component';
import {LectureGroupComponent} from './lectures/lecture-group/lecture-group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LecturesSubjectsComponent, LecturesComponent, LecturePageComponent, LectureGroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'WebClient';
}
