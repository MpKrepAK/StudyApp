import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {SubjectGroup} from '../../lectures/subject-group';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {GroupClasses} from '../../lectures/lecture-group/groupClasses';

@Component({
  selector: 'app-classes-admin',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './classes-admin.component.html',
  styleUrl: './classes-admin.component.scss'
})
export class ClassesAdminComponent {
  groupClasses: GroupClasses[] = [];

  constructor(private http : HttpClient, private route: ActivatedRoute, private r : Router) {}
  subjectId : number = 0;
  ngOnInit() {
    const subjectId = +this.route.snapshot.paramMap.get('id')!;
    this.subjectId = subjectId;
    console.log('Received ID:', subjectId);

    this.http.get<GroupClasses[]>(`${environment.apiUrl}/api/group-classes/${subjectId}`)
      .subscribe((response) => {
        this.groupClasses = response;
        console.log('Received Subject:', this.groupClasses);
      });
  }

  info(id: number){
    this.r.navigate(['/admin/classes/info', id]);
  }
  add(){
    this.r.navigate(['/admin/lecture-add']);
  }
}
