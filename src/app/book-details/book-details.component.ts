import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from '../shared/book';
import { BookStoreService } from './../shared/book-store.service';
import { BookFactory } from '../shared/book-factory';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent implements OnInit {
  book: Book = BookFactory.empty();

  constructor(
    private bs: BookStoreService,
    private route: ActivatedRoute,
    private router: Router) {
    }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.bs.getSingle(params['isbn']).subscribe(b => this.book = b);
  }

  getRating(num: number) {
    return new Array(num);
  }

  removeBook() {
    if (confirm('Delete book?')) {
      this.bs.remove(this.book.isbn).subscribe(() => this.router.navigate(['../'], { relativeTo: this.route }));
    }
  }
}
