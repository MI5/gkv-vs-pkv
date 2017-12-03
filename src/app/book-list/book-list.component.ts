import { Component, OnInit } from '@angular/core';

import { Book, Thumbnail } from '../shared/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor() { }

  ngOnInit() {
    this.books = [
      new Book('986544356', 'Angular', ['Johannes Hoppe', 'Charles Dickens'], new Date(2017, 3, 1),
      'Grundlagen, fortgeschrittene Techniken und Best Practises mit TypeScript und Angular 4', 4,
      [new Thumbnail('https://ng-buch.de/cover2.jpg', 'Buchcover')], 'Mit Angular setzen Sie auf ein modernes und modulares Framework.'),
      new Book('353643643', 'Siddhartha', ['Hermann Hesse'], new Date(1922, 11, 1),
      'Eine indische Dichtung', 5,
      [new Thumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Siddhartha_-_1_von_50_nummerierten_und_signierten_Exemplaren_der_Vorzugsausgabe.JPG/800px-Siddhartha_-_1_von_50_nummerierten_und_signierten_Exemplaren_der_Vorzugsausgabe.JPG', 'Buchcover')], 'Ein tiefgreifendes Buch über....')
  ];
  }

}
