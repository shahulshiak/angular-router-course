import { Component, OnInit } from "@angular/core";
import { LessonDetail } from "../model/lesson-detail";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: "lesson",
  templateUrl: "./lesson-detail.component.html",
  styleUrls: ["./lesson-detail.component.css"],
})
export class LessonDetailComponent implements OnInit {
  lesson$: Observable<LessonDetail>;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.lesson$ = this.route.data.pipe(
      map(data => data["lesson"])
    );
  }

  previous(lesson: LessonDetail) {
    this.router.navigate(["lessons", lesson.seqNo - 1], {
      relativeTo: this.route.parent,
    });
  }

  next(lesson: LessonDetail) {
    this.router.navigate(["lessons", lesson.seqNo + 1], {
      relativeTo: this.route.parent,
    });
  }
}
