import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiKey = '23567b218376f79d9415';

    constructor(private httpClient: HttpClient) {
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  logIn(): Observable<User> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
    };
    return this.httpClient.post<User>('http://interview.agileengine.com/auth', {
      apiKey: this.apiKey,
      options: options
    });
  }
}
