import {AbstractAdminData} from '../abstract-admin-data';

export interface ImageAdminData extends AbstractAdminData{
  title : string;
  images: File[];
}
