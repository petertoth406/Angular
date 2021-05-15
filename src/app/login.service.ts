import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public user: string = "admin"
  public psw: string = "admin"
  public loggedIn: boolean = false;

  constructor() { }
}
