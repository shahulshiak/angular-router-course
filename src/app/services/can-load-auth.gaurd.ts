import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment } from "@angular/router";
import { Observable } from "rxjs";
import { AuthStore } from "./auth.store";
import { first, tap } from "rxjs/operators";

@Injectable()
export class CanLoadAuthGaurd implements CanLoad {
  constructor(private auth: AuthStore, private router: Router) {}
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.auth.isLoggedIn$.pipe(
      first(),
      tap((loggedIn) => {
        if (!loggedIn) {
          this.router.navigateByUrl("/login");
        }
      })
    );
  }
}
