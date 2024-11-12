import {AbstractAdminData} from './abstract-admin-data';
import {TextAdminData} from './lecture-admin-text/text-admin-data';
import {ListAdminData} from './lecture-admin-list/list-admin-data';
import {FileAdminData} from './files/file-admin-data';

export interface AddResponseData {
  title : string;
  subjectId?: number;
  groupId? : number;
  textElements : TextAdminData[];
  listElements : ListAdminData[];
  imageElements : FileAdminData[];
}
