import {AbstractAdminData} from '../abstract-admin-data';

export interface LinkAdminData  extends AbstractAdminData{
  title : string;
  linkText : string;
  link : string;
}
