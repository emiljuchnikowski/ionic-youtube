import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from "./services";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private storage: StorageService) {}

  onNav(page: string): void {
    this.router.navigate([ page ]);
  }

  async ngOnInit(): Promise<void> {
      await this.storage.init();
  }
}
