import {TemplateRef, ViewChild} from '@angular/core';
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
////models
import {Authors} from '../../models/authors';
///services
import { AuthorsService} from '../../services/authors.service';
import { DropDownService } from '../../services/dropdown.service';
import { HttpService} from '../../services/http.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
   providers: [HttpService]
})
export class AuthorsComponent implements OnInit {
           authorsItems: Authors[]=[];
           title = 'Authors';
           editedAuthor: Authors;
           isNewRecord: boolean;
           statusMessage: string;
           @Output() onChanged = new EventEmitter<boolean>();
           change(increased:any)
           {
               this.onChanged.emit(increased);
           }
    constructor(private authorsService: AuthorsService,private dropdownService: DropDownService) { }
    ngOnInit()
    {
        this.getAuthors();
    }
    getAuthors(): void
    {
        this.authorsService.getAuthors()
             .subscribe(authorsItems => this.authorsItems = authorsItems);
    }
   addAuthor() {
     this.editedAuthor = new Authors();
     this.editedAuthor.id=this.authorsItems.length+1;
     this.authorsItems.push(this.editedAuthor);
     this.isNewRecord = true;
   }
    deleteAuthor(author: Authors): void
     {
       this.authorsItems = this.authorsItems.filter(a => a !== author);
       this.authorsService.deleteAuthor(author).subscribe();
     }
     save(author: Authors)
     {
         if (this.isNewRecord) {
              this.authorsService.createData(author).subscribe(data => {
                  this.statusMessage = 'Data has been successfully added',
                  this.getAuthors();
              });
              this.isNewRecord = false;
              author = null;
          } else {
              this.authorsService.updateData(author.id, author).subscribe(data => {
                  this.statusMessage = 'The data has been successfully updated',
                  this.getAuthors();
              });
              author = null;
          }
     }
     cancel()
     {
         this.getAuthors();
     }
     getIdForDropDown(event)
     {
         this.dropdownService.getIdfunc(event);
     }
}
