import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-home',
  template: `
  <div>
    <a routerLink="../books" class="ui red button">
      Buchliste ansehen
      <i class="right arrow icon"></i>
    </a>
  </div>
  <app-search (bookSelected)="bookSelected($event)" class="column"></app-search>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

   bookSelected(book: Book) {
     this.router.navigate(['../books', book.isbn], { relativeTo: this.route});
   }
}
