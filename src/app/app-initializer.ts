import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { AuthService } from './services/auth.service';

export function setupApplication(authService: AuthService) {
  return (): Promise<any> => {
    return authService.getUserInfo().then(user => authService.user = user);
  };
}
