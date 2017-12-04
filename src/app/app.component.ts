import { Component } from '@angular/core';

import { Book } from './shared/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [':host { margin: 10px; display: block; }']
})
export class AppComponent {
  listOn = true;
  detailsOn = false;

  book: Book;

  title = 'GKV vs. PKV';
  testNames = ['Maike', 'Katrin', 'Isabel'];
}
