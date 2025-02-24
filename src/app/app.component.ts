import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Importing list component to use in this file
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Variables
  title = 'data-binding-app';
  count:number = 0;
  show:boolean = false;

  // Function for when button is clicked
  onButtonClick() {
    this.count++;
  }

  // Function for when star is double clicked
  starClicked() {
    if (this.show) {
      this.show = false;
    }
    else {
      this.show = true;
    }
  }
}
