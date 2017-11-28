import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  failureLogin = 1;
  constructor(private router: Router , private user:UserService) { }

  ngOnInit() {
  }

    loginUser(e)
    {
      e.preventDefault();
      var username = e.target.elements[0].value;
      var password = e.target.elements[1].value;
      console.log(username , password);
      if(username == 'admin' && password == 'pass')
      {
        this.user.setUserLoggedIn();
        this.router.navigate(['dashboard']);
      }
      else
      {
        this.failureLogin = 0;
      }

    }
}
