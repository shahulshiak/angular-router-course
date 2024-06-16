import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Course } from "../model/course";
import { Injectable } from "@angular/core";
import { CoursesService } from "./courses.service";
import { Observable } from "rxjs";

@Injectable()
export class CourseResolver implements Resolve<Course> {
  constructor(private coursesSerice: CoursesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Course> {
    // localhost:4200/courses/angular-router-course
    const courseUrl = route.paramMap.get('courseUrl');
    return this.coursesSerice.loadCourseByUrl(courseUrl);
  }
}
