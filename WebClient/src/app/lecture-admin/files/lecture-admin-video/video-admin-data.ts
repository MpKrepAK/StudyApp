import {AbstractAdminData} from '../../abstract-admin-data';

export interface VideoAdminData extends AbstractAdminData{
  title : string;
  video: FileList | null;
  type : string;
}
