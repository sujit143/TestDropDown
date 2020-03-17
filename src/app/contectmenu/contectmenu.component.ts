import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contectmenu',
  templateUrl: './contectmenu.component.html',
  styleUrls: ['./contectmenu.component.css']
})
export class ContectmenuComponent implements OnInit {
  public kanbanData: any;

  constructor() {
    this.kanbanData = [];
  }
//   editItem = [
//     { field: 'Id', editType: ej.Kanban.EditingType.String, validationRules: { required: true, number: true } },
//     { field: 'Status', editType: ej.Kanban.EditingType.Dropdown },
//     { field: 'Assignee', editType: ej.Kanban.EditingType.Dropdown },
//     { field: 'Estimate', editType: ej.Kanban.EditingType.Numeric, editParams: { decimalPlaces: 2 }, validationRules: { range: [0, 1000] } },
//     { field: 'Summary', editType: ej.Kanban.EditingType.TextArea, validationRules: { required: true } }
// ];
  ngOnInit() {
  }

}
