import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { PermissionService } from '../service/permission.service';

export const authGuard: CanActivateFn = (route, state) => {
  return inject(PermissionService).canActivate();
};
