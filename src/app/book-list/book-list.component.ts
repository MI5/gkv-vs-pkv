import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { BookStoreService } from './../shared/book-store.service';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {
  books: Book[];
  @Output() showDetailsEvent = new EventEmitter<Book>();

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.books = this.bs.getAll();
  }

  showDetailsClicked(book: Book) {
    this.showDetailsEvent.emit(book);
  }
}
