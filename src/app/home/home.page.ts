import { Component } from '@angular/core';

import {environment} from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newItem = "";
  items: Array<string> = [];
  apiUrl = environment.apiUrl;

  constructor() {}

  onAdd(): void {
    this.items.push(this.newItem);
    this.newItem = "";
  }
}
