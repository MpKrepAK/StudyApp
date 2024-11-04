import { Injectable } from '@angular/core';
import {AbstractPageElement} from './page-components/abstract-page-element';
import {PageTextElement} from './page-components/page-text/page-text-element';
import {PageListElement} from './page-components/page-list/page-list-element';
import {PageFileElement} from './page-components/page-files/page-file-element';
import {PageImageElement} from './page-components/page-image/page-image-element';

@Injectable({
  providedIn: 'root'
})
export class PageElementsService {
  pageComponents : AbstractPageElement[] = [];
  constructor() {
    let text1 : PageTextElement = {
      id:1,
      index:1,
      type:"text",
      title : "Очень важный текст",
      body : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam dignissimos ipsam, iusto numquam quidem quos ullam. A ad alias aliquam at cupiditate debitis dolorem doloremque dolores, ducimus eos et fugiat illum inventore iste iusto neque omnis optio porro quis quisquam quos reprehenderit sed sequi, sit tempora velit vero vitae? Accusamus aperiam beatae cum earum eius eligendi, enim eos et excepturi expedita facilis impedit incidunt laboriosam nihil perferendis, porro provident qui reprehenderit sapiente tempore ullam vero voluptates voluptatum? Accusamus asperiores consequuntur, cum delectus deserunt ea earum enim iusto mollitia odit quasi quia quidem reiciendis repellendus reprehenderit tempore totam veniam voluptate."
    };
    let text2 : PageTextElement = {
      id:1,
      index:1,
      type:"text",
      title : "Еще более важный текст",
      body : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam dignissimos ipsam, iusto numquam quidem quos ullam. A ad alias aliquam at cupiditate debitis dolorem doloremque dolores, ducimus eos et fugiat illum inventore iste iusto neque omnis optio porro quis quisquam quos reprehenderit sed sequi, sit tempora velit vero vitae? \n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam dignissimos ipsam, iusto numquam quidem quos ullam. A ad alias aliquam at cupiditate debitis dolorem doloremque dolores, ducimus eos et fugiat illum inventore iste iusto neque omnis optio porro quis quisquam quos reprehenderit sed sequi, sit tempora velit vero vitae? Accusamus aperiam beatae cum earum eius eligendi, enim eos et excepturi expedita facilis impedit incidunt laboriosam nihil perferendis, porro provident qui reprehenderit sapiente tempore ullam vero voluptates voluptatum? Accusamus asperiores consequuntur, cum delectus deserunt ea earum enim iusto mollitia odit quasi quia quidem reiciendis repellendus reprehenderit tempore totam veniam voluptate."
    };
    let text3 : PageTextElement = {
      id:1,
      index:1,
      type:"text",
      title : '',
      body : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam dignissimos ipsam, iusto numquam quidem quos ullam. A ad alias aliquam at cupiditate debitis dolorem doloremque dolores, ducimus eos et fugiat illum inventore iste iusto neque omnis optio porro quis quisquam quos reprehenderit sed sequi, sit tempora velit vero vitae? \n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam dignissimos ipsam, iusto numquam quidem quos ullam. A ad alias aliquam at cupiditate debitis dolorem doloremque dolores, ducimus eos et fugiat illum inventore iste iusto neque omnis optio porro quis quisquam quos reprehenderit sed sequi, sit tempora velit vero vitae? Accusamus aperiam beatae cum earum eius eligendi, enim eos et excepturi expedita facilis impedit incidunt laboriosam nihil perferendis, porro provident qui reprehenderit sapiente tempore ullam vero voluptates voluptatum? Accusamus asperiores consequuntur, cum delectus deserunt ea earum enim iusto mollitia odit quasi quia quidem reiciendis repellendus reprehenderit tempore totam veniam voluptate."
    };

    let list1 : PageListElement = {
      id:1,
      index:1,
      type:"list",
      title : 'Списочек, важный',
      isOrdered: true,
      data : ['Чупапи', 'Меняня', 'Муняню']
    };
    let list2 : PageListElement = {
      id:1,
      index:1,
      type:"list",
      title : 'Списочек, важный',
      isOrdered: true,
      data : ['Чупапи', 'Меняня', 'Муняню']
    };
    let list3 : PageListElement = {
      id:1,
      index:1,
      type:"list",
      title : 'Списочек, важный',
      isOrdered: false,
      data : ['Чупапи', 'Меняня', 'Муняню']
    };
    let list4 : PageListElement = {
      id:1,
      index:1,
      type:"list",
      title : '',
      isOrdered: false,
      data : ['Чупапи', 'Меняня', 'Муняню']
    };
    let file1 : PageFileElement = {
      id:1,
      index:1,
      type:"file",
      title : 'Файлики',
      files : [
        {
          link : 'C:\\Users\\vovan\\Downloads\\gs.txt',
          fileType : 'archive'
        },
        {
          link : 'C:\\Users\\vovan\\Downloads\\gs.txt',
          fileType : 'doc'
        },
        {
          link : 'C:\\Users\\vovan\\Downloads\\gs.txt',
          fileType : 'pdf'
        },
      ]
    }
    let img1 : PageImageElement = {
      id:1,
      index:1,
      type:"image",
      title : 'Фотачки',
      images : [
        {
          link : 'file.png',
          name : 'archive'
        },
        {
          link : 'file.png',
          name : 'doc'
        },
        {
          link : 'file.png',
          name : 'pdf'
        },
      ]
    }
    this.pageComponents.push(img1);
    //this.pageComponents.push(file1);
    //this.pageComponents.push(text1);
    // this.pageComponents.push(text2);
    //this.pageComponents.push(text3);
    //this.pageComponents.push(list1);
    //this.pageComponents.push(list2);
    //this.pageComponents.push(list3);
    //this.pageComponents.push(list4);
  }
  isTextElement(element : AbstractPageElement): element is PageTextElement{
    return element.type==='text';
  }

  isListElement(element: AbstractPageElement):element is PageListElement {
    return element.type==='list';
  }

  isFileElement(element: AbstractPageElement):element is PageFileElement {
    return element.type==='file';
  }
  isImageElement(element: AbstractPageElement):element is PageImageElement {
    return element.type==='image';
  }
}
