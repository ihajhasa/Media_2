import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoutUser() {
    this._user.deleteLocalUser()
    this.router.navigate([""])
  }

  constructor(public _user:UserService,
    public router:Router) { }

  ngOnInit(): void {
  }

}
