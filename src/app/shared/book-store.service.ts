import { Injectable } from '@angular/core';

import { Book, Thumbnail } from './book';

@Injectable()
export class BookStoreService {
  books: Book[];

  constructor() {
    this.books = [
      new Book('986544356', 'Angular', ['Johannes Hoppe', 'Charles Dickens'], new Date(2017, 3, 1),
      'Grundlagen, fortgeschrittene Techniken und Best Practises mit TypeScript und Angular 4', 4,
      [new Thumbnail('https://ng-buch.de/cover2.jpg', 'Buchcover')], 'Mit Angular setzen Sie auf ein modernes und modulares Framework.'),
      new Book('353643643', 'Siddhartha', ['Hermann Hesse'], new Date(1922, 11, 1),
      'Eine indische Dichtung', 5,
      [new Thumbnail('http://www.suhrkamp.de/cover/200/18802.jpg', 'Buchcover')], 'Ein tiefgreifendes Buch über....')
    ];
  }

  getAll() {
    return this.books;
  }

}
