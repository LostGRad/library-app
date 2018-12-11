import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { AppComponent } from './app.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { BooksComponent } from './components/books/books.component';

const routes: Routes = [
    { path: '', component: AuthorsComponent},
    { path: 'authors', component: AuthorsComponent},
    { path: 'books', component:  BooksComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
