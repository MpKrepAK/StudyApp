import {GroupClasses} from '../lectures/lecture-group/groupClasses';
import {SubjectGroup} from '../lectures/subject-group';

export interface AcademicSubject {
  id:number;
  name:string;
  lectureGroups : SubjectGroup[];
}
