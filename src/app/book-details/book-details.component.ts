import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../shared/book';
import { BookStoreService } from './../shared/book-store.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent implements OnInit {
  /* @Input() */ book: Book|undefined;
  // @Output() showListEvent = new EventEmitter<any>();

  constructor(
    private bs: BookStoreService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.book = this.bs.getSingle(params['isbn']);
  }

  getRating(num: number) {
    return new Array(num);
  }

  // showBookList() {
  //   this.showListEvent.emit();
  // }
}
