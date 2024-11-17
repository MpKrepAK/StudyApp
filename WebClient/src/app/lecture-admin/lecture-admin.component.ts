import {Component, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {AcademicSubject} from '../lectures-subjects/academicSubject';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {LectureAdminTextComponent} from './lecture-admin-text/lecture-admin-text.component';
import {LectureAdminListComponent} from './lecture-admin-list/lecture-admin-list.component';
import {AdminComponent} from './admin-component';
import {AddResponseData} from './add-response-data';
import {TextAdminData} from './lecture-admin-text/text-admin-data';
import {ListAdminData} from './lecture-admin-list/list-admin-data';
import {FileAdminData} from './files/file-admin-data';
import {LectureAdminImageComponent} from './files/lecture-admin-image/lecture-admin-image.component';
import {LectureAdminFilesComponent} from './files/lecture-admin-files/lecture-admin-files.component';
import {LectureAdminVideoComponent} from './files/lecture-admin-video/lecture-admin-video.component';
import {VideoAdminData} from './files/lecture-admin-video/video-admin-data';
import {LectureAdminLinkComponent} from './lecture-admin-link/lecture-admin-link.component';
import {LinkAdminData} from './lecture-admin-link/link-admin-data';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-lecture-admin',
  standalone: true,
  imports: [
    NgForOf,
    HttpClientModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './lecture-admin.component.html',
  styleUrl: './lecture-admin.component.scss'
})
export class LectureAdminComponent implements OnInit{
  components : Component[] = [];
  subjects : AcademicSubject[] = [];
  selectedSubject?: AcademicSubject;
  classTitle: string='';
  isLoadingVisible : boolean =false;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  containerRef!: ViewContainerRef;
  private componentRefs: ComponentRef<AdminComponent>[] = [];

  selectedGroupId?: number;
  constructor(private http : HttpClient) {
  }

  ngOnInit(){
    this.http.get<AcademicSubject[]>(environment.apiUrl+"/api/academic-subjects").subscribe(x => {
      this.subjects = x;
    });
  }
  onSubjectChange() {
    this.selectedGroupId = undefined;
  }


  getAllComponentValues() {
    this.isLoadingVisible = true;
    const values = this.componentRefs.map(ref => ref.instance.data);

    const isTextAdminData = (data: any): data is TextAdminData => {
      return data && typeof data.title === 'string' && typeof data.text === 'string';
    };

    const isListAdminData = (data: any): data is ListAdminData => {
      return data &&
        typeof data.title === 'string' &&
        typeof data.d1 === 'string';
    };

    const isImageAdminData = (data: any): data is FileAdminData => {
      return data &&
        typeof data.title === 'string' &&
        data.isImage === 'image' &&
        (data.files === null || (data.files && typeof data.files.length === 'number'));
    };

    const isFileAdminData = (data: any): data is FileAdminData => {
      return data &&
        typeof data.title === 'string' &&
        data.isImage === 'file' &&
        (data.files === null || (data.files && typeof data.files.length === 'number'));
    };

    const isVideoAdminData = (data: any): data is VideoAdminData => {
      return data &&
        typeof data.title === 'string' &&
        data.type === 'video';
    };
    const isLinkAdminData = (data: any): data is LinkAdminData => {
      return data &&
        typeof data.title === 'string' &&
        typeof data.link === 'string';
    };

    const formData = new FormData();
    formData.append('title', this.classTitle);
    formData.append('subjectId', String(this.selectedSubject?.id));
    formData.append('groupId', String(this.selectedGroupId));

    let textIndex = 0;
    let listIndex = 0;
    let imageIndex = 0;
    let fileIndex = 0;
    let videoIndex = 0;
    let linkIndex = 0;
    console.log(values);
    let globalIndex = 0;

    values.forEach((element) => {
      if (isTextAdminData(element)) {
        formData.append(`textElements[${textIndex}].index`, globalIndex.toString());
        formData.append(`textElements[${textIndex}].title`, element.title);
        formData.append(`textElements[${textIndex}].text`, element.text);
        textIndex++;
      } else if (isListAdminData(element)) {
        formData.append(`listElements[${listIndex}].index`, globalIndex.toString());
        formData.append(`listElements[${listIndex}].title`, element.title);
        formData.append(`listElements[${listIndex}].ordered`, element.ordered);
        formData.append(`listElements[${listIndex}].d1`, element.d1 || '');
        formData.append(`listElements[${listIndex}].d2`, element.d2 || '');
        formData.append(`listElements[${listIndex}].d3`, element.d3 || '');
        formData.append(`listElements[${listIndex}].d4`, element.d4 || '');
        formData.append(`listElements[${listIndex}].d5`, element.d5 || '');
        formData.append(`listElements[${listIndex}].d6`, element.d6 || '');
        formData.append(`listElements[${listIndex}].d7`, element.d7 || '');
        formData.append(`listElements[${listIndex}].d8`, element.d8 || '');
        formData.append(`listElements[${listIndex}].d9`, element.d9 || '');
        formData.append(`listElements[${listIndex}].d10`, element.d10 || '');
        listIndex++;
      } else if (isImageAdminData(element)) {
        formData.append(`imageElements[${imageIndex}].index`, globalIndex.toString());
        formData.append(`imageElements[${imageIndex}].title`, element.title);
        if (element.files) {
          for (let i = 0; i < element.files.length; i++) {
            formData.append(`imageElements[${imageIndex}].images`, element.files[i]);
          }
        }
        imageIndex++;
      } else if (isFileAdminData(element)) {
        formData.append(`fileElements[${fileIndex}].index`, globalIndex.toString());
        formData.append(`fileElements[${fileIndex}].title`, element.title);
        if (element.files) {
          for (let i = 0; i < element.files.length; i++) {
            formData.append(`fileElements[${fileIndex}].files`, element.files[i]);
          }
        }
        fileIndex++;
      } else if (isVideoAdminData(element)) {
        formData.append(`videoElements[${videoIndex}].index`, globalIndex.toString());
        formData.append(`videoElements[${videoIndex}].title`, element.title || '');
        if (element.video && element.video instanceof FileList && element.video.length > 0) {
          formData.append(`videoElements[${videoIndex}].video`, element.video[0]);
        } else {
          console.warn(`Video element at index ${globalIndex} is not a valid File`, element.video);
        }
        videoIndex++;
      } else if (isLinkAdminData(element)) {
        formData.append(`linkElements[${linkIndex}].index`, globalIndex.toString());
        formData.append(`linkElements[${linkIndex}].title`, element.title);
        formData.append(`linkElements[${linkIndex}].linkText`, element.linkText || '');
        formData.append(`linkElements[${linkIndex}].link`, element.link);
        linkIndex++;
      }
      globalIndex++;
    });

    this.http.post(environment.apiUrl+"/api/admin/page", formData).subscribe(
      response => {
        console.log('Response from server:', response);
        this.isLoadingVisible = false;
      },
      error => {
        console.error('Ошибка при отправке данных:', error);
        this.isLoadingVisible = false;
      }
    );

  }


