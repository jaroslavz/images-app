import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from 'src/app/store/app.states';
import { GetToken } from 'src/app/store/actions/auth.actions';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {

  user: User = new User();
  getState: Observable<any>;
  errorMessage: string | null;
  displayLoginInfo = false;

  constructor(
    private store: Store<AppState>, private router: Router,
    private auth: AuthService
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });

    if (!this.auth.getToken()) {
      this.onSubmit();
    } else {
      this.router.navigateByUrl('/');
    }
  }

  onSubmit(): void {
    localStorage.removeItem('token');
    const payload = {};
    this.store.dispatch(new GetToken(payload));
    this.router.navigateByUrl('/');
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

  showLoginInfo() {
    this.displayLoginInfo = true;
  }

}
