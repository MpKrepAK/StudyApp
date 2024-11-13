import {AbstractPageElement} from '../abstract-page-element';

export interface PageLinkElement extends AbstractPageElement{
  title:string;
  linkText:string;
  link:string;
}
