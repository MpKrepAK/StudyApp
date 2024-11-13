import {AbstractPageElement} from '../abstract-page-element';
import {ConcreteFile} from './concrete-file';

export interface PageFileElement extends AbstractPageElement{
  title : string;
  elements : ConcreteFile[];
}
