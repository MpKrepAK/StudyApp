import { KeycloakService } from 'keycloak-angular';
import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';

export const keycloakService = new KeycloakService();

export function initializeKeycloak() {
  return async () => {
    try {
      await keycloakService.init({
        config: {
          url: 'https://192.168.162.21:8443',
          realm: 'app',
          clientId: 'web-app',
        },
        initOptions: {
          onLoad: 'login-required',
          checkLoginIframe: false,
        },
      });
      console.log('Keycloak initialization successful');
    } catch (error) {
      console.error('Keycloak initialization failed', error);
    }
  };
}
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const keycloakService = inject(KeycloakService);
  const token = keycloakService.getKeycloakInstance().token;

  // Если токен существует, добавляем его в заголовок Authorization
  const clonedRequest = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(clonedRequest);
};
