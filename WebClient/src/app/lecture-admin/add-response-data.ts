import {AbstractAdminData} from './abstract-admin-data';
import {TextAdminData} from './lecture-admin-text/text-admin-data';
import {ListAdminData} from './lecture-admin-list/list-admin-data';
import {ImageAdminData} from './lecture-admin-image/image-admin-data';

export interface AddResponseData {
  title : string;
  subjectId?: number;
  groupId? : number;
  textElements : TextAdminData[];
  listElements : ListAdminData[];
  imageElements : ImageAdminData[];
}
