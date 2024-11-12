import {AbstractAdminData} from './abstract-admin-data';

export interface AdminComponent {
  data: AbstractAdminData;
  moveUp : () => void;
  moveDown : () => void;
  remove : () => void;
}
