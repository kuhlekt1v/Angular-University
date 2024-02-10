import { AfterViewInit, Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  courses: Course[] = COURSES;

  constructor() {}
  ngAfterViewInit(): void {}
  onCourseSelected(course: Course) {}
}
