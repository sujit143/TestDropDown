import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  name = 'Angular 6';
  email="";
  aa:boolean=false;

  users=[{
    id:'123',
    email:'abc@gmail.com'
  },{
    id:'1234',
    email:'xyz@hotmail.com'
  },{
    id:'12345',
    email:'jsgsbh@kk.com'
  },{
    id:'123456',
    email:'test@gmail.com'
  }]
  constructor() { }

  ngOnInit() {
  }
  setIndex(ii){
    this.aa=ii;
    console.log
  }
}