  addTextComponent() {
    const componentRef = this.containerRef.createComponent(LectureAdminTextComponent);
    this.componentRefs.push(componentRef);
    componentRef.instance.remove = () => this.removeComponent(componentRef);
    componentRef.instance.moveUp = () => this.moveComponentUp(componentRef);
    componentRef.instance.moveDown = () => this.moveComponentDown(componentRef);
  }

  addListComponent() {
    const componentRef = this.containerRef.createComponent(LectureAdminListComponent);
    this.componentRefs.push(componentRef);
    componentRef.instance.remove = () => this.removeComponent(componentRef);
    componentRef.instance.moveUp = () => this.moveComponentUp(componentRef);
    componentRef.instance.moveDown = () => this.moveComponentDown(componentRef);
  }

  addImageComponent() {
    const componentRef = this.containerRef.createComponent(LectureAdminImageComponent);
    this.componentRefs.push(componentRef);
    componentRef.instance.remove = () => this.removeComponent(componentRef);
    componentRef.instance.moveUp = () => this.moveComponentUp(componentRef);
    componentRef.instance.moveDown = () => this.moveComponentDown(componentRef);
  }

  addFileComponent() {
    const componentRef = this.containerRef.createComponent(LectureAdminFilesComponent);
    this.componentRefs.push(componentRef);
    componentRef.instance.remove = () => this.removeComponent(componentRef);
    componentRef.instance.moveUp = () => this.moveComponentUp(componentRef);
    componentRef.instance.moveDown = () => this.moveComponentDown(componentRef);
  }

  addVideoComponent() {
    const componentRef = this.containerRef.createComponent(LectureAdminVideoComponent);
    this.componentRefs.push(componentRef);
    componentRef.instance.remove = () => this.removeComponent(componentRef);
    componentRef.instance.moveUp = () => this.moveComponentUp(componentRef);
    componentRef.instance.moveDown = () => this.moveComponentDown(componentRef);
  }

  addLinkComponent() {
    const componentRef = this.containerRef.createComponent(LectureAdminLinkComponent);
    this.componentRefs.push(componentRef);
    componentRef.instance.remove = () => this.removeComponent(componentRef);
    componentRef.instance.moveUp = () => this.moveComponentUp(componentRef);
    componentRef.instance.moveDown = () => this.moveComponentDown(componentRef);
  }

  moveComponentUp(componentRef: ComponentRef<AdminComponent>) {
    const index = this.componentRefs.indexOf(componentRef);
    if (index > 0) {
      // Меняем компоненты местами в массиве
      [this.componentRefs[index - 1], this.componentRefs[index]] = [this.componentRefs[index], this.componentRefs[index - 1]];

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
  removeComponent(componentRef: ComponentRef<AdminComponent>) {
    const index = this.componentRefs.indexOf(componentRef);
    if (index > -1) {
      this.componentRefs.splice(index, 1);

      // Удаляем представление из контейнера
      this.containerRef.remove(this.containerRef.indexOf(componentRef.hostView));
    }
  }
}
