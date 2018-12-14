import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
// (import web API into RAM)
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
////components
import { MessagesComponent }    from './components/messages/messages.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { BooksComponent } from './components/books/books.component';
///
import { AppRoutingModule }     from './app-routing.module';
///primeng
import {DataTableModule, SharedModule, ButtonModule, DialogModule, InputTextModule, MultiSelectModule,
  CalendarModule, DropdownModule, ConfirmDialogModule, ConfirmationService, AutoCompleteModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import {InputMaskModule} from 'primeng/inputmask';      //api
@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    BooksComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    FormsModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    MultiSelectModule,
    CalendarModule,
    DropdownModule,
    ConfirmDialogModule,
    AutoCompleteModule,
    HttpClientModule,
    InputMaskModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
  )

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
