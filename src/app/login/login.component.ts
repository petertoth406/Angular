import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: string
  psw!: string
  valtozo2 = 'ASD';

  constructor(
    public login: LoginService
  ) { }

  ngOnInit(): void {

  }

  validate(usr:string, psw:string){
      if(usr === this.login.user && psw === this.login.psw) {
        this.login.loggedIn = true;
        this.user = '';
        this.psw = '';
      }
      else{
        alert("Helytelen felhasználónév vagy jelszó")
      }
  }
  logOut(){
    this.login.loggedIn = false;
    this.user = '';
    this.psw = '';
  }


}
