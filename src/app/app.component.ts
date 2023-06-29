import { Component } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'GlobalIsso';

  public user: User;

  constructor() {
    this.user = {
      username: 'Admin',
      email: 'admin@admin.com',
      isAdmin: true,
    };
  }
}
