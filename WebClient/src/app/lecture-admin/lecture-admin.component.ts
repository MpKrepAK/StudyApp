import {Component, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {NgForOf} from '@angular/common';
import {AcademicSubject} from '../lectures-subjects/academicSubject';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {LectureAdminTextComponent} from './lecture-admin-text/lecture-admin-text.component';

@Component({
  selector: 'app-lecture-admin',
  standalone: true,
  imports: [
    NgForOf,
    HttpClientModule,
    FormsModule
  ],
  templateUrl: './lecture-admin.component.html',
  styleUrl: './lecture-admin.component.scss'
})
export class LectureAdminComponent implements OnInit{
  components : Component[] = [];
  subjects : AcademicSubject[] = [];
  selectedSubject?: AcademicSubject;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  containerRef!: ViewContainerRef;
  private componentRefs: ComponentRef<LectureAdminTextComponent>[] = [];

  selectedGroupId?: number;
  constructor(private http : HttpClient) {
  }

  ngOnInit(){
    this.http.get<AcademicSubject[]>("http://localhost:8080/api/academic-subjects").subscribe(x => {
      this.subjects = x;
    });
  }
  onSubjectChange() {
    this.selectedGroupId = undefined;
  }

  getAllComponentValues() {
    //const values = this.componentRefs.map(ref => ref.instance.());
    //console.log('Значения всех компонентов:', values);
  }


  addTextComponent() {
    const componentRef = this.containerRef.createComponent(LectureAdminTextComponent);
    this.componentRefs.push(componentRef);

    componentRef.instance.moveUp = () => this.moveComponentUp(componentRef);
    componentRef.instance.moveDown = () => this.moveComponentDown(componentRef);
  }

  // Метод для перемещения компонента вверх
  moveComponentUp(componentRef: ComponentRef<LectureAdminTextComponent>) {
    const index = this.componentRefs.indexOf(componentRef);
    if (index > 0) {
      // Меняем компоненты местами в массиве
      [this.componentRefs[index - 1], this.componentRefs[index]] = [this.componentRefs[index], this.componentRefs[index - 1]];

      // Перемещаем представление в контейнере
      this.containerRef.move(componentRef.hostView, index - 1);
    }
  }

  // Метод для перемещения компонента вниз
  moveComponentDown(componentRef: ComponentRef<LectureAdminTextComponent>) {
    const index = this.componentRefs.indexOf(componentRef);
    if (index < this.componentRefs.length - 1) {
      // Меняем компоненты местами в массиве
      [this.componentRefs[index + 1], this.componentRefs[index]] = [this.componentRefs[index], this.componentRefs[index + 1]];

      // Перемещаем представление в контейнере
      this.containerRef.move(componentRef.hostView, index + 1);
    }
  }
}
