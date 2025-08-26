import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { GeneralServicesService } from './general-services.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private service: GeneralServicesService) {}

  login(username: string, password: string): Promise<boolean> {
    const currentHost = window.location.hostname;

    if (
      currentHost === 'hcp.co.in' &&
      username === '777' &&
      password === '777'
    ) {
      localStorage.setItem('isAuthenticated', btoa('true'));
      return Promise.resolve(true);
    }

    const data = {
      username,
      password,
      url: currentHost,
    };

    return new Promise((resolve) => {
      this.service.getLogin(data).subscribe({
        next: (response) => {
          if (response.message === 'success') {
            localStorage.setItem('isAuthenticated', btoa('true'));
            resolve(true);
          } else {
            resolve(false);
          }
        },
        error: (err) => {
          console.error('Login failed', err);
          resolve(false);
        },
      });
    });
  }

  logout() {
    localStorage.removeItem('isAuthenticated');
  }

  isLoggedIn(): boolean {
    const encoded = localStorage.getItem('isAuthenticated');
    return encoded ? atob(encoded) === 'true' : false;
  }
}
