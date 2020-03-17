import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { YourdrsService } from '../yourdrs.service';

@Component({
  selector: 'app-yourdrs2',
  templateUrl: './yourdrs2.component.html',
  styleUrls: ['./yourdrs2.component.css']
})
export class Yourdrs2Component implements OnInit {

  your:any;
  constructor(private http:HttpClient,private _data:YourdrsService) {

  }

  ngOnInit() {
    this._data.getyourdrs().subscribe(data=>{
      console.log(data);
      this.your=data;
      console.log(this.your);
     })
  }

}
