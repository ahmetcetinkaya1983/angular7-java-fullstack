import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='ahmet';
  password='';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService,
              private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
   //console.log(this.username);
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin =false;
    } else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
    //console.log(this.username);
     this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data =>{
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin =false;
        },
        error => {
          this.invalidLogin = true;
        }
      );
   }

   handleJWTAuthLogin() {
    //console.log(this.username);
     this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        data =>{
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin =false;
        },
        error => {
          this.invalidLogin = true;
        }
      );
   }

}
