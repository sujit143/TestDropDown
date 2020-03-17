import { Component, OnInit } from '@angular/core';
import { AppserveicesService } from '../pringtable/appserveices.service';
import { Designation } from '../pringtable/designation';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({

  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  display: boolean=true;

  arrDesig: Designation[] = [];

  constructor(private _data:AppserveicesService,private modalService: NgbModal) { }

  getDesig() {
    this._data.getDesignations().subscribe((data: Designation[]) => {
      console.log(data);
        this.arrDesig = data;
        console.log(this.arrDesig);
    });
  }

  ngOnInit() {
    this.getDesig();
  }
  close() {

    console.log('calling on close');
    }
}
