import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {authInterceptor, initializeKeycloak, keycloakService} from './app/keycloak-init';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {KeycloakService} from 'keycloak-angular';
import {AuthInterceptor} from './app/auth.interceptor';
import {provideRouter} from '@angular/router';
import {routes} from './app/app.routes';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

async function main() {
  await initializeKeycloak()();

  bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient(withInterceptors([authInterceptor])),
      { provide: KeycloakService, useValue: keycloakService },
      provideRouter(routes)
    ],
  }).catch(err => console.error(err));
}

main();
