import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {LecturesSubjectsComponent} from './lectures-subjects/lectures-subjects.component';
import {LecturesComponent} from './lectures/lectures.component';
import {LecturePageComponent} from './lectures/lecture-page/lecture-page.component';
import {LectureGroupComponent} from './lectures/lecture-group/lecture-group.component';
import {LectureAdminComponent} from './lecture-admin/lecture-admin.component';
import {HttpClientModule} from '@angular/common/http';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterOutlet, HeaderComponent, LecturesSubjectsComponent, LecturesComponent, LecturePageComponent, LectureGroupComponent, LectureAdminComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'WebClient';
}
