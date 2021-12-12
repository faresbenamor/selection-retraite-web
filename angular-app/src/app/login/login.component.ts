import { Component, OnInit } from '@angular/core';
import {UserPreferences} from "@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript";
import {User} from "../user/_models/user.model";
import {Router} from "@angular/router";
import {UserService} from "../user/_services/user.service";
import {TokenStorageService} from "../user/_services/token-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  submitted = false;
  errorMessage: string = '';

  constructor(private router : Router, private userService : UserService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  }

  login() {
  this.userService.login(this.user).subscribe(
    (data) => {
      this.tokenStorage.saveToken(data.tokenName);
      this.tokenStorage.saveUsername(data.username);
      this.tokenStorage.saveAuthorities(data.authorities);
      this.router.navigate(['/home']);
    },
    (error) => {
      this.errorMessage = 'Username or password incorrect !';
      alert('Login ou mot de passe incorrect !')
    }

  );
  }
}
