import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import {SelectItem} from 'primeng/api';
interface SelectItem {
  name: string;
}
@Component({
  selector: 'app-yourdrs1',
  templateUrl: './yourdrs1.component.html',
  styleUrls: ['./yourdrs1.component.css']
})
export class Yourdrs1Component implements OnInit {

  // registerForm:FormGroup;
  selectedType: string;

    practice: SelectItem[];

    location:SelectItem[];

    pos_practice:SelectItem[];

    pos_location:SelectItem[];

    provider:SelectItem[];

    appt_type:SelectItem[];

    appt_status:SelectItem[];

    dic_ststus:SelectItem[];

    asse_ststus:SelectItem[];

    bill_status:SelectItem[];

    case_type:SelectItem[];

    dic_type:SelectItem[];

    epi_status:SelectItem[];

    fav_fil:SelectItem[];

    aut_status:SelectItem[];

    ver_status:SelectItem[];

    sup_bill_staus:SelectItem[];

  constructor(
    // private fb: FormBuilder
    ) {}
  ngOnInit() {

  //   this.registerForm = this.fb.group({
  //     practice: ['', Validators.required],
  //     location: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]]
  // });

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

this.appt_type = [
  {name: 'Evoluation'},
  {name: 'Medical'},
  {name: 'PT'}
];

this.appt_status = [
  {name: 'Approved'},
  {name: 'Canceled'},
  {name: 'In Progress'}
];

this.dic_ststus = [
  {name: 'Pending'},
  {name: 'Provider Apporoved'},
  {name: 'Reject'}
];

this.asse_ststus = [
  {name: 'Pending'},
  {name: 'Saved'},
  {name: 'Signed'}
];

this.bill_status = [
  {name: 'Pending'},
  {name: 'Saved'},
  {name: 'Reject'}
];

this.case_type = [
  {name: 'Liability'},
  {name: 'NJ-PIP'},
  {name: 'Others'}
];

this.dic_type = [
  {name: 'Opration Report'},
  {name: 'Medical Report'},
  {name: 'Nerve Block Report'}
];

this.epi_status = [
  {name: 'Active'},
  {name: 'Authorized'},
  {name: 'Denied'}
];

this.fav_fil = [
  {name: 'Filter1'},
  {name: 'Filter2'},
  {name: 'Filter3'}
];

this.aut_status = [
  {name: 'Pending'},
  {name: 'Request'},
  {name: 'Authorized'}
];

this.ver_status = [
  {name: 'Pending'},
  {name: 'Waiting'},
  {name: 'Callback'}
];

this.sup_bill_staus = [
  {name: 'Pending'},
  {name: 'Saved'},
  {name: 'Completed'}
];
  }
  onCategoryChange(selectedType){
    var results = this.practice.filter(element => {return element.name === selectedType});
    console.log(results);
}
}
