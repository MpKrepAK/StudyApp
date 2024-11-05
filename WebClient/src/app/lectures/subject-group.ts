import {GroupClasses} from './lecture-group/groupClasses';

export interface SubjectGroup {
  id:number;
  name:string;
  index:number;
  groupClasses : GroupClasses[];
}
