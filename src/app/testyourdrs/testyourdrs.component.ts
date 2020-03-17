import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';

@Component({
  selector: 'app-testyourdrs',
  templateUrl: './testyourdrs.component.html',
  styleUrls: ['./testyourdrs.component.css']
})
export class TestyourdrsComponent implements OnInit {

    cars: SelectItem[];

    selectedCar2: string = 'BMW';

    items: SelectItem[];

    uploadedFiles: any[] = [];

  constructor() {

  this.cars = [
      {label: 'Hema', value: 'Hema'},
      {label: 'Eaglewood Hospital', value: 'Hema'},
      {label: 'PWMG', value: 'Hema'},
      {label: 'South Dean', value: 'Hema'},
      {label: 'SRVSC', value: 'Hema'},
      {label: 'HEMG', value: 'Hema'},
      {label: 'Bronux', value: 'Hema'},
      {label: 'QA test office practice', value: 'Hema'},
      {label: 'QA test surgical practice', value: 'Hema'},
      {label: 'Univercity spine center', value: 'Hema'}
  ];

  this.items = [];
  for (let i = 0; i < 10000; i++) {
      this.items.push({label: 'Item ' + i, value: 'Item ' + i});
  }
}

  ngOnInit() {
  }
}
