import { Component } from '@angular/core';

import { Book } from './shared/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [':host { margin: 10px; display: block; }']
})
export class AppComponent {
  title = 'GKV vs. PKV';
  testNames = ['Maike', 'Katrin', 'Isabel'];

  listOn = true;
  detailsOn = false;

  book: Book;

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(book: Book) {
    this.book = book;
    this.listOn = false;
    this.detailsOn = true;
  }
}
