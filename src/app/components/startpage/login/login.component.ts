import {Component, OnInit} from '@angular/core';
import { LoginService } from '../../../services/api/login.service';
import { Router } from '@angular/router';
import {ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  encapsulation: ViewEncapsulation.None

})

 export class LoginComponent implements OnInit{
  model: any = {};
  errMsg:string = '';
  constructor(
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.logout(false);
  }

  login() {
    this.loginService.getToken(this.model.username, this.model.password)
      .subscribe(resp => {
          if (resp.user === undefined || resp.user.token === undefined || resp.user.token === "INVALID" ){
            return;
          }
          console.log("user and password is correct");
          this.router.navigate([resp.landingPage]);
        },
        errResponse => {
          switch(errResponse.status){
            case 401:
              this.errMsg = 'Username or password is incorrect';
              break;
            case 404:
              this.errMsg = 'Service not found';
            case 408:
              this.errMsg = 'Request Timedout';
            case 500:
              this.errMsg = 'Internal Server Error';
            default:
              this.errMsg = 'Server Error';
          }
        }
      );
  }

  onSignUp(){
    this.router.navigate(['signup']);
  }
}
