import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlataformaGuard implements CanActivate {

  constructor(
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree{
    const plataforma = window.sessionStorage.getItem('plataforma');
    
    console.log(plataforma)

    if (plataforma) {
      return true;
    } else {
      this.router.navigate(['/usuario-details']);
      return false;
    }
  }
  
}
