import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {AcademicSubject} from '../../lectures-subjects/academicSubject';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {GroupClasses} from '../../lectures/lecture-group/groupClasses';
import {SubjectGroup} from '../../lectures/subject-group';

@Component({
  selector: 'app-groups-admin',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './groups-admin.component.html',
  styleUrl: './groups-admin.component.scss'
})
export class GroupsAdminComponent implements OnInit {

  subjectGroups: SubjectGroup[] = [];

  constructor(private http : HttpClient, private route: ActivatedRoute, private r : Router) {}
  subjectId : number = 0;
  ngOnInit() {
    const subjectId = +this.route.snapshot.paramMap.get('id')!;
    this.subjectId = subjectId;
    console.log('Received ID:', subjectId);

    this.http.get<SubjectGroup[]>(`${environment.apiUrl}/api/subject-groups?subjectId=${subjectId}`)
      .subscribe((response) => {
        this.subjectGroups = response;
        console.log('Received Subject:', this.subjectGroups);
      });
  }

  info(id: number){
    this.r.navigate(['/admin/groups/info', id]);
  }
  next(id: number){
    this.r.navigate(['/admin/groups', id]);
  }
  add(){
    this.r.navigate(['/admin/groups/add', this.subjectId]);
  }
}
