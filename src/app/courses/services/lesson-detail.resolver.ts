import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { CoursesService } from "./courses.service";
import { Observable } from "rxjs";
import { LessonDetail } from "../model/lesson-detail";

@Injectable()
export class LessonDetailResolver implements Resolve<LessonDetail> {
  constructor(private coursesService: CoursesService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<LessonDetail> {
    const courseUrl = route.parent.paramMap.get("courseUrl");
    const lessonSeqNo = route.paramMap.get("lessonSeqNo");
    return this.coursesService.loadLessonDetail(courseUrl, lessonSeqNo);
  }
}
