import { Component, OnInit } from '@angular/core';

import {environment} from '../../environments/environment';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  apiUrl = environment.apiUrl;

  constructor() { }

  ngOnInit() {
  }

}
