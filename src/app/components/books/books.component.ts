import {TemplateRef, ViewChild} from '@angular/core';
import {Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';
//models
import {Books} from '../../models/books';
import {Authors} from '../../models/authors';
import {DropDown} from '../../models/dropdown';
///services
import { DropDownService } from '../../services/dropdown.service';
import { LibraryService} from '../../services/library.service';
import { AuthorsService} from '../../services/authors.service';
import { HttpService} from '../../services/http.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
   title = 'Books';
   booksItems: Books[]=[];
   bookArr: Books[]=[];
   authorsItems: Authors[]=[];
   clicks:number = 0;
   dropId:number =this.takeId();;
   authors: DropDown[];
   dropdown: DropDown;
   editedBook: Books;
   isNewRecord: boolean;
   statusMessage: string;
  constructor(private libraryService: LibraryService,private authorsService: AuthorsService,private dropdownService: DropDownService) {

  }
  ngOnInit()
  {
       this.getBooks();
       this.getAuthors();
  }
  getBooks(): void
      {
          this.libraryService.getBooks()
          .subscribe(booksItems => this.booksItems = booksItems);
      }
  getAuthors(): void
  {
      this.authorsService.getAuthors()
           .subscribe(authorsItems => this.authorsItems = authorsItems);
  }
  deleteBook(book: Books): void
   {
       this.booksItems = this.booksItems.filter(a => a !== book);
       this.libraryService.deleteBook(book).subscribe();
   }
  addBook()
  {
      this.editedBook = new Books();
      this.editedBook.id=this.booksItems.length+1;
      this.booksItems.push(this.editedBook);
      this.isNewRecord = true;
  }
  save(book: Books)
  {
        if (this.isNewRecord) {
            this.libraryService.createData(book).subscribe(data => {
                this.statusMessage = 'Data has been successfully added',
                this.getBooks();
            });
            this.isNewRecord = false;
            book = null;
        } else {
            this.libraryService.updateData(book.id, book).subscribe(data => {
                this.statusMessage = 'The data has been successfully updated',
                this.getBooks();
            });
            book = null;
        }
    }
  cancel()
  {
      this.getBooks();
  }
  createArrayAuthors(authors: DropDown[])
  {
      for(var i=0;i<this.authorsItems.length;i++)
      {
              this.dropdown = new DropDown();
              this.dropdown.label=this.authorsItems[i].firstName+" "+this.authorsItems[i].lastName;
              this.dropdown.value=this.authorsItems[i].id;
              authors.push(this.dropdown);
      }
       return authors;
  }
  selectAuthorsForFilter()
  {
       this.authors=[{label: 'All Authors', value: null}];
       this.createArrayAuthors(this.authors);
       return this.authors;
  }
  selectAuthors()
  {
        this.authors=[{label: 'Select Author', value: null}];
        this.createArrayAuthors(this.authors);
        return this.authors;
  }
  changeAuthors(event,book : Books)
  {
      for(var i=0;i<this.authorsItems.length;i++)
      {
          if(event.value==this.authorsItems[i].id)
          {
              book.key=event.value;
              book.author=this.authorsItems[i].firstName+" "+this.authorsItems[i].lastName;
          }
      }
      return book;
  }
  takeId()
  {
    this.clicks = this.dropdownService.rtrnId();
    return this.clicks;
  }
datafilter()
{
    this.authors=this.selectAuthors();
    if(this.dropId == null || this.dropId==undefined)
    {
       this.bookArr = this.booksItems;
    }
     else if(this.dropId !== null || this.dropId!==undefined)
     {
        this.bookArr = this.booksItems.filter(booksItems=> booksItems.key == this.dropId);
     }
     return this.bookArr;
}
}
