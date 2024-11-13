import {AbstractPageElement} from '../abstract-page-element';
import {ElementData} from '../element-data';

export interface PageListElement extends AbstractPageElement{
  title : string;
  isOrdered : boolean;
  elements: ElementData[];
}
