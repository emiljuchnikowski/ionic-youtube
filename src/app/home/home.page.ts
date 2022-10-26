import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private http: HTTP) {}

  onNav(page: string): void {
    this.router.navigate([ page ]);

    this.http.get('http://ionic.io', {}, {})
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
  }
}
