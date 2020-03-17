import { Component, OnInit } from '@angular/core';
import { YourdrsService } from '../yourdrs.service';
import { HttpClient } from '@angular/common/http';
interface SelectItem {
  name: string;
}

@Component({
  selector: 'app-dargdrop',
  templateUrl: './dargdrop.component.html',
  styleUrls: ['./dargdrop.component.css']
})
export class DargdropComponent implements OnInit {
name = 'angular';
selectedType: string;

    practice: SelectItem[];

    location: SelectItem[];

    pos_practice: SelectItem[];

    pos_location: SelectItem[];

    provider: SelectItem[];

    SelectPractice: any;

itemObjectsLeft: any;
itemObjectsRight: any;

  constructor(private data1: YourdrsService, private http: HttpClient) {
    this.itemObjectsLeft = [];


    this.practice = [
      {name: 'Hema'},
      {name: 'Eaglewood Hospital'},
      {name: 'PWMG'}
  ];

    this.location = [
     {name: '54 DEAN'},
     {name: 'Astorial'},
     {name: 'CPW'}
   ];

    this.pos_practice = [
    {name: 'HEMA'},
    {name: 'HEMG'},
    {name: 'South Dean'}
   ];

    this.pos_location = [
    {name: 'Bronux'},
    {name: '54 Dean'},
    {name: 'CPW'}
   ];

    this.provider = [
  {name: 'Aaron'},
  {name: 'Debin'},
  {name: 'Dr. Ky'}
];
  }

  ngOnInit() {
    this.getresult();
  }
  getresult() {
  this.data1.getDragdrop().subscribe (data => {
    console.log(data);
    this.itemObjectsLeft = data;
    console.log(this.itemObjectsLeft);
   })
  }
  onCategoryChange(selectedType){
    var results = this.practice.filter(element => { return element.name === selectedType });
    console.log(results);
  }
  Send(SelectedPractice) {
    console.log('SelectedPractice', SelectedPractice.value);
    this.SelectPractice = SelectedPractice.value;
  }
}
