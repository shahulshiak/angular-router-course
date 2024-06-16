import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  GuardResult,
  RouterStateSnapshot,
} from "@angular/router";
import { CourseComponent } from "../courses/course/course.component";
import { Observable } from "rxjs";

@Injectable()
export class ConfirmExitGaurd implements CanDeactivate<CourseComponent> {
  canDeactivate(
    component: CourseComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): boolean {
    return component.confirmExit();
  }
}
