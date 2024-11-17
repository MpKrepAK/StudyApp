import {Component, OnInit} from '@angular/core';
import {AcademicSubject} from '../../lectures-subjects/academicSubject';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {NgForOf} from '@angular/common';
import {KeycloakService} from 'keycloak-angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-subjects-admin',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './subjects-admin.component.html',
  styleUrl: './subjects-admin.component.scss'
})
export class SubjectsAdminComponent implements OnInit {

  subjects: AcademicSubject[] = [];

  constructor(private http : HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get<AcademicSubject[]>(environment.apiUrl+"/api/academic-subjects").subscribe(x => {
      this.subjects = x;
    });
  }

  info(id: number){
    this.router.navigate(['/admin/subjects', id]);
  }
  next(id: number){
    this.router.navigate(['/admin/groups', id]);
  }
  add(){
    this.router.navigate(['/admin/subjects/add']);
  }
}
