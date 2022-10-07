import { Component, OnInit } from '@angular/core';


import { StorageService } from '../services';

const ITEMS_KEY = "ITEMS";

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  newItem = "";
  items: Array<string> = [];

  constructor(private service: StorageService) {}

  async onAdd(): Promise<void> {
    this.items.push(this.newItem);
    this.newItem = "";

    await this.service.set(ITEMS_KEY, this.items);
  }

  async ngOnInit(): Promise<void> {
    const itemsDb = await this.service.get<string[]>(ITEMS_KEY);

    if (!!itemsDb) this.items = itemsDb;
  }

}
