import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Authors } from '../models/authors';
import { MessageService } from './message.service';
//import { InMemoryDataService } from './in-memory-data.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AuthorsService{
    private authorsUrl = 'api/authorsDB';
    constructor(
                private http: HttpClient,
                private messageService: MessageService) { }

  getAuthors (): Observable<Authors[]> {
      return this.http.get<Authors[]>(this.authorsUrl);
}
createData(author: Authors){
    return this.http.post(this.authorsUrl, author);

 }
 updateData(id: number, author: Authors) {
    return this.http.post<Authors>(this.authorsUrl, author, httpOptions)
  }
  deleteAuthor (author: Authors | number): Observable<Authors> {
     const id = typeof author === 'number' ? author : author.id;
     const url = `${this.authorsUrl}/${id}`;

     return this.http.delete<Authors>(url, httpOptions);
}
getId(id: number)
{
    return id;
}
}
