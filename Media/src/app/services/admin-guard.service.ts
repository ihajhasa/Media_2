import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  canActivate() {
    const user = this._user.getLocalUser()

    if (!user) {
      this.router.navigate([""])
      return false;
    }

    if (!user.name ||
        !user.email ||
        !user.token)
        {
          this.router.navigate([""])
          return false;
        }

    return true;
  }

  constructor(private _user: UserService,
    private router: Router) { }
}
