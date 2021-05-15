import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    public login: LoginService
  ) { }

  ngOnInit(): void {
  }
  logOut(){
    this.login.loggedIn = false;
  }

}
