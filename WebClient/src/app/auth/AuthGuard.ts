import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private keycloakService: KeycloakService, private router: Router) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const isLoggedIn = await this.keycloakService.isLoggedIn();

    if (!isLoggedIn) {
      await this.keycloakService.login();
      return false;
    }

    const roles = this.keycloakService.getUserRoles();

    if (roles.includes('admin')) {
      return true;
    }

    this.router.navigate(['']);
    return false;
  }
}
