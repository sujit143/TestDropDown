import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import { Designation } from './designation';
import { AppserveicesService } from './appserveices.service';

@Component({
  selector: 'app-pringtable',
  templateUrl: './pringtable.component.html',
  styleUrls: ['./pringtable.component.css']
})
export class PringtableComponent implements OnInit {
  name = 'Angular';
  dlgref: any
  @ViewChild('cd',{static:true}) cd: ElementRef;
  data: any[]
  display = false
  arrDesig: Designation[] = [];

  constructor(private confirmationService: ConfirmationService, private _data: AppserveicesService) { }

  confirm() {

    this.display = true
    // this.dlgref = this.confirmationService.confirm({
    //     message:
    //       `<p>Are you sure that you want to perform this action?</p>
    //       <table *ngFor="let row in data">
    //         <tr>
    //         <td>{{row.name}}
    //       </table>`,
    //     accept: () => {
    //         //Actual logic to perform a confirmation
    //     }
    // });
}

getDesig() {
  this._data.getDesignations().subscribe((data: Designation[]) => {
    console.log(data);
      this.arrDesig = data;
      console.log(this.arrDesig);
  });
}
onAccept() {
  let update = (idx) => {
    console.log('timer')
    this.data[idx].done = true
  }
  setTimeout(function() { update(0); }, 1000);
  setTimeout(function() { update(1); }, 2000);
  setTimeout(function() { update(2); }, 3000);
  this.display = false
}

  ngOnInit() {
    this.getDesig();

  }

}
