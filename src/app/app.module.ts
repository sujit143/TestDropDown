import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { SearchPipe } from './search.pipe';
import { HelloComponent } from '../app/filter/hello.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadimageComponent } from './uploadimage/uploadimage.component';
import { RandomcolorComponent } from './randomcolor/randomcolor.component';
import { PringtableComponent } from './pringtable/pringtable.component';
// import { DynamicdialogComponent } from './pringtable/dynamicdialog/dynamicdialog.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {PanelModule} from 'primeng/panel';
// import {ChartModule, CalendarModule, SharedModule} from 'primeng/primeng';
// import {MenuItem} from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimecrudoprComponent } from './primecrudopr/primecrudopr.component';
import { PrimengComponent } from './primeng/primeng.component'
import { InputTextareaModule,  FileUploadModule, MultiSelectModule, CalendarModule, DropdownModule } from 'primeng';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
// import {DataTableModule} from 'primeng/datatable';
// import {GrowlModule} from 'primeng/growl';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { MaterialComponent } from './material/material.component';
import {MatTableModule} from '@angular/material/table';
import { RandomcardComponent } from './randomcard/randomcard.component';
import { ContectmenuComponent } from './contectmenu/contectmenu.component';
// import { RandomcardComponent } from './material/randomcard/randomcard.component';
// import { ItemindexComponent } from './material/itemindex/itemindex.component';

import { EJAngular2Module } from 'ej-angular2';
import { Yourdrs1Component } from './yourdrs1/yourdrs1.component';
import { Yourdrs2Component } from './yourdrs2/yourdrs2.component';
import {AccordionModule} from 'primeng/accordion';
import { Yourdrs3Component } from './yourdrs3/yourdrs3.component';
import { TestyourdrsComponent } from './testyourdrs/testyourdrs.component';
// import {CalendarModule} from 'primeng/calendar';
// import { SortableModule } from 'ng2-bootstrap';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { DargdropComponent } from './dargdrop/dargdrop.component';
import { ZoomteamdragdropComponent } from './zoomteamdragdrop/zoomteamdragdrop.component';
import { KanbanComponent } from './kanban/kanban.component';
import { ProvidertableComponent } from './providertable/providertable.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    SearchPipe,
    HelloComponent,
    UploadimageComponent,
    RandomcolorComponent,
    PringtableComponent,
    PrimecrudoprComponent,
    PrimengComponent,
    TableComponent,
    MaterialComponent,
    RandomcardComponent,
    ContectmenuComponent,
    Yourdrs1Component,
    Yourdrs2Component,
    Yourdrs3Component,
    TestyourdrsComponent,
    DargdropComponent,
    ZoomteamdragdropComponent,
    KanbanComponent,
    ProvidertableComponent,
    // RandomcardComponent,
    // ItemindexComponent,
    // DynamicdialogComponent,
    // NgbModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule ,
    TableModule,
    DialogModule,
    PanelModule,
    BrowserAnimationsModule,

    InputTextareaModule,
    DropdownModule,
    HttpClientModule,
    AutoCompleteModule,
    MatTableModule,
    EJAngular2Module,
    FileUploadModule,
    MultiSelectModule,
    AccordionModule,
    CalendarModule,
    SortableModule.forRoot(),

    // NgbModal

    // GrowlModule

    // ChartModule,
    // CalendarModule,
    // SharedModule



  ],
  providers: [ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
