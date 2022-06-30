import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newItem = "";
  items: Array<string> = [];

  constructor() {}

  onAdd(): void {
    this.items.push(this.newItem);
    this.newItem = "";
  }
}
