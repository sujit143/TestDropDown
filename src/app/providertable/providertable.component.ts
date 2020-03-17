import { Component, OnInit } from '@angular/core';
import { YourdrsService } from '../yourdrs.service';

export interface ProviderData {
  Provider: string;
  PatientName: string;
  Case: string;
  Location: string;
  AppointmentCreatedDate: Date;
}

@Component({
  selector: 'app-providertable',
  templateUrl: './providertable.component.html',
  styleUrls: ['./providertable.component.css']
})
export class ProvidertableComponent implements OnInit {

  itemObjectsLeft: any;
  itemObjectsRight: any;
  your: ProviderData[];

  constructor(public data1: YourdrsService) { }

  ngOnInit() {
    this.getproviderresult();
    this.getprovidertable();
  }
  getproviderresult() {
    this.data1.getDragdrop1().subscribe (data => {
      this.itemObjectsLeft = data;
     });
    }
  getprovidertable() {
    this.data1.getProvidertable().subscribe ((data: ProviderData[]) => {
      this.your = data;
     });
    }
 }
