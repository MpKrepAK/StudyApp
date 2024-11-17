import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SubjectGroup} from '../../lectures/subject-group';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {GroupClasses} from '../../lectures/lecture-group/groupClasses';

@Component({
  selector: 'app-classes-admin-info',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './classes-admin-info.component.html',
  styleUrl: './classes-admin-info.component.scss'
})
export class ClassesAdminInfoComponent {
  subjectGroup! : GroupClasses;

  constructor(private http: HttpClient, private route: ActivatedRoute, private r : Router) {}
  id : number=0;
  ngOnInit() {
    const subjectId = +this.route.snapshot.paramMap.get('id')!;
    this.id = subjectId;
    console.log('Received ID:', subjectId);

    this.http.get<GroupClasses>(`${environment.apiUrl}/api/group-classes?id=${subjectId}`)
      .subscribe((response) => {
        this.subjectGroup = response;
        console.log('Received Subject:', this.subjectGroup);
      });
  }

  update(id: number) {
    this.http.put<GroupClasses>(`${environment.apiUrl}/api/group-classes/${id}`, this.subjectGroup)
      .subscribe((response) => {

      });
    this.r.navigate(['/admin/subjects']);
  }

  delete(id: number) {
    this.http.delete<GroupClasses>(`${environment.apiUrl}/api/group-classes/${id}`)
      .subscribe((response) => {

      });
    this.r.navigate(['/admin/subjects']);
  }
}
