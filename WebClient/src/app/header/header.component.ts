import { Component } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
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
}
