import {Component, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {NgForOf} from '@angular/common';
import {AcademicSubject} from '../lectures-subjects/academicSubject';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {LectureAdminTextComponent} from './lecture-admin-text/lecture-admin-text.component';
import {LectureAdminListComponent} from './lecture-admin-list/lecture-admin-list.component';
import {AdminComponent} from './admin-component';
import {AddResponseData} from './add-response-data';
import {TextAdminData} from './lecture-admin-text/text-admin-data';
import {ListAdminData} from './lecture-admin-list/list-admin-data';
import {ImageAdminData} from './lecture-admin-image/image-admin-data';
import {LectureAdminImageComponent} from './lecture-admin-image/lecture-admin-image.component';

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
  classTitle: string='';

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  containerRef!: ViewContainerRef;
  private componentRefs: ComponentRef<AdminComponent>[] = [];

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
    const values = this.componentRefs.map(ref => ref.instance.data);

    const isTextAdminData = (data: any): data is TextAdminData => {
      return data && typeof data.title === 'string' && typeof data.text === 'string';
    };

    const isListAdminData = (data: any): data is ListAdminData => {
      return data &&
        typeof data.title === 'string' &&
        typeof data.d1 === 'string' &&
        typeof data.d2 === 'string' &&
        typeof data.d3 === 'string' &&
        typeof data.d4 === 'string' &&
        typeof data.d5 === 'string' &&
        typeof data.d6 === 'string' &&
        typeof data.d7 === 'string' &&
        typeof data.d8 === 'string' &&
        typeof data.d9 === 'string' &&
        typeof data.d10 === 'string';
    };

    const isImageAdminData = (data: any): data is ImageAdminData => {
      return data &&
        typeof data.title === 'string' &&
        Array.isArray(data.images) &&
        data.images.every((image: any) => typeof image === 'string');
    };

    let data : AddResponseData = {
      title : this.classTitle,
      subjectId : this.selectedSubject?.id,
      groupId : Number(this.selectedGroupId),
      textElements : values.filter(isTextAdminData),
      listElements : values.filter(isListAdminData),
      imageElements: values.filter(isImageAdminData)
    }
    console.log(data);

    this.http.post<String>("http://localhost:8080/api/admin/page", data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }).subscribe(x => {

    }, error => {
      console.error('Ошибка при отправке данных:', error);
    });
  }


  addTextComponent() {
    const componentRef = this.containerRef.createComponent(LectureAdminTextComponent);
    this.componentRefs.push(componentRef);

    componentRef.instance.moveUp = () => this.moveComponentUp(componentRef);
    componentRef.instance.moveDown = () => this.moveComponentDown(componentRef);
  }

  addListComponent() {
    const componentRef = this.containerRef.createComponent(LectureAdminListComponent);
    this.componentRefs.push(componentRef);

    componentRef.instance.moveUp = () => this.moveComponentUp(componentRef);
    componentRef.instance.moveDown = () => this.moveComponentDown(componentRef);
  }

  addImageComponent() {
    const componentRef = this.containerRef.createComponent(LectureAdminImageComponent);
    this.componentRefs.push(componentRef);

    componentRef.instance.moveUp = () => this.moveComponentUp(componentRef);
    componentRef.instance.moveDown = () => this.moveComponentDown(componentRef);
  }

  moveComponentUp(componentRef: ComponentRef<AdminComponent>) {
    const index = this.componentRefs.indexOf(componentRef);
    if (index > 0) {
      // Меняем компоненты местами в массиве
      [this.componentRefs[index - 1], this.componentRefs[index]] = [this.componentRefs[index], this.componentRefs[index - 1]];

      // Перемещаем представление в контейнере
      this.containerRef.move(componentRef.hostView, index - 1);
    }
  }

  // Метод для перемещения компонента вниз
  moveComponentDown(componentRef: ComponentRef<AdminComponent>) {
    const index = this.componentRefs.indexOf(componentRef);
    if (index < this.componentRefs.length - 1) {
      // Меняем компоненты местами в массиве
      [this.componentRefs[index + 1], this.componentRefs[index]] = [this.componentRefs[index], this.componentRefs[index + 1]];

      this.containerRef.move(componentRef.hostView, index + 1);
    }
  }
}
