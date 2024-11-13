import {ConcreteImage} from './concrete-image';
import {AbstractPageElement} from '../abstract-page-element';

export interface PageImageElement extends AbstractPageElement {
  title : string;
  elements : ConcreteImage[];
}
