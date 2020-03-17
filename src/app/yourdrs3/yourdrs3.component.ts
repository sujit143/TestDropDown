import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YourdrsService } from '../yourdrs.service';

@Component({
  selector: 'app-yourdrs3',
  templateUrl: './yourdrs3.component.html',
  styleUrls: ['./yourdrs3.component.css']
})
export class Yourdrs3Component implements OnInit {
  saveEditFilter: boolean = false;
  editDisplayColumns: boolean = false;
  editFilterFields: boolean = false;

  displaycolumns:any;
  fielterfields:any;

  itemStringsLeft: any[] = [
    'Location'
  ];

  itemStringsRight: any[] = [
    'Provider',
    'Patient Name',
    'Case #',
    'Appointment From Date',
    'Authorization Status',
    'MOP',
    'Super Bill Status',
    'Checked In Time',
    'Appointment Created From Date',
    'Verification Status',
    'Case Details',
    'Appointment Status',
    'Dictation Type',
    'Assessment Status',
    'POS Location',
    'Video Session',
    'Dictation Status',
    'Billing Status',
    'Appointment Type'
  ];

  constructor(private http:HttpClient,private _data:YourdrsService) { }

  ngOnInit() {

    // this._data.getdisplayColumns().subscribe(data=>{
    //   console.log(data);
    //   this.displaycolumns=data;
    //   console.log(this.displaycolumns);
    //  })
    this.getdiscol();
    //  this._data.getfilterFields().subscribe(data=>{
    //   console.log(data);
    //   this.fielterfields=data;
    //   console.log(this.fielterfields);
    //  })
    this.getfilfie();
  }
getdiscol(){
  this._data.getdisplayColumns().subscribe(data=>{
    console.log(data);
    this.displaycolumns=data;
    console.log(this.displaycolumns);
   })
}
getfilfie(){
  this._data.getfilterFields().subscribe(data=>{
    console.log(data);
    this.fielterfields=data;
    console.log(this.fielterfields);
   })
}


  saveeditfilter() {
    this.saveEditFilter = true;
}
editdisplaycolumns() {
  this.editDisplayColumns = true;
}
editfilterfields() {
  this.editFilterFields = true;
}
closeDisplayColum(){
  this.editDisplayColumns = false;
}
closeSaveEditFilter(){
  this.saveEditFilter = false;
}
closeEditFilterFields(){
  this.editFilterFields = false;
}
printPage() {
  window.print();
}
}
