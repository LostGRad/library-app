import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
//models
import {Authors} from '../models/authors';
import {DropDown} from '../models/dropdown';
//servisec
import { MessageService } from './message.service';
import { AuthorsService} from './authors.service';


@Injectable({ providedIn: 'root' })
export class DropDownService{
    private getId: number;
    private authorsUrl = 'api/authorsDB';
    private authorsList: Authors[]=[];
    dropdown: DropDown;
    constructor(private authorsService: AuthorsService, private http: HttpClient) { }
    rtrnList()
    {
         this.authorsService.getAuthors()
            .subscribe(authorsList => this.authorsList = authorsList);
            return this.authorsList;
    }
    getAuthors (): Observable<Authors[]> {
        return this.http.get<Authors[]>(this.authorsUrl)
  }
    getIdfunc(id: number)
    {
        this.getId=id;
        return this.getId;
    }
    rtrnId()
    {
        return this.getId;
    }
}
