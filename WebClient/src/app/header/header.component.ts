import { Component } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private keycloakService : KeycloakService) {
  }
  logout(){
    this.keycloakService.logout();
  }
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  isAdmin(){
    const roles = this.keycloakService.getUserRoles();

    if (roles.includes('admin')) {
      return true;
    }
    return false;
  }
}
