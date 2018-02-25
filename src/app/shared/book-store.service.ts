import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Book } from './book';
import { BookFactory } from './book-factory';

@Injectable()
export class BookStoreService {
  private api = 'https://book-monkey2-api.angular-buch.com';
  private headers: Headers = new Headers();


  books: Book[];

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');

//    this.books = [
//      new Book('986544356', 'Angular', ['Johannes Hoppe', 'Charles Dickens'], new Date(2017, 3, 1),
//      'Grundlagen, fortgeschrittene Techniken und Best Practises mit TypeScript und Angular 4', 4,
//      [new Thumbnail('https://ng-buch.de/cover2.jpg', 'Buchcover')], 'Mit Angular setzen Sie auf ein modernes und modulares Framework.'),
//      new Book('353643643', 'Siddhartha', ['Hermann Hesse'], new Date(1922, 11, 1),
//      'Eine indische Dichtung', 5,
//      [new Thumbnail('http://www.suhrkamp.de/cover/200/18802.jpg', 'Buchcover')], 'Ein tiefgreifendes Buch über....')
//    ];
  }

  private errorHandler(error: Error | any): Observable<any> {
    return Observable.throw(error);
  }

  getAll(): Observable<Array<Book>> {
    return this.http.get(`${this.api}/books`)
    .retry(3)
    .map(response => response.json())
    .map(rawBooks => rawBooks.map((rawBook: any) => BookFactory.fromObject(rawBook)))
    .catch(this.errorHandler);
  }

  getAllSearch(searchTerm: string): Observable<Array<Book>> {
    return this.http.get(`${this.api}/books/search/${searchTerm}`)
    .retry(3)
    .map(response => response.json())
    .map(rawBooks => rawBooks.map((rawBook: any) => BookFactory.fromObject(rawBook)))
    .catch(this.errorHandler);
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get(`${this.api}/book/${isbn}`)
    .retry(3)
    .map(response => response.json())
    .map(rawBook => BookFactory.fromObject(rawBook))
    .catch(this.errorHandler);
  }

  create(book: Book): Observable<any> {
    return this.http.post(`${this.api}/book`, JSON.stringify(book), { headers: this.headers })
    .catch(this.errorHandler);
  }

  update(book: Book): Observable<any> {
    return this.http.put(`${this.api}/book/${book.isbn}`, JSON.stringify(book), { headers: this.headers })
    .catch(this.errorHandler);
  }

  remove(isbn: string): Observable<any> {
    return this.http.delete(`${this.api}/book/${isbn}`)
    .catch(this.errorHandler);
  }
}
