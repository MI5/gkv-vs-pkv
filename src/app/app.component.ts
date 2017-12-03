import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [':host { margin: 10px; display: block; }']
})
export class AppComponent {
  title = 'GKV vs. PKV';
  testNames = ['Maike', 'Katrin', 'Isabel'];
}
