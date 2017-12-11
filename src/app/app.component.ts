import { Component } from '@angular/core';
import { Platform, supportsPassiveEventListeners, getSupportedInputTypes } from '@angular/cdk/platform';
import { ViewportRuler } from '@angular/cdk/scrolling';
/*import { UP_ARROW, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW, PAGE_UP, PAGE_DOWN, HOME, END, ENTER, SPACE, TAB, ESCAPE, BACKSPACE, DELETE,
  A, Z, ZERO, NINE, COMMA } from '@angular/cdk/keycodes';*/

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

  constructor(private _platform: Platform, private _ruler: ViewportRuler) {
    const showDebugInfo = true;

    // Identify the platform
    // console.log(this._platform.ANDROID);
    // console.log(this._platform.BLINK);
    // console.log(this._platform.EDGE);
    // console.log(this._platform.FIREFOX);
    // console.log(this._platform.IOS);
    // console.log(this._platform.isBrowser);
    // console.log(this._platform.SAFARI);
    // console.log(this._platform.TRIDENT);
    if (showDebugInfo) {
      console.log('Webkit? ', this._platform.WEBKIT);
      console.log('Passive event listeners? ', supportsPassiveEventListeners());
      console.log('Supported input types: ', getSupportedInputTypes());

      // Viewport (add "ViewportRuler" to the providers-array of your module)
      // { width, height }
      console.log(this._ruler.getViewportSize());
      // { bottom, height, left, right, top, width }
      console.log(this._ruler.getViewportRect());
      // { top, left }
      console.log(this._ruler.getViewportScrollPosition());
      // native resize event object
      this._ruler.change().subscribe(resizeEvent => console.log(resizeEvent));
    }
  }

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
