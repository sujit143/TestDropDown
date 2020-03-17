import { Component, OnInit } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { Kanban } from '@syncfusion/ej2-kanban';
import { extend } from '@syncfusion/ej2-base';
import * as dataSource from '../../assets/datasource.json';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {

  constructor() {

   }

  ngOnInit() {
    let data: Object[] = <Object[]>extend([], (dataSource as any).kanbanData, null, true);
    let kanbanObj: Kanban = new Kanban({ //Initialize Kanban control
        dataSource: data,
        keyField: 'Status',
        columns: [
            { headerText: 'To Do', keyField: 'Open' },
            { headerText: 'In Progress', keyField: 'InProgress' },
            { headerText: 'Testing', keyField: 'Testing' },
            { headerText: 'Done', keyField: 'Close' }
        ],
        cardSettings: {
            contentField: 'Summary',
            headerField: 'Id',
        }
    });
    kanbanObj.appendTo('#Kanban'); //Render initialized Kanban control
  }
}
