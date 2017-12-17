import { Component, OnInit } from '@angular/core';

import { BookStoreService } from './../shared/book-store.service';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.books = this.bs.getAll();
  }
}
