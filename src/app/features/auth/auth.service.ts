import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = 'http://localhost:3000'; // URL-ul back-end-ului
  private tokenKey = 'jwt'; // Cheia sub care stocăm token-ul
  public isLoggedIn$ = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient, private router: Router) {}

  // Metoda pentru logare cu Google
  loginWithGoogle() {
    window.location.href = `${this.API_URL}/auth/google`; // Redirecționare către back-end
  }


  // Salvează tokenul în localStorage
  saveToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
    this.isLoggedIn$.next(true);
  }

  // Preia tokenul salvat
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Verifică dacă există un token
  hasToken(): boolean {
    return !!this.getToken();
  }

  // Șterge tokenul
  logout() {
    localStorage.removeItem(this.tokenKey);
    this.isLoggedIn$.next(false);
  }
}
