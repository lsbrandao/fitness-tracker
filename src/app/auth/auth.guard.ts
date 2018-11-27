import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../app.reducer';
import { take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(
        private router: Router,
        private store: Store<fromRoot.State>) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.store.select(fromRoot.getIsAuth).pipe(take(1))) {
            return true;
        } else {
            this.router.navigate(['']);
        }
    }

    canLoad(route: Route) {
        if (this.store.select(fromRoot.getIsAuth).pipe(take(1))) {
            return true;
        } else {
            this.router.navigate(['']);
        }
    }
}
