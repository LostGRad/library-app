import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
    createDb() {
        const booksDB = [
            { id: 1, key:1, bookName:'bookName1', author: 'Mr.Nice lastName1',year:'1111',genre:'genre' },
            { id: 2, key:2, bookName:'bookName2', author: 'Narco lastName2', year:'1111' ,genre:'genre' },
            { id: 3, key:3, bookName:'bookName3', author: 'Bombasto lastName3',year:'1111' ,genre:'genre' },
            { id: 4, key:4, bookName:'bookName4', author: 'Celeritas lastName4',year:'1111' ,genre:'genre' },
            { id: 5, key:5, bookName:'bookName5', author: 'Magneta lastName5',year:'1111' ,genre:'genre' },
            { id: 6, key:6, bookName:'bookName6', author: 'RubberMan lastName6', year:'1111' ,genre:'genre' },
            { id: 7, key:7, bookName:'bookName7', author: 'Dynama lastName7',year:'1111' ,genre:'genre' },
            { id: 8, key:8, bookName:'bookName8', author: 'Dr IQ lastName8',year:'1111' ,genre:'genre' },
            { id: 9, key:9, bookName:'bookName9', author: 'Magma lastName9',year:'1111' ,genre:'genre' },
            { id: 10, key:10, bookName:'bookName10', author: 'Tornado lastName10',year:'1111' ,genre:'genre' },
            { id: 11, key:1, bookName:'bookName2', author: 'Mr.Nice lastName1',year:'1111' ,genre:'genre' }
        ];
        const authorsDB = [
          { id: 1, firstName: 'Mr.Nice', lastName:'lastName1'},
          { id: 2, firstName: 'Narco', lastName:'lastName2' },
          { id: 3, firstName: 'Bombasto', lastName:'lastName3' },
          { id: 4, firstName: 'Celeritas', lastName:'lastName4' },
          { id: 5, firstName: 'Magneta', lastName:'lastName5' },
          { id: 6, firstName: 'RubberMan', lastName:'lastName6'},
          { id: 7, firstName: 'Dynama', lastName:'lastName7'},
          { id: 8, firstName: 'Dr IQ', lastName:'lastName8' },
          { id: 9, firstName: 'Magma', lastName:'lastName9'},
          { id: 10, firstName: 'Tornado', lastName:'lastName10' }
        ];
        return {booksDB, authorsDB};
      }
}
