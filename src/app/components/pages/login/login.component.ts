import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../common/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  username = '';
  password = '';
  loginFailed = false;


  async login() {
     const success = await this.authService.login(this.username, this.password);
    if (success) {
      this.loginFailed = false;
      this.router.navigate(['/']);
    } else {
      this.loginFailed = true;
    }
  }
}
