import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'games-store';

  constructor(private readonly router: Router) {

  }

  redirectCreatePage() {
    this.router.navigate(['/games/create']);
  }
}
