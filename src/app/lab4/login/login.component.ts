import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.login();
  }

  public login(): void {
    const validLogin = "Admin";
    const validPassword = "Dark Lord";

    const login = prompt("Enter your login: ");

    if (this.validateLogin(login, validLogin)) {
      const password = prompt("Enter your password: ");

      this.validatePassword(password, validPassword);
    }

  }

  private validateLogin(login: string | null, validLogin: string): boolean {
    if (!login) {
      alert("Login exited.");

      return false;
    } else if (login !== validLogin) {
      alert("I don't know you.");

      return false;
    }

    return true;
  }

  private validatePassword(password: string | null, validPassword: string): boolean {
    if (!password) {
      alert("Login exited.");

      return false;
    } else if (password !== validPassword) {
      alert("Invalid password.");

      return false;
    }

    alert("Welcome, Dark Lord!")

    return true;
  }

}
