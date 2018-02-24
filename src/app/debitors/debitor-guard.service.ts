import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
@Injectable()
export class ProductGuardService implements CanActivate {
  constructor(private _router: Router) { }

// if there is invalid id go to localhost:4200/debitors
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      alert('Invalid product Id');
      this._router.navigate(['/debitors']);
      return false;
    }
    return true;
  }
}
