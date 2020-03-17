import { Component, OnInit } from '@angular/core';
import { AppserveicesService } from '../pringtable/appserveices.service';
import { Designation } from '../pringtable/designation';
import {ConfirmationService, MessageService} from 'primeng/api';


@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styleUrls: ['./primeng.component.css']
})
export class PrimengComponent implements OnInit {
  updatedItem: number;
  title = 'Designations';
  // msgs: Message[] = [];
  closeResult: string;
  selectedDesignationOption: string;
  name: string;
  msg = 'Are You Sure!';
  description: string;
  id: number;
  arrDesig: Designation[] = [];
  editId: number;
  editName: string;
  editDescription: string;
  item: string;
  loading: boolean = true;
  searchText;
  display:boolean=false;

  // filterCountry: any[];

  // filteredCountriesMultiple: any[];
  constructor(private _data:AppserveicesService,private confirmationService: ConfirmationService,private messageService: MessageService) { }

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
  showDialog(value){
      this.display = true;

    }
    openEdit(value,i,arrDesig){
      console.log(i);
      console.log(arrDesig);
      this.display=true;
      this.name=arrDesig.name;
      this.description=arrDesig.description;
    }


      onDeptDelete(id: number) {
            console.log(id);
            this._data.deleteDesignation(id).subscribe((data: any) => {
                 this.messageService.add({severity: 'success', summary: 'Success Message', detail: 'Deleted Sucessfully'});

             },

             );
         }
        //  onFormSubmit(f) {
        //      if (this.selectedDesignationOption === 'Add') {
        //          console.log(this.id);
        //          this._data.addDesignation(f.value).subscribe((data: any) => {
        //              console.log(f.value);
        //              this.messageService.add({severity: 'success', summary: 'Success Message', detail: 'Added Sucessfully'});
        //              this.getDesig();
        //          });


        //     } else {
        //       alert();
        //       console.log(f.value);
        //       console.log(f.value.name);
        //       var req = {
        //             id: this.id,
        //             description: f.value.description,
        //             name: f.value.name
        //         };
        //       console.log(req);
        //       this._data.editDesignation(req).then(
        //             res => {
        //                 if (res) {
        //                     this.messageService.add({severity: 'success', summary: 'Success Message', detail: 'Updated Sucessfully'});

        //                     this.getDesig();
        //                 } else {

        //                 }
        //             },
        //             error => { }
        //         );
        //     }


        // }

        confirmDelete(id: number) {
            console.log(id);
            this.confirmationService.confirm({
                message: 'Are you sure that you want to proceed?',
                header: 'Confirmation',
                 icon: 'pi pi-exclamation-triangle',
                 accept: () => {
                   this.onDeptDelete(id);
                },
                reject: () => {
                }
            });
         }
      //    filterCountryMultiple(event) {
      //     let query = event.query;
      //     this._data.getDesignations().then(Designation => {
      //         this.filteredCountriesMultiple = this.filterCountry(query, Designation);
      //     });
      // }
  }



