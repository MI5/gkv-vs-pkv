import { Component, Input } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  // Besonderheit: Wir nutzen eine Klasse als selector. Nur in Ausnahmefällen zu empfehlen
  selector: 'a.app-book-list-item', // tslint:disable-line:component-selector
  templateUrl: './book-list-item.component.html',
  styles: []
})
export class BookListItemComponent {
  @Input() book: Book;
}
