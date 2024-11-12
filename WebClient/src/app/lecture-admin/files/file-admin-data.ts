import {AbstractAdminData} from '../abstract-admin-data';

export interface FileAdminData extends AbstractAdminData{
  title : string;
  files: FileList | null;
  isImage : string;
}
