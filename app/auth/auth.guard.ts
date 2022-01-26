import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
    constructor(private authService: AuthService) { }

    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        return this.authService
            .checkPermissions();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.authService
            .isLoggedIn();
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return true;
    }
}