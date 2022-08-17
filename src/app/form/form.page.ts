import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  newItem = "";
  items: Array<string> = [];

  constructor() {}

  onAdd(): void {
    this.items.push(this.newItem);
    this.newItem = "";
  }

  ngOnInit() {
  }

}
