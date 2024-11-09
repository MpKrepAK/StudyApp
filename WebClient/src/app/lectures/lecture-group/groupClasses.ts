import {AbstractPageElement} from '../lecture-page/page-components/abstract-page-element';

export interface GroupClasses {
  id:number;
  name:string;
  index:number;
  elements : AbstractPageElement[];
}
