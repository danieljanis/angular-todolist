import { Component } from '@angular/core';

// Decorator, includes metadata for the component
@Component({
  selector: 'app-root', // Used in the HTML element (index.html)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Daniel';
}
