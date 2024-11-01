import {AbstractPageElement} from '../abstract-page-element';

export interface PageListElement extends AbstractPageElement{
  title : string;
  isOrdered : boolean;
  data: string[];
}
