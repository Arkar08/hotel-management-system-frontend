import { AuthguardService } from './../../service/authguard.service';
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthguardService);
  const router = inject(Router);

  if(auth.isAuthenticated()){
    return true;
  }else{
    router.navigate(['auth/login'])
    return false;
  }
};
