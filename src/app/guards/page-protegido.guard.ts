import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AtenticacionService } from '../servicios/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class PageProtegidoGuard  implements CanActivate {
  constructor(private router: Router, private auth: AtenticacionService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.autenticado) {
      
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
  

}