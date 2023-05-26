import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Api';
  users: any;
  constructor(private userData: UserDataService) {
    userData.Users().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
    // console.log(this.users);
  }
  getuserFormData(info: any) {
    // console.log(info);
    this.userData.saveUser(info).subscribe((result) => {
      console.log(result);
    });
  }
}
