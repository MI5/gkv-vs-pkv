import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, query, stagger, animateChild } from '@angular/animations';

// https://medium.com/google-developer-experts/angular-applying-motion-principles-to-a-list-d5cdd35c899e#8347

@Component({
  selector: 'app-example-animation',
  templateUrl: './example-animation.component.html',
  styles: [`
  .buttons-container, .list-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .buttons-container {
    flex-direction: row;
  }
  .buttons-container button {
    margin: 12px;
  }
  .list-container {
    flex-direction: column;
  }
  .box {
    width: 100px;
    height: 50px;
    background-color: #9c27b0;
    margin: 5px;
  }
  `],
  animations: [
    trigger('items', [

      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ]),

      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ transform: 'scale(0.5)', opacity: 0, height: '0px', margin: '0px' }))
      ])

    ]),
    trigger('list', [

      transition(':enter', [
        query('@items', stagger(300, animateChild()))
      ])

    ])
  ]
})
export class ExampleAnimationComponent implements OnInit {
  counter = 5;
  list = [1, 2, 3, 4];

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.list.push(this.counter++);
  }

  remove(index: number) {
    if (!this.list.length) {
      return;
    }

    this.list.splice(index, 1);
  }
}
